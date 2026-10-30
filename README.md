# ASTRAL — IMMERSIVE 3D DIGITAL EXPERIENCE
Bespoke Discord Bot Development · Automation Pipelines · Community Infrastructure  
Domain: **[astral.sites.bd](https://astral.sites.bd)**

---

## 1. Overview & Creative Direction

Astral is an independent digital studio founded by **Axiel**, operating from Bangladesh and collaborating with community creators and web3/gaming teams worldwide.

This rebuild transforms Astral from a standard static template into an art-directed 3D digital experience:
- **Dark, Cinematic, Architectural Palette**: `#08090B` deep background, `#101115` surfaces, `#F0F0F2` typography, muted titanium and brushed silver materials, restrained icy blue accents (`#38BDF8`, `#93C5FD`). Zero generic purple gradients or AI-slop cliches.
- **Editorial Typography**: Pairing of **Syne** (monumental display), **Instrument Serif** (editorial italic moments), **Plus Jakarta Sans** (clean structural body), and **JetBrains Mono** (technical telemetry).
- **Signature Interactive 3D World (Three.js)**: Original Astral Kinetic Astrolabe / Orbital Core featuring physically-based materials (`MeshStandardMaterial`, `MeshPhysicalMaterial` transmission glass), directional key/rim lighting, interactive mouse parallax, 360° drag orientation, exploded component view, and resonance pulse feedback.
- **Interactive Bot Emulation**: Live interactive Discord bot simulator with sub-30ms latency telemetry, simulated modal triage, and permission checks.

---

## 2. Multi-Page Architecture

All routes are fully developed individual pages with distinct compositions and valid URLs:

1. **Home (`/index.html`)**: Asymmetric hero composition, signature interactive 3D sculpture, real-time command pipeline emulator, core service modules, selected deployment previews, and consultation CTA.
2. **Selected Work Archive (`/work.html`)**: Filterable project showcase (Community, Gaming, Security, Creator) with verified performance metrics.
3. **Project Detail 1 (`/work/member-operations-hub.html`)**: Case study on high-volume verification, modal onboarding, and persistent staff tickets.
4. **Project Detail 2 (`/work/queue-match-assistant.html`)**: Case study on competitive gaming matchmaking, dynamic voice room synthesis, and captain draft logic.
5. **Project Detail 3 (`/work/supporter-community.html`)**: Case study on automated Stripe/Patreon webhook role syncing with grace-period handling.
6. **Project Detail 4 (`/work/incident-workflow.html`)**: Case study on security triage, deleted message caching, and cryptographic audit logs.
7. **Services (`/services.html`)**: In-depth capabilities (Custom Bots, Automation Pipelines, Moderation Defense, Managed 99.9% Hosting).
8. **Process (`/process.html`)**: 5-stage disciplined execution lifecycle (Discovery, Architecture, Implementation, Hardening, Handoff) with an interactive phase inspector.
9. **Pricing (`/pricing.html`)**: Verified starting tiers ($120+ Starter, $300+ Custom System, $650+ Platform Bot), interactive budget calculator, and technical complexity matrix.
10. **About (`/about.html`)**: Real origin story, engineering principles (resilient gateway, zero unhandled rejections), design principles, and interactive mini 3D installation.
11. **Contact (`/contact.html`)**: Functional project enquiry system with live validation, unique reference code generator (`AST-YYMMDD-XXX`), mailto generator to `4xiel95@gmail.com`, and clipboard copy for Discord DM to `xief1e`.
12. **Custom 404 (`/404.html`)**: Branded gateway error screen with recovery navigation.

---

## 3. Quick Start & Commands

```bash
# Install dependencies
npm install

# Start local development server (with HMR)
npm run dev

# Run automated link & asset integrity test (409 checks, 0 broken)
npm test

# Build production distribution into /dist
npm run build

# Preview production build locally
npm run preview

# Sync built assets to root for GitHub Pages
npm run sync
```

---

## 4. GitHub Pages Deployment

The build output is pre-configured with `base: './'`, `CNAME` (`astral.sites.bd`), `robots.txt`, and `sitemap.xml`.
When deploying directly from the root of the repository:
1. Run `npm run build`
2. Run `npm run sync`
3. Commit and push all files to your `main` branch. GitHub Pages will serve `astral.sites.bd` instantly.
