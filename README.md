# Redouane Chaibi · Developer portfolio

Personal CV and portfolio of Redouane Chaibi, Full Stack Developer, Technical Lead and Angular & Microservices Architect.

**Live:** https://cv-redouane-chaibi.web.app/cv

## Highlights

- Hero, about, skills, **Micro Frontend architecture**, **Easy Mat UI** (flagship open-source project), experience timeline, education and contact sections.
- Dark theme by default, light theme, smooth switch, choice saved in `localStorage` (`cv-theme`). All colors come from CSS variables in `src/styles.scss`.
- English, French and Arabic (RTL) content in `public/i18n/*.json`, language saved in `localStorage` (`cv-lang`).
- Mobile-first responsive layout, keyboard accessible, `prefers-reduced-motion` respected.
- Angular 22, standalone components, signals, lazy-loaded page. The only runtime dependency besides Angular is `@ngx-translate`.

## Structure

```
src/app/
  core/       theme + language services, typed content model, language-neutral CV data (cv.data.ts)
  layout/     header with navigation, scroll-spy, theme and language switchers
  sections/   hero, about, skills, microfrontends, easy-mat-ui, experience, education, contact
  shared/     icon, section heading, scroll-reveal directive
  pages/      cv-page (the /cv route)
public/       i18n JSON, images, favicon
```

Texts live in `public/i18n/{en,fr,ar}.json`; names, links and technology badges live in `src/app/core/cv.data.ts`.

## Commands

```bash
npm install
npm start          # dev server on http://localhost:4200
npm test           # unit tests (Vitest)
npm run build      # production build in dist/curriculum-vitae/browser
npm run deploy     # build + firebase deploy --only hosting (project cv-redouane-chaibi)
```

## Hosting

Firebase Hosting serves `dist/curriculum-vitae/browser` and rewrites every route to `index.html`, so `/cv` works on direct access and refresh.
