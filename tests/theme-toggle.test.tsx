import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, test, vi } from "vitest";
import { ThemeToggle } from "@/components/element/theme-toggle";

afterEach(() => {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
  localStorage.clear();
  vi.unstubAllGlobals();
});

test("switches light/dark, persists the selection and updates its accessible state", async () => {
  render(<ThemeToggle />);
  const user = userEvent.setup();
  const button = screen.getByRole("button", { name: "Toggle color theme" });
  expect(button).toHaveAttribute("aria-pressed", "false");
  await user.click(button);
  expect(document.documentElement).toHaveClass("dark");
  expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  expect(button).toHaveAttribute("aria-pressed", "true");
  await user.click(button);
  expect(document.documentElement).not.toHaveClass("dark");
  expect(localStorage.getItem("portfolio-theme")).toBe("light");
});

test("uses the view transition API when available", async () => {
  const start = vi.fn((update: () => void) => { update(); return { finished: Promise.resolve() }; });
  Object.defineProperty(document, "startViewTransition", { configurable: true, value: start });
  try {
    render(<ThemeToggle />);
    await userEvent.click(screen.getByRole("button", { name: "Toggle color theme" }));
    expect(start).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(document.documentElement).not.toHaveAttribute("data-theme-transition"));
  } finally {
    Reflect.deleteProperty(document, "startViewTransition");
  }
});
