# Dropati Devi Foundation

> **"A Legacy of Strength. A Future of Possibilities."**

The official web platform for the **Dropati Devi Foundation** — an initiative inspired by the resilient life, compassionate heart, and unwavering strength of **Dropati Jethani (1945)**. The foundation aspires to empower women and girls across India through education, skills development, livelihood generation, and heartfelt community support.

---

## 🌟 Key Features

- **Hero & Mission Spotlight**: Immersive storytelling banner honoring Dropati Devi's legacy and vision.
- **Her Story**: Narrative of her journey from 1945 Partition to building family and community strength with patience, courage, and faith.
- **Cherished Moments Gallery**: Authentic photographic tribute showcasing 6 candid family moments, birthday milestones, and celebrations with an **interactive fullscreen lightbox modal** (keyboard navigation, next/prev controls, and thumbnail strip).
- **Our Purpose**: 4 foundational pillars — *Learn, Earn, Thrive, and Belong* — designed with dynamic hover interactions.
- **Proposed Programmes**: Detailed cards for *Skills & Livelihoods*, *Girls' Education*, *Women in Business*, *Wellbeing & Mentoring*, and *Community Support*.
- **Core Values**: 6 guiding principles (*Courage, Compassion, Independence, Service, Family & Community, Integrity*) presented in clean, modern editorial cards with terracotta hover accents.
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

| Token | Hex | Role |
| --- | --- | --- |
| **Ink** | `#2c221e` | Primary typography & strong headings |
| **Muted** | `#75665e` | Body text & supportive descriptions |
| **Terracotta** | `#9a3b26` | Primary brand accent & buttons |
| **Terracotta Dark** | `#712c20` | Contrast sections & active states |
| **Gold** | `#e5a93b` | Accent highlights & badges |
| **Sand** | `#f4efe6` | Warm secondary background |
| **Bone** | `#fdfbf7` | Primary warm light background |
| **Line** | `#dfd5c9` | Borders & subtle dividers |

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

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
Dropati-Devi/
├── public/
│   ├── images/
│   │   ├── moments/               # Authentic photographs of Dropati Devi
│   │   │   ├── moment-1-celebration.jpg
│   │   │   ├── moment-2-wisdom.jpg
│   │   │   ├── moment-3-playful.jpg
│   │   │   ├── moment-4-sweet-moments.jpg
│   │   │   ├── moment-5-harmony.jpg
│   │   │   └── moment-6-grace.jpg
│   │   ├── dropati_devi_hero.jpg
│   │   └── dropati_devi_wide.jpg
│   └── ...
├── src/
│   ├── components/
│   │   ├── common/                # Reusable UI elements (Eyebrow, BrandMark, etc.)
│   │   ├── layout/                # Navbar, Footer
│   │   ├── modals/                # InterestModal (Registration form)
│   │   └── sections/              # Section components
│   │       ├── HeroSection.jsx
│   │       ├── StorySection.jsx
│   │       ├── MomentsSection.jsx # Gallery with interactive Lightbox
│   │       ├── PurposeSection.jsx
│   │       ├── ProgrammesSection.jsx
│   │       ├── HelpSection.jsx
│   │       ├── ValuesSection.jsx  # Core values cards
│   │       ├── InvolvedSection.jsx
│   │       └── ClosingSection.jsx
│   ├── constants/
│   │   └── siteData.js            # Site content, navigation, and photo metadata
│   ├── App.jsx                    # Root application component
│   ├── main.jsx                   # Vite entry point
│   └── index.css                  # Tailwind styles and global font imports
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📄 License & Credits

- **Copyright**: © 2026 Dropati Devi Foundation. All rights reserved.
- **Inspiration**: In loving memory of Dropati Jethani (1945).
