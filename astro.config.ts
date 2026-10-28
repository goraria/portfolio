// @ts-check

import node from "@astrojs/node"
import vercel from "@astrojs/vercel"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  srcDir: ".",
  adapter: process.env.VERCEL === "1" ? vercel() : node({ mode: "standalone" }),
  prefetch: false,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
