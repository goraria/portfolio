import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type SpringOptions } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { useDock } from "@/hooks/use-dock";
import { DockProvider } from "@/providers/dock";
import { cn } from "@/lib/utils";

const smallScreenQuery = "(max-width: 639px)";
function subscribeScreen(listener: () => void) {
  const media = window.matchMedia(smallScreenQuery);
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
}

export function Dock({ children, className, magnification = 80, distance = 150, spring = { mass: 0.1, stiffness: 150, damping: 12 } }: {
  children: ReactNode; className?: string; magnification?: number; distance?: number; spring?: SpringOptions;
}) {
  const mouseX = useMotionValue(Infinity);
  const smallScreen = useSyncExternalStore(subscribeScreen, () => window.matchMedia(smallScreenQuery).matches, () => false);
  return <DockProvider value={{ mouseX, spring, distance: smallScreen ? 75 : distance, magnification: smallScreen ? 56 : magnification }}>
    <div
      data-dock
      onPointerMove={event => { if (event.pointerType !== "touch") mouseX.set(event.clientX); }}
      onPointerLeave={() => mouseX.set(Infinity)}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) mouseX.set(Infinity); }}
      className={cn("flex w-fit items-center gap-1.5 rounded-full border bg-background/95 p-2 shadow-sm backdrop-blur [--dock-scale:0.7] sm:gap-3 sm:p-3 sm:[--dock-scale:1]", className)}
    >{children}</div>
  </DockProvider>;
}

export function DockItem({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseX, distance, magnification, spring } = useDock();
  const reduceMotion = useReducedMotion();
  const offset = useTransform(mouseX, position => {
    const box = ref.current?.getBoundingClientRect();
    return box ? position - box.left - box.width / 2 : Infinity;
  });
  const target = useTransform(offset, [-distance, 0, distance], [40, magnification, 40]);
  const animated = useSpring(target, spring);
  const dimension = useTransform(reduceMotion ? target : animated, value => `calc(${value}px * var(--dock-scale, 1))`);
  return <motion.div
    ref={ref}
    data-dock-item
    className={cn("relative shrink-0", className)}
    style={{ width: dimension, height: dimension }}
    onFocus={() => {
      const box = ref.current?.getBoundingClientRect();
      if (box) mouseX.set(box.left + box.width / 2);
    }}
  >{children}</motion.div>;
}
