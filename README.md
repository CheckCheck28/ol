# OpenLake — The Open Source Society of IIT Bhilai

> **HelloWorld Hackathon Submission** — A modern, single-page scrollable website introducing OpenLake (IIT Bhilai's Open Source Club) to first-year students and visitors.

---

## 🌟 About the Project

This website was built for the **HelloWorld 24-Hour Online Hackathon** organized by **OpenLake, IIT Bhilai**. The goal of the site is to introduce newcomers and first-year students to the open-source culture at IIT Bhilai — explaining what the club does, how first-years can get involved, flagship events like *HelloWorld*, and how to contribute to real-world repositories.

### ✨ Key Features

- **Liquid-Glass Aesthetics**: High-end dark midnight theme (`#030712`) with glossy cyan/blue liquid metal buttons and frosted glass backdrops.
- **3D Tesseract Hypercube Projections**: Dual-layer 4D hypercube projections (`.tesseract-3d`) rotating and pulsating continuously in 3D space.
- **Interactive 3D Card Tilt**: Cards, process steps, and CTA boxes tilt in 3D perspective (`rotateX`/`rotateY`) as the mouse hovers over them.
- **Mouse Spotlight Glow**: A soft interactive radial spotlight tracking the cursor across the glass surface.
- **Scroll-Reveal Entrance Animations**: Alternating left and right fade-in entrance effects as you scroll down through *Benefits*, *Workflow*, *FAQs*, and *Join Us*.
- **Responsive Mobile Navigation**: Pinned frosted-glass navigation header with a full-viewport mobile menu drawer (<901px).

---

## 📁 Repository Structure

```
d:\Projects\openlake\
├── index.html        # Semantic HTML5 markup & section structures
├── styles.css        # Modular CSS variables, liquid-metal buttons, 3D tesseract, animations
├── script.js         # IIFE runtime, IntersectionObserver scroll reveal, 3D card tilt, spotlight tracking
└── README.md         # Documentation & setup instructions
```

---

## 🚀 How to Run Locally

Since the project is built with vanilla HTML5, CSS3, and JavaScript, no complex build steps or node modules are required!

### Option 1: Direct File Open
Simply double-click `index.html` or open it directly in any modern web browser.

### Option 2: Local HTTP Server (Recommended)
Using Python's built-in HTTP server:

```bash
# Navigate to the project directory
cd d:\Projects\openlake

# Start a local web server on port 8000
python -m http.server 8000
```

Now open your browser and navigate to:
`http://localhost:8000`

---

## 🛠️ Tech Stack & Credits

### Built With:
- **HTML5**: Semantic structural markup.
- **CSS3 / CSS 3D**: `preserve-3d`, keyframe animations, liquid metal gradients, backdrop blurs.
- **Vanilla JavaScript (ES6+)**: `IntersectionObserver`, `requestAnimationFrame`, Mouse spotlight & 3D tilt handlers.

### Attributions & Third-Party Assets:
- **Fonts**: [Inter](https://rsms.me/inter/) (UI/Body) and [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (Italic H1 accents) via Google Fonts.
- **Icons**: Inline resolution-independent SVGs.
- **AI Assistance**: Antigravity AI Assistant by Google DeepMind (used for design alignment, CSS 3D tesseract mechanics, and code modularization).

---

## 📜 License & Credit

Built with ❤️ for **OpenLake IIT Bhilai** and the **HelloWorld 2026** Hackathon.
