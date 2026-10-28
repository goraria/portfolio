export type Theme = "light" | "dark";
const eventName = "portfolio:theme-change";
let transitioning = false;

export function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function subscribeTheme(listener: () => void) {
  window.addEventListener(eventName, listener);
  document.addEventListener("astro:after-swap", listener);
  return () => {
    window.removeEventListener(eventName, listener);
    document.removeEventListener("astro:after-swap", listener);
  };
}

export async function toggleTheme() {
  if (transitioning) return;
  transitioning = true;
  const next = getTheme() === "dark" ? "light" : "dark";
  const apply = () => {
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
    root.style.colorScheme = next;
    try { localStorage.setItem("portfolio-theme", next); } catch { /* Storage can be unavailable. */ }
    window.dispatchEvent(new Event(eventName));
  };
  try {
    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }
    document.documentElement.dataset.themeTransition = "";
    const transition = document.startViewTransition(apply);
    await transition.finished;
  } catch {
    apply();
  } finally {
    delete document.documentElement.dataset.themeTransition;
    transitioning = false;
  }
}
