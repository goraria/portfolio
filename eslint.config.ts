import js from "@eslint/js"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"
// import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  globalIgnores([
    "dist",
    ".astro",
    "public",
    ".vercel",
    "io",
    "in",
    // Override default ignores of eslint-config-next.
    // Default ignores of eslint-config-next:
    // ".next/**",
    // "out/**",
    // "build/**",
    // "next-env.d.ts",
  ]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  // ...nextVitals,
])
