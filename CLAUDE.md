# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gestalt is a curated product discovery platform built with React 19 + Vite. It showcases premium lifestyle/tech products with in-depth storytelling and a blog section about design and typography.

## Commands

```bash
npm run dev      # Start development server (Vite with HMR)
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

### Tech Stack
- **React 19** with JSX (no TypeScript)
- **Vite 7** for build tooling
- **React Router 7** for client-side routing
- **Tailwind CSS 3** for styling
- **Lucide React** for icons

### Project Structure
```
src/
├── main.jsx           # App entry point
├── App.jsx            # Root component with routing
├── index.css          # Tailwind imports + Geist font definitions
├── components/        # Reusable UI components
├── pages/             # Route page components
└── data/              # Static data (products.js, blog_posts.js)
```

### Routing
Routes are defined in `App.jsx`:
- `/` - HomePage (product catalog with category filtering)
- `/products/:id` - ProductDetailPage
- `/browse` - BrowsePage
- `/blog` - BlogPage
- `/blog/:slug` - BlogPostDetailPage
- `/info` - InfoPage
- `*` - NotFoundPage

### Styling Conventions
- Custom color palette defined in `tailwind.config.js` with `curated-*` prefix
- Primary font: Geist (loaded via @font-face in index.css)
- Uses snake_case for data properties (e.g., `is_monthly_featured`, `active_category`)
- CSS variables defined in `:root` for theme colors

### Data Layer
Products and blog posts are stored as static JavaScript exports in `src/data/`:
- `products.js`: Contains `monthly_featured_products`, `regular_products`, `collections`, `categories`
- `blog_posts.js`: Blog content with markdown-style content strings

Product objects have detailed `story` objects for featured items (with `philosophy`, `gestalt_principle`, `why_matters`, `craft_story` fields).
