# pax-pack-website

Next.js 15 App Router static site for PaxPacks.

## Development Server

Run the local Next development server with:

```bash
npm run dev
```

## Key Files

- `app/page.tsx` - App Router homepage route
- `app/not-found.tsx` - App Router 404 route
- `app/layout.tsx` - Root layout, Poppins font, and SEO metadata
- `app/globals.css` - Global styles and Tailwind CSS import
- `components/` - Kebab-case component folders and files
- `lib/site-content.ts` - Shared page content and image URLs
- `lib/site-assets.ts` - Static asset path helpers for GitHub Pages
- `package.json` - Dependencies and scripts
- `next.config.mjs` - Next static export and GitHub Pages base path
- `.github/workflows/deploy-gh-pages.yml` - GitHub Pages deployment workflow

## Styling

This project uses **Tailwind CSS v4** for styling. Use Tailwind utility classes directly in JSX.
