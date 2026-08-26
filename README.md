# OI Spider — Scout Club Website

Official website for **OI Spider** (Odred izviđača "Spider"), a scout detachment based in Duga Resa, Karlovačka županija, Croatia. The detachment was officially re-established on April 25, 1952, with roots tracing back to 1927, and today carries the name it adopted in 1996.

## Tech stack

- **[React](https://react.dev/)** (JavaScript, `.jsx` — no TypeScript)
- **[Vite](https://vitejs.dev/)** — build tool and dev server
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling, integrated via `@tailwindcss/vite`
- **[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)** — display/heading font
- **[Inter](https://fonts.google.com/specimen/Inter)** — body font

## Design system

| Token | Hex | Usage |
|---|---|---|
| Dark green | `#083a2c` | Header, footer, dark sections |
| Brand green | `#0e674b` | Accents, eyebrow labels |
| Cream | `#f6f1e4` | Page background, light sections |
| Accent yellow | `#f9f307` | Small accents only (underlines, dashes) — not large fills |
| Muted text | `#5a6359` | Secondary/body text |

Sourced directly from the club's own logo colors. Yellow is used sparingly — as thin accent lines and hover underlines — rather than on large surfaces like buttons.

## Sections

- **Header** — sticky nav with mobile hamburger menu
- **Hero** — introduction, key dates, CTA buttons
- **History** (`Povijest`) — the detachment's story from 1927 to today, with a timeline
- **Activities** (`Aktivnosti`) — camps, the scout olympics, and more
- **Gallery** (`Galerija`) — photo grid
- **Bethlehem Light** (`Tradicija`) — the yearly tradition of bringing the Peace Light from Vienna
- **News** (`Novosti`) — club updates and announcements
- **Contact** (`Kontakt`) — how to get in touch
- **Footer** — sitemap, social links, contact info

## Getting started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build

\`\`\`bash
npm run build
\`\`\`

Outputs a production build to `dist/`.

## Project structure

\`\`\`
src/
  assets/          # logo and other static assets
  components/
    Header.jsx
    Hero.jsx
    History.jsx
    Activities.jsx
    Gallery.jsx
    BethlemLight.jsx
    Newspapers.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
\`\`\`
