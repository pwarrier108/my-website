# README

**Personal Website — Operating Guide & Implementation**

This document explains how the site is run day to day and documents the Phase 1 implementation.

---

## 1. WHAT THIS REPO IS

* A static, content-first website
* Built with Astro
* Deployed automatically using GitHub Pages via GitHub Actions
* Designed to evolve without structural churn

This repo is the single source of truth.

### Phase 1 Implementation Complete

The site implements:
- Complete design system (color palette, typography, spacing)
- Navigation with Service section emphasized
- Home page structure (needs powerful opening paragraph)
- Service page with complete real content
- All section pages functional
- Content schema enforcement
- Sample essay demonstrating system

**Design Decisions:**
- Sustainable green accent (#2D5F3F) reflects AI focus
- Georgia serif body text for warmth and readability
- 680px content width optimized for long-form reading
- Era metadata emphasized over chronology
- Generous spacing (8px base unit system)
- Reading-first optimization (1.75 line height)

---

## 2. WHERE CONTENT LIVES

All authored content lives under:

```
/src/content/
  /essays
  /cases
  /reflections
  /blog
```

**Rules:**
* One Markdown/MDX file = one published artifact
* Do not place authored content anywhere else
* Do not edit /pages, /layouts, or /components when adding content

Content is added; structure is not touched.

---

## 3. HOW TO ADD CONTENT

1. Create a new Markdown file in the correct folder
2. Add required frontmatter metadata
3. Paste the final copy
4. Commit and push

**Required Frontmatter:**
```yaml
---
title: "Your Title Here"
date: 2025-01-15
type: essay  # or case, reflection, blog
themes: ["Systems Thinking", "Architecture"]
era: "Digital Analytics (2010s)"  # or null
status: published  # or draft, canonical
summary: "One paragraph summary of the piece."
---
```

**Example workflow:**
```bash
git add src/content/essays/example.md
git commit -m "Add essay on decision-making under uncertainty"
git push
```

Every push automatically rebuilds and publishes the site.

---

## 4. DRAFTS

Two allowed approaches:
* Use `status: draft` in frontmatter
* OR keep drafts under `/src/content/_private/`

Drafts are never published.

---

## 5. HOW DEPLOYMENT WORKS

Deployment uses **GitHub Pages + GitHub Actions**:

* The main branch is watched
* Every push triggers:
  * Astro build
  * Static generation
  * Pages deployment

There is no manual publishing step and no hosting console login.

**Current deployment:**
- Live at: `https://pwarrier108.github.io/my-website`
- Custom domain configured but not active: `padmanandwarrier.com`

---

## 6. PREVIEWING CHANGES

**Local development:**
```bash
npm install  # First time only
npm run dev  # Start development server
```

Open browser to `http://localhost:4321`

**Production preview workflow:**
* Create a feature branch for significant edits
* Push the branch
* Review the preview build if enabled
* Merge to main when ready

Keeps main production-safe.

---

## 7. ROLLBACK

Rollback is handled entirely through Git:

**Undo the last change:**
```bash
git revert <commit>
git push
```

**Revert to an earlier known state:**
```bash
git reset --hard <commit>
git push --force
```
(Only force push if you are the sole editor.)

---

## 8. WHAT NOT TO DO

Do **not**:
* Edit files directly on GitHub Pages
* Manually manipulate the dist/ directory
* Add new routes for content
* Change navigation when adding content
* Bypass Git for convenience

These actions break architectural intent.

---

## 9. STRUCTURAL CHANGES

Structural changes are rare and controlled.

Before making one:
* Pause content additions
* Follow /docs/CHANGE-CONTROL.md
* Document reasoning
* Execute once
* Freeze structure again

Never mix structural change with content production.

---

## 10. IF SOMETHING FEELS HARD

Difficulty is an architectural signal, not a speed bump.

If adding content feels hard:
* Stop
* Diagnose problem
* Evaluate structure
* Do not workaround silently

This site improves through clarity, not shortcuts.

---

## 11. QUICK CHECKLIST (BEFORE EVERY PUSH)

* Correct folder?
* Metadata complete?
* Image rules respected?
* Type classification correct?
* Commit message clear?

If yes → push.

---

## 12. FINAL RULE

This website grows by adding artifacts, not by modifying structure.

If this rule is followed, the system will remain stable for years.

---

## IMPLEMENTATION FILES

### Design System
- `src/styles/global.css` - Complete CSS design system

### Layouts
- `src/layouts/BaseLayout.astro` - Base layout with navigation

### Pages
- `src/pages/index.astro` - Home page
- `src/pages/service.astro` - Service (COMPLETE)
- `src/pages/work.astro` - Work
- `src/pages/values.astro` - Values
- `src/pages/reflections.astro` - Reflections
- `src/pages/blog.astro` - Blog
- `src/pages/writing/index.astro` - Writing section index
- `src/pages/writing/[slug].astro` - Essay template

### Content System
- `src/content/config.ts` - Content collection schemas
- `src/content/essays/architecture-of-constraint.md` - Sample essay

---

## WHAT STILL NEEDS CONTENT

- **Home page opening paragraph** - The powerful legacy statement
- Work case studies
- More essays
- Reflections
- Blog posts

The structure is complete and can accept all content without code changes.

---

## PHASE 1 SUCCESS CRITERIA

- ✅ Site feels complete despite limited content
- ✅ Navigation feels final
- ✅ New content can be added with no refactor
- ✅ Blog does not dominate perception
- ⏳ Reading experience feels calm and credible (needs powerful opening)

**Current status:** Architecture complete, design system implemented, Service page production-ready. Home page needs powerful opening. System ready for content.
