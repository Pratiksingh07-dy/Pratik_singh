# Pratik Singh — AI & ML Engineer Portfolio

A premium, modern portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open browser at http://localhost:5173
```

## 🌐 Deploy to Vercel (Recommended)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a new GitHub repo
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Framework: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy** ✅

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx          ← Typing effect, CTA buttons
│   ├── About.jsx
│   ├── Skills.jsx        ← Animated skill cards
│   ├── Projects.jsx      ← Flagship project showcase
│   ├── Journey.jsx       ← Timeline
│   ├── Education.jsx
│   ├── CurrentWork.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   ├── ScrollToTop.jsx
│   ├── FloatingContact.jsx
│   ├── GridBackground.jsx
│   └── useInView.js
├── App.jsx
├── main.jsx
└── index.css
```

## ✏️ Customization

- Update personal info in each component
- Add project images by replacing placeholder divs with `<img>` tags
- Change colors in `tailwind.config.js` under `colors`
- Update resume link in `Navbar.jsx` and `Hero.jsx`
