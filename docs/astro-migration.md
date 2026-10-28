# Astro migration

Run the application from the repository root using `bun run dev`. Validate with `bun run typecheck`, `bun run build` and `bun run lint`.

The seven routes `/`, `/about`, `/skills`, `/education`, `/projects`, `/contact`, `/more` use Astro pages in `pages/` and React TypeScript components in `features/`. Shared TSX components use local shadcn/ui. Compatibility exports in `app/` also use TypeScript and reference those same page components.

The contact form uses an Astro server action backed by Resend, implemented in `lib/action.ts`. The required `actions/index.ts` entry only re-exports it for Astro discovery. Set `RESEND_API_KEY` and a verified `RESEND_FROM` using `.env.example`. Secrets stay server-side; build does not send email.

Build on Vercel automatically selects its adapter. Otherwise build runs with the standalone Node adapter: `node --env-file-if-exists=.env dist/server/entry.mjs`.

The reference HTML lives at `public/index.html`. `lib/public-assets.ts` prepares a generated public-assets directory excluding this one file, so it cannot override Astro's `/`. Other public assets keep their URLs and JavaScript files remain unchanged. Restart development after changing public assets to refresh this generated directory.

Run `bun run test` for Vitest UI tests (seven pages, navigation and contact submission), or `bun run test:watch` while developing. The contact action is mocked: no real emails are sent by tests.
