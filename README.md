# 🚀 Agam Latifullah - Portfolio Website

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **TailwindCSS 4**. Features stunning animations powered by Framer Motion, multi-language support, dark/light mode, and AI-powered chat integration.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Modern Tech Stack** - Next.js 16, React 19, TypeScript, TailwindCSS 4
- **Stunning Animations** - Smooth transitions and micro-interactions with Framer Motion
- **Responsive Design** - Fully optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - System-aware theme switching
- **Multi-language Support** - English and Indonesian localization
- **AI Chat Integration** - Powered by Google Gemini AI
- **Contact Form** - EmailJS integration for direct messaging
- **SEO Optimized** - Meta tags, sitemap, robots.txt included
- **Custom Cursor** - Interactive cursor with hover effects
- **Performance Focused** - Optimized images, lazy loading, efficient code splitting

## 📁 Project Structure

```
portfolio-agamlatiff/
├── public/                    # Static assets
│   ├── alizonstore/          # Project screenshots
│   ├── flyhigher/            # Project screenshots
│   ├── hiredio/              # Project screenshots
│   ├── saturday/             # Project screenshots
│   ├── sukabaca/             # Project screenshots
│   ├── upskills/             # Project screenshots
│   └── agam-photo.jpg        # Profile photo
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout with providers
│   │   └── page.tsx          # Homepage
│   ├── components/
│   │   ├── layout/           # Header, Footer, Navigation
│   │   ├── sections/         # Page sections (Hero, About, Projects, etc.)
│   │   ├── ui/               # Reusable UI components
│   │   └── utils/            # Utility components
│   ├── constants/            # Static data and configurations
│   │   ├── locales/          # i18n translations (en, id)
│   │   ├── pricing.ts        # Service pricing data
│   │   ├── projects.ts       # Portfolio projects
│   │   └── ...               # Other constants
│   ├── context/              # React Context providers
│   ├── types/                # TypeScript type definitions
│   └── utils/                # Utility functions
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # TailwindCSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🛠️ Tech Stack

| Category           | Technology                |
| ------------------ | ------------------------- |
| **Framework**      | Next.js 16 (App Router)   |
| **UI Library**     | React 19                  |
| **Language**       | TypeScript 5              |
| **Styling**        | TailwindCSS 4             |
| **Animations**     | Framer Motion             |
| **Icons**          | Lucide React, React Icons |
| **AI Integration** | Google Gemini AI          |
| **Email**          | EmailJS                   |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/agamlatiff/portfolio-agamlatiff.git
   cd portfolio-agamlatiff
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |

## 📄 Sections

The portfolio includes the following sections:

1. **Hero** - Dynamic introduction with animated background and CTAs
2. **About** - Professional background and core values
3. **Why Booking** - Service benefits and comparison
4. **Booking Showcase** - Live demo preview
5. **Projects** - Portfolio of completed works
6. **Tech Stack** - Technologies and tools expertise
7. **Pricing** - Service packages and pricing
8. **Process** - Development workflow
9. **FAQ** - Frequently asked questions
10. **Contact** - Contact form with AI chat assistant

## 🎨 Featured Projects

- **Alizon Store** - E-commerce platform
- **FlyHigher** - Travel booking application
- **HiredIO** - Job recruitment platform
- **Saturday** - Event management system
- **SukaBaca** - Digital library platform
- **UpSkills** - Online learning platform

## 📱 Responsive Design

The website is fully responsive and optimized for:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🌐 Localization

Supports multiple languages:

- 🇺🇸 English (default)
- 🇮🇩 Indonesian (Bahasa Indonesia)

## 📧 Contact

- **WhatsApp**: +62 858-8805-0785
- **Upwork**: [Agam Latifullah](https://www.upwork.com/freelancers/~01e490352a92e7beb8)

## 📄 License

This project is private and proprietary. All rights reserved.

---

<p align="center">
  Built with ❤️ by <strong>Agam Latifullah</strong>
</p>
