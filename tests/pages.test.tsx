import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "@/features/home-page";
import About from "@/features/about-page";
import Skills from "@/features/skills-page";
import Education from "@/features/education-page";
import Projects from "@/features/projects-page";
import Contact from "@/features/contact-page";
import More from "@/features/more-page";
import { portfolioConfig } from "@/configs/portfolio.config";

test.each([
  ["home", Home, /Truong Giang/],
  ["about", About, /Software Engineer And Web/],
  ["skills", Skills, /My Technical Experience/],
  ["education", Education, /My Education/],
  ["projects", Projects, /My Projects/],
  ["contact", Contact, /Contact Me!/],
  ["more", More, /^More$/],
] as const)("renders the %s page with its main heading", (_name, Page, heading) => {
  render(<Page />);
  expect(screen.getByRole("heading", { name: heading, level: 1 })).toBeInTheDocument();
});

test("projects expose the configured project destinations", () => {
  render(<Projects />);
  const links = screen.getAllByRole("link", { name: /Visit Project/ });
  expect(links.map(link => link.getAttribute("href"))).toEqual(portfolioConfig.projects.map(project => project.link));
});

test("education displays the configured institution and period", () => {
  render(<Education />);
  for (const education of portfolioConfig.education) {
    expect(screen.getByText(education.period)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(education.institution))).toBeInTheDocument();
  }
});
