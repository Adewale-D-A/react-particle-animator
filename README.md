# React Particle Animation

This project provides a reusable particle animation view component built with Next.js, React, and TypeScript. The component is designed for logo branding on a website.

---

## Prerequisites

The following tools are required to run and maintain this project:

| Package       | Purpose                      |
|---------------|------------------------------|
| Next.js       | Application framework        |
| React         | UI rendering                 |
| TypeScript    | Static typing                |
| TailwindCSS   | UI styling                   |

A working knowledge of these tools is required for collaboration.

---

## Local Development Setup

1. Install dependencies:
```bash
npm install
```
2. Start development server:
```bash
npm run dev
```
> The application will run on http://localhost:3000

## Folder Structure
```
project-root/
├── app/
│   ├── _components/
│   │   └── particle-animation.jsx     # Particle animation component
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                       # Application entry point
│
├── public/
│   └── next.svg
│
├── .gitignore
├── CHANGELOG.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Component Usage
1. Animation View Component

```
<ParticleAnimation />
```