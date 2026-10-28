// import { defineConfig } from "prettier";

const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  singleAttributePerLine: true,
  endOfLine: "lf",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./styles/global.css",
  tailwindFunctions: ["cn", "cva"],
  overrides: [
    { files: "*.astro", options: { parser: "astro" } },
    { files: ["*.json", "*.jsonc"], options: { trailingComma: "none" } },
  ],
}

export default config;
