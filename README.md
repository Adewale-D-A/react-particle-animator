# React Particle Animation

This project provides a reusable particle animation logic built with Next.js, and TypeScript. The intent behind this solution came when I was working on a project and the business owner explained the need to have an animation-like design featuring their brand logo on their hero header where on mouse over, it disperse the brand logo in a particle form and then the brand logo comes back together forming the original shape on mouse leave. This feature I cannot take full credit for, I will search for the original tutorial which was in Vanila Js, CSS and HTML that I had to convert to a react component. The custom logic handling the animation feature is in this codebase for developers to utilize. It works best if the brand logo is a single shape.

[Original Video Guide](https://www.youtube.com/watch?v=XGioNBHrFU4)
[Implemented Website 1 - for reference](https://www.elironco.com)
[Implemented Website 2 - for reference](https://www.mindwalks.org)

---

## Prerequisites

The following tools are required to run and maintain this project:

| Package    | Purpose               |
| ---------- | --------------------- |
| Next.js    | Application framework |
| TypeScript | Static typing         |

A working knowledge of these tools is required for collaboration.

---

## Local Development Setup

1. Install dependencies:

```bash
npm install
```

2. Startup the application:

```bash
npm run dev
```

> The application will run on http://localhost:3000

## Folder Structure

```
project-root/
├── app/
│   │
│   ├── _components/
│   │   |── particle-animation.tsx     # Animation particle logic compoenent
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

1. Particle View Component

```
The particle component accepts one prop:

[x] - IMAGE_URI – String value of preferred logo as a DAT URI

<ParticleAnimation
  IMAGE_URI={"}
/>
```
