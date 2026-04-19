# hooshmand.xyz

Personal site of Hooshmand Rahmani — PhD researcher in Business Analytics and Operations
Management at Sabanci University.

Built with [Astro](https://astro.build) + the
[Astrofy](https://github.com/manuelernestog/astrofy) template + TailwindCSS + daisyUI.

## Content model

Each piece of content is its own file. You never edit a big monolithic HTML to post
something — you drop a new Markdown file and the build picks it up.

```
src/
  content/
    blog/           ← one .md per blog post
      welcome.md
    projects/       ← one .md per project
      robust-optimization-healthcare-scheduling.md
      ...
  pages/
    index.astro     ← home
    cv.astro        ← full CV
    projects.astro  ← list of projects (auto)
    blog/           ← list + per-post routes (auto)
public/
  portrait.jpg      ← profile photo (replace this with your own)
  CV__Rahmani__Hooshmand.pdf
```

## Adding a new blog post

Create `src/content/blog/my-new-post.md`:

```markdown
---
title: "My new post"
description: "One-line summary shown on the blog index."
pubDate: "2026-05-01"
tags: ["optimization", "notes"]
# optional:
# heroImage: "/some-image.webp"
# badge: "NEW"
---

Post body in Markdown. Headings, links, code fences, images — all supported.
```

Commit → Cloudflare Pages rebuilds → it appears at `/blog/my-new-post/`.

## Adding a new project

Create `src/content/projects/my-new-project.md`:

```markdown
---
title: "Project title"
description: "One-line summary shown on the projects list."
pubDate: "2026-05-01"
category: "Operations Research"       # optional
institution: "Sabanci University"      # optional
supervisor: "Dr. Someone"              # optional
tags: ["MILP", "Python"]               # optional
# heroImage: "/project-hero.webp"      # optional
# url: "https://external-link"         # optional
---

Full project write-up in Markdown.
```

## Updating the CV

- **HTML version on the site:** edit `src/pages/cv.astro`.
- **PDF download:** replace `public/CV__Rahmani__Hooshmand.pdf`.

Keep them in sync if you want both to reflect the same content.

## Replacing the portrait

Drop your photo at `public/portrait.jpg`. If missing, the sidebar falls back to the
template's `profile.webp`.

## Local development

Node was installed via conda during setup. If `node` isn't on your PATH:

```bash
export PATH="$HOME/miniconda3/bin:$PATH"
```

Then:

```bash
npm install         # first time only
npm run dev         # dev server at http://localhost:4321
npm run build       # production build to dist/
npm run preview     # serve dist/ locally to sanity-check
```

## Deploy to Cloudflare Pages (hooshmand.xyz)

The domain is already registered with Cloudflare. To publish:

1. **Push this folder to a new GitHub repo.**
   ```bash
   cd /Users/hooshmand/Desktop/hooshmand.xyz
   git init && git add . && git commit -m "Initial site"
   # create an empty repo on github.com, then:
   git remote add origin git@github.com:<you>/hooshmand.xyz.git
   git push -u origin main
   ```

2. **Create a Pages project in Cloudflare:**
   - Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
   - Pick the repo.
   - Build settings:
     - **Framework preset:** Astro
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Node version:** set env var `NODE_VERSION = 20` (or 22)

3. **Attach the custom domain:**
   - In the Pages project → **Custom domains** → **Set up a custom domain** → `hooshmand.xyz`.
   - Cloudflare will add the DNS record automatically since the domain is in your account.

4. Every push to `main` rebuilds in ~30s.

## What you may still want to tweak

- **Social links** in `src/components/SideBarFooter.astro` (add Google Scholar, GitHub, etc.).
- **Theme** (currently `lofi`) in `src/layouts/BaseLayout.astro` — any
  [daisyUI theme](https://daisyui.com/docs/themes/) works.
- **Favicon** in `public/favicon.svg`.
- **OG / social preview image** in `public/social_img.webp`.
