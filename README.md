# Nuxt + Sanity Monorepo Template

This monorepo provides a boilerplate for projects using [Nuxt](https://nuxt.com/) as the frontend framework and [Sanity CMS](https://www.sanity.io/) as the headless content management system.

It includes:

-   📦 **Monorepo structure** for Nuxt and Sanity
-   🌐 [Nuxt UI](https://ui.nuxt.com/), SEO ready, [Nuxt Image](https://image.nuxt.com)
-   ⚡ Seamless **integration** between Nuxt and Sanity
-   🧩 Easy local development and deployment setup

---

## Features

### ✅ Nuxt

-   Powered by [Nuxt UI](https://ui.nuxt.com/)
-   [Nuxt Image](https://image.nuxt.com) for image optimization
-   [Nuxt Sitemap](https://github.com/nuxt-modules/sitemap) for automatic sitemap generation
-   [Nuxt Robots](https://github.com/nuxt-modules/robots) for SEO-friendly robots.txt

### ✅ Sanity

-   Structured content editor with custom schema
-   Ready for live preview and GROQ querying

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the project in development

```bash
pnpm run dev
```

### 3. Build the project for production

```bash
pnpm run build
```

---

## ⚙️ Environment Variables

### Nuxt .env

Place this in packages/app/.env:

```bash
SANITY_STUDIO_DATASET=development
SANITY_STUDIO_PROJECTID=projectId
```

### Sanity .env

Place this in packages/studio/.env:

```bash
SANITY_STUDIO_PROJECTID=projectId
SANITY_STUDIO_TITLE=projectName
SANITY_STUDIO_DATASET=datasetName
```

---

## Folder Structure

```
/
├── packages/
│ ├── app/      # Nuxt application
│ └── studio/   # Sanity CMS studio
├── package.json
├── pnpm-workspace.yaml
└── ...
```

---

## 🛠 Notes

Make sure your Sanity project is set up and you have access to the Project ID and Dataset values.

You can deploy each app independently (e.g., Nuxt on Vercel and Sanity Studio on Sanity Studio Hosting or Netlify).
