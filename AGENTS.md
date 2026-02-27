# Portfolio Build Prompt for AI Agent (Cursor/Claude/Bolt)

## CONTEXT
You are building a personal portfolio website for Naman Gupta, an AI Engineer. This is NOT a generic developer portfolio — it must position Naman specifically as an AI/Agent infrastructure engineer. The design should feel like a YC startup landing page (think linear.app, vercel.com, gumloop.com aesthetic), not a student portfolio.

## TECH STACK (Non-negotiable)
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (base components — buttons, cards, badges, etc.)
- Magic UI (animated components — install from magicui.design)
  - Specific components to use: BlurFade, BorderBeam, AnimatedBeam, Terminal, Dock, NumberTicker, ShimmerButton, AnimatedGradientText, DotPattern or GridPattern (for background)
- next-mdx-remote or @next/mdx (for blog)
- Framer Motion (comes with Magic UI, use for page transitions and scroll animations)
- Geist font (from Vercel) or Inter
- Deploy target: Vercel

## DESIGN SYSTEM
```
Colors:
  --background: #0a0a0a (near black)
  --surface: #111111 (cards, sections)
  --surface-hover: #1a1a1a
  --border: #1e1e1e (subtle borders)
  --text-primary: #ededed
  --text-secondary: #888888
  --text-muted: #555555
  --accent-blue: #3b82f6
  --accent-purple: #8b5cf6
  --accent-gradient: linear-gradient(135deg, #3b82f6, #8b5cf6)
  --accent-glow: rgba(59, 130, 246, 0.15) (for hover glow effects on cards)

Typography:
  Font: Geist Sans (from 'geist/font/sans') — fallback to Inter
  Code font: Geist Mono or JetBrains Mono
  h1: 3.5rem/4rem, font-weight 700, tracking-tight
  h2: 2rem, font-weight 600
  h3: 1.25rem, font-weight 600
  body: 1rem, font-weight 400, text-secondary color
  small/tags: 0.875rem

Spacing:
  Section padding: py-24 px-6 (mobile) / px-8 (desktop)
  Max width: max-w-5xl mx-auto (content), max-w-6xl (full sections)
  Card padding: p-6
  Card border-radius: rounded-xl
  Card border: border border-[#1e1e1e]
  Gap between cards: gap-6

Effects:
  - Cards: subtle border, on hover -> border-accent-blue/30 + shadow-[0_0_30px_rgba(59,130,246,0.08)]
  - Section transitions: BlurFade from Magic UI (fade-up on scroll)
  - Background: DotPattern or subtle grid (very low opacity, 5-10%)
  - NO particles. NO 3D globes. NO floating icons. NO blackhole videos. Clean and minimal.
  - Gradient orbs: Optional — 1-2 very subtle blurred gradient circles (blue/purple, opacity 10-15%) positioned absolute behind hero section
```

## PAGE STRUCTURE — Single Page with Smooth Scroll + /blog route

### 1. NAVBAR (sticky, glassmorphism)
- Left: "Naman Gupta" (text logo, font-weight 600)
- Right: Projects | Experience | Skills | Blog | Contact
- Background: bg-black/50 backdrop-blur-xl border-b border-[#1e1e1e]
- Use Dock component from Magic UI on mobile as bottom nav (optional but slick)
- Smooth scroll to section IDs on click

### 2. HERO SECTION
```
Layout:
  - Left-aligned text (not centered)
  - Ample whitespace, no clutter

Content:
  Line 1 (small, text-secondary): "AI Engineer • Agent Builder • Open Source"
  Line 2 (h1, large, gradient text using AnimatedGradientText from Magic UI):
    "I build AI systems that work in production."
  Line 3 (body, text-secondary, max-w-lg):
    "Currently shipping RAG pipelines and multi-agent workflows at Infradock.ai.
     Previously built real-time systems at Oldowan Innovations and healthcare
     APIs at Yantram Medtech."
  Line 4 (CTAs):
    [View Projects] → ShimmerButton from Magic UI, accent gradient
    [Read Blog] → outline button, ghost style
    [GitHub] [LinkedIn] [Email] → small icon links, text-muted, hover:text-primary

Optional:
  - Right side or below: Terminal component from Magic UI showing a typed command:
    $ npx reasonflow --classify --draft --send
    ✓ Email classified: partnership inquiry
    ✓ Context retrieved: 3 relevant threads (0.8s)
    ✓ Draft generated with 94% confidence
    ✓ Routed to outbox
  - This is a subtle flex — shows what your AI agent does without being cheesy
```

### 3. FEATURED PROJECTS (3 cards)
```
Section title: "Projects" (h2, BlurFade animation)
Subtitle: "Things I've built and shipped" (text-secondary)

Card layout: 3 cards in a grid (1 col mobile, 3 col desktop) or stacked

Each project card:
  - Dark surface background (#111111)
  - Top: Screenshot/demo GIF or embedded Loom video (rounded-lg, border)
  - Project name (h3, bold) + short 1-line description
  - Tech stack tags (small badges using shadcn Badge component, ghost variant)
  - Impact metric in accent color: "95%+ RAG precision" or "15+ MCP servers"
  - Buttons: [Live Demo] [GitHub] — small, subtle
  - BorderBeam effect from Magic UI on hover (subtle animated border)

Project 1 — MCPHub:
  Title: "MCPHub"
  Description: "Postman for MCP Servers — test, debug, and discover MCP servers in your browser."
  Tags: Next.js, Supabase, MCP SDK, Tailwind
  Metric: "15+ pre-configured servers"
  Links: Live demo + GitHub
  (Mark as "In Development" if not yet live — still show it)    

Project 2 — ReasonFlow:
  Title: "ReasonFlow"
  Description: "Autonomous inbox AI agent that classifies emails, retrieves context, and drafts responses with human-in-the-loop fallback."
  Tags: LangGraph, Gemini, FastAPI, pgvector
  Metric: "Sub-second retrieval, 94% confidence"
  Links: GitHub + Demo video (Loom embed or hero-video-dialog from Magic UI)

Project 3 — AgentMesh:
  Title: "AgentMesh"
  Description: "MCP-native multi-agent orchestrator with real-time Mission Control dashboard."
  Tags: LangGraph, FastAPI, WebSocket, React
  Metric: "3 agent templates, real-time visualization"
  Links: GitHub
  (Mark as "Coming Soon" if not built yet)

Below the 3 cards:
  Small text link: "View all projects →" (links to a /projects page or expandable section showing CampusMitra, FinTrack, AtmoPredict — the secondary projects)
```

### 4. EXPERIENCE SECTION
```
Section title: "Experience" (h2, BlurFade)

Layout: Vertical timeline or simple stacked cards. NOT a fancy animated timeline — keep it clean.

Each entry:
  - Company name (bold) + Role (text-secondary) + Date range (right-aligned or below, text-muted)
  - 2-line description focusing on IMPACT, not responsibilities
  - 1 key metric in accent color

Entry 1:
  Infradock.ai | AI Engineer Intern | Jan 2026 – Present
  "Building multi-agent workflows and RAG pipelines for enterprise clients.
   Achieved 95%+ retrieval precision through semantic chunking and cross-encoder reranking."

Entry 2:
  Oldowan Innovations | Software Developer Intern | Oct 2025 – Present
  "Engineered recommendation engine and real-time notification system processing 10,000+ daily events with sub-50ms latency."

Entry 3:
  Yantram Medtech | Software Engineer Intern | Jul – Oct 2025
  "Built healthcare microservices with JWT-based RBAC. Reduced database latency by 25% via targeted indexing."
```

### 5. SKILLS SECTION
```
Section title: "Technical Skills" (h2, BlurFade)

DO NOT use an icon grid. Use grouped text with badges (shadcn Badge).

Layout: 2 or 3 column grid of skill groups

Group 1 — AI/ML & Agents (THIS GOES FIRST):
  LangChain, LangGraph, LlamaIndex, OpenAI API, Gemini API,
  Hugging Face, RAG, Agentic Workflows, MCP

Group 2 — Languages:
  Python, C++, TypeScript, JavaScript, SQL

Group 3 — Data & Vector DBs:
  PostgreSQL, pgvector, ChromaDB, Qdrant, MongoDB, Redis

Group 4 — Backend & Cloud:
  Django, FastAPI, Node.js, Docker, AWS, Celery, GitHub Actions, CI/CD

Group 5 — Frontend:
  React, Next.js, Tailwind CSS, Zustand

Each skill: shadcn Badge (outline variant, small) so it looks clean not cluttered
```

### 6. ACHIEVEMENTS SECTION (compact)
```
Section title: "Achievements" (h2, BlurFade)

Simple list or 2x2 bento grid:
  🏆 NASA Space Apps Challenge 2025 — Winner (Top 1% Global)
  🥇 CodeSlayer 2025 (NIT Delhi) — Finalist, Top 1% of 10,000+
  🥇 MumbaiHacks 2025 — Finalist, Finance Tech Track
  🥇 Smart India Hackathon 2024 — Finalist, Top 5% nationwide

Keep this tight. No photos. No certificates. Just the facts.
```

### 7. BLOG SECTION
```
Section title: "Blog" (h2, BlurFade)
Subtitle: "Technical writing on AI systems and agent infrastructure"

Show 2-3 blog post cards:
  - Title (h3)
  - Date + Read time (text-muted)
  - 1-line excerpt
  - "Read more →" link

Blog posts are MDX files stored in /content/blog/*.mdx
Use next-mdx-remote to render them at /blog/[slug]
Each blog page: prose styling (tailwind typography plugin), dark mode

Initially show placeholder cards if no posts yet — "Coming soon" is fine
```

### 8. CONTACT / FOOTER
```
Section title: "Get in touch" (h2)
Email: namanguptabhopal@gmail.com (mailto link)
Links: GitHub | LinkedIn | Twitter/X — use Lucide icons
Simple, no animations needed.

Footer:
  "© 2026 Naman Gupta" — that's it. Nothing else.
```

## CRITICAL RULES
1. NO "Welcome to My World of Code" or any generic taglines
2. NO blackhole/space videos, floating skill icons, or particle backgrounds
3. NO LeetCode screenshots or hackathon team photos
4. NO FinTrack or TrailBlaze as featured projects (push to secondary)
5. NO icon-grid skill sections — use text badges
6. NO excessive animations — every animation must have a purpose
7. AI/Agent identity FIRST in every section — this is an AI Engineer portfolio, not a MERN dev portfolio
8. Mobile responsive from the start — test on 375px width
9. Lighthouse performance score: target 90+
10. The entire site should feel like a PRODUCT landing page, not a student portfolio

## ANALYTICS
- Add Vercel Analytics (1 line): import { Analytics } from '@vercel/analytics/react' in layout.tsx
- Or Plausible script tag — either works, takes 5 minutes

## SEO
- Add proper meta tags in layout.tsx:
  title: "Naman Gupta — AI Engineer"
  description: "AI Engineer building agent infrastructure, RAG pipelines, and multi-agent workflows. Currently at Infradock.ai."
  og:image: Create a simple OG image (1200x630) with your name + title on dark background

## FILE STRUCTURE
```
/app
  /layout.tsx          (root layout, fonts, analytics, metadata)
  /page.tsx            (home — all sections)
  /blog
    /page.tsx          (blog listing)
    /[slug]/page.tsx   (individual post)
  /projects/page.tsx   (optional — all projects page)
/components
  /sections
    /Hero.tsx
    /Projects.tsx
    /Experience.tsx
    /Skills.tsx
    /Achievements.tsx
    /Blog.tsx
    /Contact.tsx
  /ui                  (shadcn components — auto-generated)
  /magicui             (magic ui components — copy-pasted)
  /Navbar.tsx
  /Footer.tsx
  /ProjectCard.tsx
  /BlogCard.tsx
/content
  /blog                (MDX files)
/lib
  /utils.ts
  /blog.ts             (MDX parsing utils)
/public
  /images              (project screenshots, og-image)
```

## REFERENCE SITES (match this energy)
- vercel.com (clean dark, typography-first)
- linear.app (dark, subtle gradients, professional)
- gumloop.com (dark, gradient accents, trust signals)
- magicui.design itself (it's built with its own components — meta but perfect reference)

Build this as production-ready code. No placeholder lorem ipsum except in blog section. All content should be real.