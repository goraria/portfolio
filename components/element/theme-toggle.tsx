import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { getTheme, subscribeTheme, toggleTheme } from "@/lib/theme";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "light");
  const dark = theme === "dark";
  const reducedMotion = useReducedMotion();
  return <Button
    variant="ghost"
    className="size-full rounded-full bg-muted p-0 hover:bg-muted"
    aria-label="Toggle color theme"
    aria-pressed={dark}
    title={dark ? "Switch to light theme" : "Switch to dark theme"}
    onClick={() => { void toggleTheme(); }}
  >
    <span className="flex size-1/2 items-center justify-center">
      <motion.svg aria-hidden="true" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" className="size-full!">
        <motion.g animate={{ opacity: dark ? 0 : 1, rotate: dark ? 90 : 0, scale: dark ? 0 : 1 }} transition={{ duration: reducedMotion ? 0 : 0.3 }} style={{ transformOrigin: "50px 50px" }}>
          <path d="M50 2V11 M85 15L78 22 M98 50H89 M85 85L78 78 M50 98V89 M23 78L16 84 M11 50H2 M23 23L16 16" />
        </motion.g>
        <motion.path
          initial={false}
          animate={{
            d: dark ? "M70 49.5C70 60.8 60.8 70 49.5 70C38.2 70 29 60.8 29 49.5C29 38.2 38.2 29 49.5 29C39 45 49.5 59.5 70 49.5Z" : "M70 49.5C70 60.8 60.8 70 49.5 70C38.2 70 29 60.8 29 49.5C29 38.2 38.2 29 49.5 29C60.8 29 70 38.2 70 49.5Z",
            rotate: dark ? -360 : 0,
            scale: dark ? 1.6 : 1,
            fillOpacity: dark ? 0.25 : 0,
          }}
          fill="currentColor" transition={{ duration: reducedMotion ? 0 : 0.5 }} style={{ transformOrigin: "50px 50px" }}
        />
      </motion.svg>
    </span>
  </Button>;
}
