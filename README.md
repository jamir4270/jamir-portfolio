# Jamir Andrade Portfolio

A responsive React + Tailwind CSS portfolio implementing the provided Frutiger Aero Minimalism / Technozen design specification.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Content & assets

- All portfolio content lives in `src/data/portfolio.js` (projects, experience, recommendations, certs, socials, gallery).
- Images live in `public/images/` (`profile.jpg`, `projects/*.png|jpg|webp`, `gallery/*.jpg|png`). CV at `public/Andrade_Resume.pdf`.
- Contact form uses EmailJS (`@emailjs/browser`) — copy `.env.example` to `.env.local` and set `VITE_EMAILJS_*` keys.

## Main structure

- `src/App.jsx` — application shell and section composition
- `src/components/` — reusable visual and section components
- `src/data/portfolio.js` — project, skills, leadership, and achievement data
- `src/index.css` — glass styling, typography, scrollbar, focus states, reduced-motion support
