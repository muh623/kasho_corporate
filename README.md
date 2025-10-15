# Sho-PS Corporate Site Clone

Next.js (App Router) + TypeScript + Tailwind CSS template that reproduces the PC view of the Sho-PS corporate site top page. The hero slider is implemented with Swiper (React) and references the original asset paths under `/assets/...`.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The site will be available at [http://localhost:3000](http://localhost:3000).

3. Build for production:

   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
app/                 # App Router entry (layout, top page)
components/sho-ps/   # Hero header, home sections, footer
public/assets/       # Place images and other static files here following the original paths
```

## Notes

- Remote images served from `www.sho-ps.co.jp` are allowed through the Next.js image configuration in `next.config.mjs`.
- Tailwind utility classes are configured in `tailwind.config.ts`, including brand colors and shared card styles.
- The Swiper CSS is imported globally from `app/globals.css`.
