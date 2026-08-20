# TshinK — site web

Projet Next.js (App Router + TypeScript) pour le site de TshinK.
Base d'architecture posée à partir du mockup validé — chaque page reste
à implémenter individuellement (voir tickets "Implement page X").

## Démarrer

```bash
npm install
npm run dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).
Chaque route affiche pour l'instant un simple titre "placeholder" : la
navigation, le header, le footer et les styles globaux sont déjà en place.

## Structure

```
app/
  layout.tsx            → layout racine : polices, metadata, header/footer partagés
  globals.css            → tokens de design (couleurs, typo) + classes de base
                            (.wrap, .eyebrow, .cta-solid/.cta-ghost/.cta-outline, .ph, .ruler…)
                            repris tels quels du mockup validé
  page.tsx                → / (Accueil)
  a-propos/page.tsx       → /a-propos
  services/page.tsx       → /services
  creations/page.tsx      → /creations
  collections/page.tsx    → /collections
  collections/[slug]/     → /collections/zodiac-tribe, /kinky-link, /freedoms-temptation
  contact/page.tsx        → /contact
  mentions-legales/page.tsx → /mentions-legales

components/
  layout/
    Header.tsx + .module.css   → nav, dropdown Collections, menu mobile
    Footer.tsx + .module.css
  ui/
    Button.tsx           → cta-solid / cta-ghost / cta-outline
    Eyebrow.tsx           → le petit label "EYEBROW — TRAIT" au-dessus des titres
    ImagePlaceholder.tsx  → substitut de photo tant que les vrais visuels
                             ne sont pas intégrés (classe .ph)
    PagePlaceholder.tsx   → squelette utilisé par chaque route en attendant
                             son implémentation (à retirer page par page)

lib/
  nav-links.ts            → source unique des liens de nav + des 3 collections
                             (slug, titre, année, thème) — utilisée par le
                             header, le dropdown et generateStaticParams
```

## Design tokens

Toutes les couleurs, la typographie (Playfair Display + Jost, chargées via
`next/font/google`) et les composants de base (boutons, eyebrow, placeholder
image, séparateurs) sont définis une seule fois dans `app/globals.css` et
`components/`. Chaque ticket "Implement page X" doit réutiliser ces classes
plutôt que d'en recréer de nouvelles, pour garder la cohérence visuelle du
mockup validé.

## Prochaines étapes

Un ticket par page, dans l'ordre suggéré :
1. Accueil
2. À propos
3. Services
4. Créations (+ modale de détail)
5. Collections (index + les 3 sous-pages)
6. Contact (formulaire)
7. Mentions légales
