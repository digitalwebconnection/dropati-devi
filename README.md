# Dropati Devi Foundation

> **"A Legacy of Strength. A Future of Possibilities."**

The official web platform for the **Dropati Devi Foundation** — an initiative inspired by the resilient life, compassionate heart, and unwavering strength of **Dropati Jethani (1945)**. The foundation aspires to empower women and girls across India through education, skills development, livelihood generation, and heartfelt community support.

---

## 🌟 Key Features

- **Hero & Mission Spotlight**: Immersive storytelling banner honoring Dropati Devi's legacy and vision.
- **Her Story**: Narrative of her journey from 1945 Partition to building family and community strength with patience, courage, and faith.
- **Cherished Moments Gallery**: Authentic photographic tribute showcasing 6 candid family moments, birthday milestones, and celebrations with an **interactive fullscreen lightbox modal** (keyboard navigation, next/prev controls, and thumbnail strip).
- **Our Purpose**: 4 foundational pillars — _Learn, Earn, Thrive, and Belong_ — designed with dynamic hover interactions.
- **Proposed Programmes**: Detailed cards for _Skills & Livelihoods_, _Girls' Education_, _Women in Business_, _Wellbeing & Mentoring_, and _Community Support_.
- **Core Values**: 6 guiding principles (_Courage, Compassion, Independence, Service, Family & Community, Integrity_) presented in clean, modern editorial cards with terracotta hover accents.
- **Get Involved & Register Interest**: Compact, wide 2-column modal for volunteers, partners, and beneficiaries.
- **Light Sand Editorial Footer**: Warm, high-contrast footer with brand mark, contact information, and back-to-top navigation.

---

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom HSL Color Palette
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Typography**: Playfair Display (Serif) & Plus Jakarta Sans (Sans-serif)

---

## 🎨 Design System & Color Palette

| Token               | Hex       | Role                                 |
| ------------------- | --------- | ------------------------------------ |
| **Ink**             | `#2c221e` | Primary typography & strong headings |
| **Muted**           | `#75665e` | Body text & supportive descriptions  |
| **Terracotta**      | `#9a3b26` | Primary brand accent & buttons       |
| **Terracotta Dark** | `#712c20` | Contrast sections & active states    |
| **Gold**            | `#e5a93b` | Accent highlights & badges           |
| **Sand**            | `#f4efe6` | Warm secondary background            |
| **Bone**            | `#fdfbf7` | Primary warm light background        |
| **Line**            | `#dfd5c9` | Borders & subtle dividers            |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd Dropati-Devi
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run Code Quality Linter:**

   ```bash
   npm run lint
   ```

5. **Format Code:**

   ```bash
   npm run format
   ```

6. **Build for production:**

   ```bash
   npm run build
   ```

7. **Preview production build:**

   ```bash
   npm run preview
   ```

---

## 📁 Project Architecture & Folder Structure

The project adheres to an industry-standard production architecture featuring clear separation of concerns, single-responsibility layers, accessible UI primitives, and automated CI workflows:

```text
Dropati-Devi/
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI (lint, format check, build)
├── .husky/                        # Git pre-commit hook runner
│   └── pre-commit                 # Runs lint-staged before commits
├── public/                        # Production static assets served at root
│   ├── favicon.ico                # Multi-resolution ICO (16x16, 32x32, 48x48)
│   ├── apple-touch-icon.png       # 180x180 iOS touch icon
│   ├── logo.webp                  # Optimized high-res brand identity
│   ├── robots.txt                 # Search crawler directives
│   ├── sitemap.xml                # SEO XML sitemap
│   ├── site.webmanifest           # Progressive web app manifest
│   ├── .htaccess                  # Apache server performance & caching headers
│   └── images/                    # Production-ready WebP media library (-82% bandwidth)
│       ├── hero/                  # 4 hero slider visuals (hero-*.webp)
│       ├── purpose/               # 4 purpose pillar cards (purpose-*.webp)
│       ├── moments/               # 6 authentic tribute photos (moment-*.webp)
│       ├── og-preview.webp        # 1200x630 OpenGraph / Twitter social card
│       └── logo.webp              # High-resolution brand logo asset
├── src/
│   ├── components/                # Modular React UI component hierarchy
│   │   ├── common/                # Reusable design system primitives & atoms
│   │   │   ├── ArchedPixelImage.jsx # Pixel reveal interactive hero artwork frame
│   │   │   ├── BrandMark.jsx
│   │   │   ├── CubeButton.jsx
│   │   │   ├── ErrorBoundary.jsx  # Crash containment with user-friendly retry UI
│   │   │   ├── Eyebrow.jsx
│   │   │   ├── PurposeCard.jsx    # Purpose pillar interactive card
│   │   │   ├── ScrollExpand.jsx   # Interactive scroll-expand cinematic view
│   │   │   ├── ScrollStack.jsx    # Stacked cards scroll experience
│   │   │   └── index.js           # Common primitives barrel export
│   │   ├── layout/                # Structural layout wrappers
│   │   │   ├── Navbar.jsx         # Header with scroll-threshold blur transition
│   │   │   ├── Footer.jsx         # High-contrast sand editorial footer
│   │   │   └── index.js           # Layout barrel export
│   │   ├── modals/                # Overlays, forms, and dialogs
│   │   │   ├── InterestModal.jsx  # Multi-category registration modal form
│   │   │   └── index.js           # Modals barrel export
│   │   ├── sections/              # Landing page feature sections (code-split via React.lazy)
│   │   │   ├── HeroSection.jsx    # Narrative carousel hero with touch gesture support
│   │   │   ├── StorySection.jsx   # 1945 Partition historical narrative
│   │   │   ├── MomentsSection.jsx # Gallery with interactive keyboard-navigable lightbox
│   │   │   ├── PurposeSection.jsx # 4 foundational pillars container
│   │   │   ├── ProgrammesSection.jsx # Stacking programme cards
│   │   │   ├── HelpSection.jsx    # Scroll-expand cinematic banner
│   │   │   ├── ValuesSection.jsx  # 3D interactive flip core values cards
│   │   │   ├── InvolvedSection.jsx# 3-tier involvement pathways
│   │   │   ├── ClosingSection.jsx # Final call-to-action section
│   │   │   └── index.js           # Feature sections barrel export
│   │   └── index.js               # Master components barrel export
│   ├── config/                    # Global application and environment config
│   │   └── index.js               # Centralized appConfig, API endpoints & AOS settings
│   ├── constants/                 # Data stores, copy models, and site constants
│   │   ├── siteData.js            # Content, moments, programmes, values, contact metadata
│   │   └── index.js               # Constants barrel export
│   ├── hooks/                     # Custom, reusable React hooks
│   │   ├── useAos.js              # AOS animation lifecycle and refresh hook
│   │   ├── useBodyScrollLock.js   # Robust scrollbar-preserving body lock for modals
│   │   ├── useKeydown.js          # Accessible keyboard shortcuts & escape handler
│   │   ├── useScrollPosition.js   # RequestAnimationFrame throttled scroll tracking
│   │   └── index.js               # Hooks barrel export
│   ├── services/                  # External API integration layer
│   │   ├── contactService.js      # Web3Forms API communication & honeypot spam protection
│   │   └── index.js               # Services barrel export
│   ├── utils/                     # Shared utility helpers
│   │   ├── cn.js                  # Standard clsx + twMerge class merger
│   │   └── index.js               # Utils barrel export
│   ├── App.jsx                    # Root composition with ErrorBoundary & React.lazy
│   ├── index.css                  # Unified CSS with prefers-reduced-motion accessibility
│   └── main.jsx                   # Vite React DOM entry point
├── .editorconfig                  # Universal cross-editor formatting rules
├── .env.example                   # Environment variable template
├── .gitignore                     # Git ignore specifications
├── .prettierrc                    # Code formatting standard (Prettier 3)
├── .prettierignore                # Prettier ignore patterns
├── eslint.config.js               # Modern ESLint 9 flat configuration with a11y & Prettier
├── index.html                     # HTML5 shell with OpenGraph and JSON-LD schema
├── jsconfig.json                  # `@/*` path aliasing for IDE autocompletion & type checking
├── package.json                   # Dependencies, devDependencies, and npm scripts
├── postcss.config.js              # PostCSS configuration for Tailwind CSS
├── tailwind.config.js             # Brand palette & typography configuration
└── vite.config.js                 # Vite bundler configuration
```

---

## 🛡️ Code Quality & CI/CD

- **Accessibility & Static Analysis**: Enforced via modern [ESLint 9](https://eslint.org/) flat config with [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
  ```bash
  npm run lint
  ```
- **Code Formatting**: Prettier ensures consistent code formatting across JS, JSX, CSS, HTML, and Markdown.
  ```bash
  npm run format          # Auto-formats all files
  npm run format:check    # Verifies formatting compliance (used in CI)
  ```
- **Pre-commit Hooks**: [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged) automatically lint and format staged files before allowing commits.
- **Continuous Integration**: Automated GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push and pull requests to `main`:
  1. Dependencies check (`npm ci`)
  2. Linting verification (`npm run lint`)
  3. Prettier formatting verification (`npm run format:check`)
  4. Production bundle compilation (`npm run build`)

---

## 📄 License & Credits

- **Copyright**: © 2026 Dropati Devi Foundation. All rights reserved.
- **Inspiration**: In loving memory of Dropati Jethani (1945).
