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

## Replace placeholders

- Replace `ImagePlaceholder` instances with real `<img>` elements when assets are ready.
- Add real GitHub and LinkedIn URLs in `src/components/Sidebar.jsx`.
- Connect the contact form in `src/components/ContactSection.jsx` to a backend or form service.

## Main structure

- `src/App.jsx` — application shell and section composition
- `src/components/` — reusable visual and section components
- `src/data/portfolio.js` — project, skills, leadership, and achievement data
- `src/index.css` — glass styling, typography, scrollbar, focus states, reduced-motion support
