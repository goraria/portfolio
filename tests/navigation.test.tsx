import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Navbar } from "@/components/element/navbar";

test.each(["/", "/about", "/skills", "/education", "/projects", "/contact", "/more"])("navigation identifies %s and exposes real page links", (pathname) => {
  render(<Navbar pathname={pathname} />);
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(7);
  expect(links.map(link => link.getAttribute("href"))).toEqual(["/", "/about", "/skills", "/education", "/projects", "/contact", "/more"]);
  expect(links.filter(link => link.getAttribute("aria-current") === "page")).toHaveLength(1);
  expect(links.find(link => link.getAttribute("aria-current") === "page")).toHaveAttribute("href", pathname);
});

test("trailing slashes and route changes keep the correct active link", () => {
  const { rerender } = render(<Navbar pathname="/about/" />);
  expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("aria-current", "page");
  rerender(<Navbar pathname="/projects" />);
  expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute("aria-current");
  expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("aria-current", "page");
});
