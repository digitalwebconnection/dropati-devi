# Dropati Devi Foundation

<div align="center">

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-01236A?style=for-the-badge)](LICENSE)

**"A Legacy of Strength. A Future of Possibilities."**

_The official web platform honoring the life, resilience, and compassionate values of Dropati Jethani (1945)._

[Explore Live Demo](http://localhost:3000) • [Getting Started](#-getting-started) • [Features](#-key-features) • [Design System](#-design-system--color-palette)

</div>

---

## 📖 About the Foundation

The **Dropati Devi Foundation** is a charitable initiative inspired by the journey of **Dropati Jethani (1945)**, who lived a life marked by patience, faith, courage, and unconditional care for others after the 1945 Partition.

The foundation is dedicated to breaking cycles of hardship by helping women and girls across India gain access to:

- **Education & Guidance**: Mentorship, literacy support, and educational pathways.
- **Vocational Skills**: Craft, sewing, digital literacy, and self-reliance training.
- **Livelihoods & Micro-Enterprise**: Tools, coaching, and financial independence.
- **Community & Wellbeing**: Safe spaces, health awareness, and peer solidarity.

---

## 🌟 Key Features

### 1. Hero & Mission Spotlight

- Cinematic narrative banner featuring an arched pixel-reveal visual showcase (`ArchedPixelImage`).
- Auto-advancing touch-friendly hero slides highlighting authentic community aid, schooling, and celebrations.
- 3D interactive **Cube Buttons** (`CubeButton`) with fluid rotation and state flip animations.

### 2. Her Story

- Archival editorial timeline detailing Dropati Devi's early years, her journey through Partition, and the values that shaped her family.
- Warm quote highlights and responsive typography celebrating her enduring strength.

### 3. Cherished Moments Gallery

- Authentic photographic tribute with a 6-item curated gallery.
- **Interactive Fullscreen Lightbox Modal**: Supports arrow key navigation, Esc key exit, touch swipe gestures, and active thumbnail strips.

### 4. Our Purpose (Foundational Pillars)

- Four foundational pillars — **Learn**, **Earn**, **Thrive**, and **Belong**.
- Custom folder-tab card geometry with fine stippled SVG grain overlays, subtle golden sheen, and ambient radial glow.
- Responsive design tailored for seamless readability across mobile and desktop.

### 5. Proposed Programmes (Stacking Deck)

- Five distinct focus areas:
  1. _Vocational Sewing & Crafts_ (Practical Livelihoods)
  2. _Educational Guidance & Access_ (Girls' Education)
  3. _Digital Tools & Micro-Business_ (Women in Business)
  4. _Mentorship & Self-Reliance_ (Confidence & Wellbeing)
  5. _Community Resource Networks_ (Family Solidarity)
- Built on a stacked scroll card deck (`ScrollStack`) featuring dynamic scale, rotation, and elevation transitions.

### 6. Get Help ("Scroll-Expand" Experience)

- Immersive scroll-driven expanding viewport (`ScrollExpand`).
- Smoothly transitions from an initial framed portrait into a full-bleed interactive help desk with promise quote, guidance info, and an interactive CTA button.

### 7. Core Values & Principles

- Six guiding values (_Courage, Compassion, Independence, Service, Family & Community, Integrity_).
- 3D perspective flip cards with rich dual-sided content and golden accent borders.

### 8. Accessible "Register Interest" Modal

- Dual-column interactive modal with keyboard traps, ESC key support, body scroll preservation, and accessible focus management.
- Integrated with Web3Forms for direct email delivery with spam honeypot verification.

### 9. Modern Navbar & Mobile Side Drawer

- Sticky navigation bar with scroll-aware glassmorphism backdrop blur.
- Fully accessible mobile slide-over drawer with integrated 3D Cube CTA.

---

## 🎨 Design System & Color Palette

The interface is crafted around a cohesive palette centered on **Royal Navy Blue** and **Vivid Sun Gold**:

| Token Name                                       | Hex Code  | Purpose & Usage                                                    |
| :----------------------------------------------- | :-------- | :----------------------------------------------------------------- |
| **Royal Navy Blue (`primary` / `blue.DEFAULT`)** | `#01236A` | Core brand identity, primary headings, hero accents, active states |
| **Deep Midnight (`blue.dark`)**                  | `#001747` | Deep card surfaces, contrast containers, drawer headers            |
| **Abyssal Blue (`blue.deep`)**                   | `#001133` | Deepest gradient stops, folder tab geometry fills                  |
| **Vivid Gold (`secondary` / `gold`)**            | `#FFD900` | CTA buttons, interactive highlights, icons, active borders         |
| **Pure Bone (`bone`)**                           | `#FFFFFF` | Crisp card backdrops, pristine clean surfaces                      |
| **Soft Sand (`sand`)**                           | `#F8FAFC` | Subtle contrast background for section rhythm                      |
| **Muted Slate (`muted`)**                        | `#475569` | High-legibility editorial body paragraphs                          |
| **Line Border (`line`)**                         | `#E2E8F0` | Elegant dividers and structure framing lines                       |

### 🖋️ Typography

- **Headings & Serif Quotes**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — Elegant, editorial serif conveying warmth, tradition, and dignified authority.
- **Body & UI Controls**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — Ultra-clean, geometric modern sans-serif optimized for maximum legibility at all viewport scales.

---

## 🛠️ Technology Stack

| Category          | Technology                                                                                               | Description                                                               |
| :---------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| **Framework**     | [React 18.3](https://react.dev/)                                                                         | Component architecture, state hooks, and concurrent features              |
| **Build Tool**    | [Vite 6.1](https://vitejs.dev/)                                                                          | Ultra-fast HMR, ES modules bundler, optimized production output           |
| **Styling**       | [Tailwind CSS 3.4](https://tailwindcss.com/)                                                             | Utility-first responsive design system with custom HSL extensions         |
| **Animations**    | [Framer Motion 14](https://www.framer.com/motion/)                                                       | Physics-based micro-interactions, modal transitions, and drawer physics   |
| **Scroll Engine** | [AOS 2.3](https://michalsnik.github.io/aos/)                                                             | Hardware-accelerated viewport-triggered scroll animations                 |
| **Icons**         | [Lucide React](https://lucide.dev/)                                                                      | Consistent, clean icon set                                                |
| **Code Quality**  | [ESLint 9](https://eslint.org/) + [Prettier 3](https://prettier.io/)                                     | Automated code analysis, accessibility rules (`jsx-a11y`), and formatting |
| **Git Hooks**     | [Husky 9](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) | Pre-commit automated linting and formatting validation                    |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### Quick Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/Dropati-Devi.git
   cd Dropati-Devi
   ```

2. **Install project dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the project root based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

   _(Ensure `VITE_WEB3FORMS_ACCESS_KEY` is present if you wish to receive test form submissions)._

4. **Launch the local development server:**

   ```bash
   npm run dev
   ```

   Vite will bind to all network interfaces (`host: true`), allowing testing on both your local machine and mobile devices on the same Wi-Fi network:
   - **Local Machine**: `http://localhost:3000`
   - **Local Network (Mobile/Tablet)**: `http://<your-lan-ip>:3000`

---

## 📜 Available NPM Scripts

In the project directory, you can run:

| Command                | Action                                                                                  |
| :--------------------- | :-------------------------------------------------------------------------------------- |
| `npm run dev`          | Starts Vite local development server on port 3000 (accessible on localhost & LAN IP)    |
| `npm run build`        | Compiles optimized production bundle into `/dist` with tree-shaking                     |
| `npm run preview`      | Spins up a local web server to preview production build artifacts on port 3000          |
| `npm run lint`         | Runs ESLint 9 across all JS/JSX files checking code quality and accessibility standards |
| `npm run format`       | Auto-formats code across the workspace using Prettier                                   |
| `npm run format:check` | Verifies code format compliance without modifying files (used in CI)                    |

---

## 📁 Project Structure

```text
Dropati-Devi/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Automated GitHub Actions CI workflow
├── .husky/                        # Git hooks configuration
│   └── pre-commit                 # Runs lint-staged on commit
├── public/                        # Static public assets
│   ├── favicon.ico                # Multi-size website icon
│   ├── logo.webp                  # Foundation high-res brand logo
│   ├── robots.txt                 # Search bot crawling rules
│   ├── sitemap.xml                # Search engine sitemap index
│   └── images/                    # Optimized WebP photography library
│       ├── hero/                  # Hero carousel imagery
│       ├── moments/               # Cherished moments gallery photos
│       └── purpose/               # Purpose pillar imagery
├── src/
│   ├── components/                # Reusable UI component architecture
│   │   ├── common/                # Shared design system components & atoms
│   │   │   ├── ArchedPixelImage.jsx # Interactive pixelation arched image frame
│   │   │   ├── BrandMark.jsx      # Vector brand logo component
│   │   │   ├── CubeButton.jsx     # 3D animated rotating cube CTA button
│   │   │   ├── ErrorBoundary.jsx  # Graceful UI failure boundary
│   │   │   ├── Eyebrow.jsx        # Uppercase category line label
│   │   │   ├── PurposeCard.jsx    # Card presentation for purpose pillars
│   │   │   ├── ScrollExpand.jsx   # Dynamic scroll-driven cinematic expander
│   │   │   └── ScrollStack.jsx    # Smooth stacking card deck component
│   │   ├── layout/                # Page shell & persistent scaffolding
│   │   │   ├── Navbar.jsx         # Sticky header with responsive mobile drawer
│   │   │   └── Footer.jsx         # Editorial footer with brand notes & quick links
│   │   ├── modals/                # Overlay dialogs & forms
│   │   │   └── InterestModal.jsx  # Multi-category beneficiary & volunteer registration
│   │   └── sections/              # Landing page content modules
│   │       ├── HeroSection.jsx    # Hero visual carousel & call to action
│   │       ├── StorySection.jsx   # Historical biographical narrative (1945 Partition)
│   │       ├── MomentsSection.jsx # Photo gallery with fullscreen lightbox
│   │       ├── PurposeSection.jsx # 4 foundational pillars section
│   │       ├── ProgrammesSection.jsx # Stacking programme cards
│   │       ├── HelpSection.jsx    # Get Help cinematic scroll section
│   │       ├── ValuesSection.jsx  # 6 core values 3D flip card showcase
│   │       ├── InvolvedSection.jsx# Engagement pathways & partnership cards
│   │       └── ClosingSection.jsx # Closing tribute banner with CubeButton CTA
│   ├── config/                    # Global settings & AOS configurations
│   ├── constants/                 # Site copy, image registries, and links
│   │   └── siteData.js            # Central content registry
│   ├── hooks/                     # Custom React utility hooks
│   │   ├── useAos.js              # AOS animation initialiser hook
│   │   ├── useBodyScrollLock.js   # Scrollbar-preserving body lock hook
│   │   ├── useKeydown.js          # Global keyboard shortcut handler
│   │   └── useScrollPosition.js   # Throttled scroll position tracker
│   ├── services/                  # External API integrations
│   │   └── contactService.js      # Web3Forms registration endpoint
│   ├── utils/                     # Helper functions
│   │   └── cn.js                  # Tailwind class merger utility (clsx + twMerge)
│   ├── App.jsx                    # Root application component with code-split sections
│   ├── index.css                  # Core CSS design tokens & animation utilities
│   └── main.jsx                   # React 18 DOM mount point
├── .env.example                   # Environment configuration template
├── eslint.config.js               # ESLint 9 flat configuration
├── tailwind.config.js             # Tailwind CSS theme extensions
└── vite.config.js                 # Vite configuration (port 3000, host binding, aliases)
```

---

## 🔒 Accessibility & Performance Standards

- **Accessible Focus States & Contrast**: Colors and controls comply with WCAG 2.1 AA contrast requirements.
- **Reduced Motion Support**: Animations respect user system settings via `prefers-reduced-motion` media queries.
- **SEO & Social Optimization**: Includes rich JSON-LD Schema markup, comprehensive OpenGraph tags, and Twitter Cards inside `index.html`.
- **Keyboard Navigation**: Modals, gallery lightbox, and interactive buttons support native `Tab`, `Space`, `Enter`, and `Escape` controls.

---

## 📄 License & Attribution

- **Copyright**: © 2026 Dropati Devi Foundation. All rights reserved.
- **Tribute**: Built with gratitude and love in honor of Dropati Jethani (1945).
