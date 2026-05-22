# Shalini Portfolio — Setup Guide

A modern dark-theme portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 📁 Folder Structure

```
shalini-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Place your resume PDF here
├── server/
│   └── index.js            ← Express production server
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PageWrapper.jsx
│   │   └── ParticleBackground.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your resume
Place your `resume.pdf` file inside the `/public` folder.

### 3. Customize your details
Edit these files with your actual info:
- `src/pages/Contact.jsx` → GitHub URL, LinkedIn URL, Email, Phone
- `src/pages/Projects.jsx` → Add your real projects with GitHub links
- `src/pages/Skills.jsx` → Adjust skill percentage levels

### 4. Run in development
```bash
npm run dev
```
Visit: **http://localhost:5173**

---

## 🏗️ Production Build

### Build the app
```bash
npm run build
```

### Start production server
```bash
npm start
```
Visit: **http://localhost:3000**

---

## ✏️ Customization

| What | Where |
|------|-------|
| Name & title | `src/pages/Home.jsx` |
| About text | `src/pages/About.jsx` |
| Skill levels (%) | `src/pages/Skills.jsx` |
| Projects | `src/pages/Projects.jsx` |
| GitHub / LinkedIn / Email / Phone | `src/pages/Contact.jsx` |
| Accent color | `src/index.css` → `--accent` variable |

---

## 🎨 Tech Stack

- **React 18** + **Vite** — fast dev & build
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — page transitions & animations
- **React Router v6** — multi-page navigation
- **Express.js** — production static server
- **Lucide React** — icon library
- **Google Fonts** — Syne (display) + DM Sans (body)
