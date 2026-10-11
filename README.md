# Dr. Maya Reynolds, PsyD — Therapy Practice Website

A modern, responsive, and calming website for the private psychology practice of **Dr. Maya Reynolds, PsyD**, a Licensed Clinical Psychologist based in Santa Monica, California, offering in-person therapy and secure telehealth across California.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🌿 Overview

This project is a high-converting, patient-first web application designed for a mental health and therapy practice. It emphasizes warmth, trust, clinical expertise, and seamless accessibility for prospective clients seeking support for anxiety, trauma, and burnout.

### Key Highlights
- **Serene, Grounded Aesthetic**: Custom palette featuring warm linen (`#F7F5F0`), sage accents (`#718779`), slate navy (`#263B50`), and soft sage tints (`#E4E9E3`).
- **Fully Responsive**: Optimized for desktops, tablets, and smartphones with mobile drawer navigation and fluid typography.
- **Client-Centric Conversion Flow**: Clear CTAs guiding visitors toward scheduling a consultation.
- **Accessible & Clean Architecture**: Built with modern modular React components and semantic HTML.

---

## ✨ Features & Sections

| Section | Description |
| :--- | :--- |
| **Sticky Navigation Bar** | Responsive header with brand logo, quick navigation links, specialties menu, and mobile hamburger drawer. |
| **Hero Section** | Welcoming introduction highlighting in-person Santa Monica sessions and statewide California telehealth. |
| **Holding Onto Hope** | Empathetic validation section normalizing therapy exploration and emotional overwhelm. |
| **Who We Help** | Dedicated focus areas for adults navigating anxiety, trauma/PTSD, and high-achiever burnout. |
| **Quote Banner** | Reflective editorial banner breaking up content with calming visuals. |
| **About Dr. Maya Reynolds** | Warm clinician bio, credentials, background, and practice philosophy. |
| **Areas of Expertise** | Clinical focus areas detailed with evidence-based methodologies. |
| **How We Work (Approach)** | Explanations of integrated therapeutic modalities (CBT, EMDR, Somatic, and Psychodynamic therapy). |
| **Our Office** | Sanctuary showcase highlighting the quiet, comfortable Santa Monica therapy suite. |
| **Midpage Quote & Landscape** | Soothing visual breather with mindful grounding prose. |
| **Specialties & Focus Topics** | In-depth breakdown of clinical interventions and concerns addressed. |
| **Interactive FAQ** | Collapsible accordion addressing insurance, session fees, telehealth confidentiality, and expectations. |
| **Take the First Step CTA** | High-trust conversion module encouraging prospective clients to reach out. |
| **Comprehensive Footer** | Practice location, California licensure info, navigation links, and copyright bar. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: System Serif & Sans with custom script accents

---

## 📁 Project Structure

```text
growmytherapy-clone/
├── public/                 # Static assets (images, logos, icons)
│   └── images/
├── src/
│   ├── app/
│   │   ├── favicon.ico     # Practice favicon
│   │   ├── globals.css     # Global styles & Tailwind CSS v4 setup
│   │   ├── layout.tsx      # Root HTML layout and SEO metadata
│   │   └── page.tsx        # Homepage composing all sections
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx  # Sticky header with desktop & mobile drawer
│       │   └── Footer.tsx  # Practice information, hours & navigation
│       └── sections/
│           ├── HeroSection.tsx
│           ├── HopeSection.tsx
│           ├── WhoWeHelpSection.tsx
│           ├── QuoteBannerSection.tsx
│           ├── AboutSection.tsx
│           ├── AreasOfExpertiseSection.tsx
│           ├── HowWeWorkSection.tsx
│           ├── OurOfficeSection.tsx
│           ├── MidpageQuoteSection.tsx
│           ├── SpecialtiesSection.tsx
│           ├── FAQSection.tsx
│           └── AppointmentCTASection.tsx
├── next.config.ts          # Next.js configuration
├── package.json            # Scripts and dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### 1. Clone the Repository

```bash
git clone https://github.com/NandeeshMN/growmytherapy.git
cd growmytherapy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot-reloading |
| `npm run build` | Compiles and builds the production application |
| `npm run start` | Starts the production server after running `build` |
| `npm run lint` | Runs ESLint to check for code quality and formatting issues |

---

## 🎨 Color Palette Reference

| Color | Hex | Usage |
| :--- | :--- | :--- |
| **Warm Linen** | `#F7F5F0` | Header, soft section backgrounds, cards |
| **Midnight Slate** | `#263B50` | Primary text, headings, buttons, dark footer |
| **Muted Sage** | `#718779` | Script accents, hover states, sub-labels |
| **Pale Sage Tint** | `#E4E9E3` | Accent banners, CTA sections, highlight bars |
| **Charcoal Grey** | `#4A5055` | Body paragraph text, secondary navigation |
| **Border Soft** | `#D9DED8` | Subtle hairline dividers and borders |

---

## 🌐 Deployment




---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
