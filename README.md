
# 🤖 Neuro Bots – Official Robotics Club Website

**Neuro Bots** is the official website of the **Neuro Bots Robotics Club**, run by the **Artificial Intelligence and Robotics Branch** of Gyan Ganga Institute of Technology and Science. This site showcases our club's mission, team, and projects in the fields of AI and robotics.

> 🏫 Officially acknowledged by the Head of Department (HOD) and Principal of our college.

---

## 🌐 Live Site

Hosted on **Vercel**  
🔗 [Visit the live site](https://neruo-bot.vercel.app)

---

## 📦 Project Structure & Features

### Folder Structure

```

Neuro-bot-main/
├── public/             # Static assets (videos, fonts, images, audio)
├── src/
│   ├── components/     # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/          # Route-based views (Home, Projects, Team, etc.)
│   ├── utils/          # JSON data for crew, projects, simulator content
│   ├── App.jsx         # Main application wrapper with routing
│   ├── index.css       # Tailwind and global styles
│   └── main.jsx        # App entry point
├── index.html          # Base HTML file for Vite
├── tailwind.config.js  # TailwindCSS config
├── vite.config.js      # Vite bundler config
├── vercel.json         # Deployment config for Vercel
└── package.json, LICENSE, .gitignore, README.md

````

---

### Features

- 🎯 **Hero & Landing Page**: Polished introduction to the club's goals and vision.
- 🧑‍🔬 **Team Showcase**: Dynamic rendering of club members via `crewData.json`.
- 📚 **Educational Content**: Dedicated education section with learning material.
- 🛠️ **Projects Section**: Uses `projectData.json` for live project showcase with media support.
- 🎮 **Simulator Section**: Displays tools or UI-based simulations.
- 🔊 **Audio/Video Assets**: Robot demos using gesture, lidar, emotion, etc.
- 🎨 **Modern UI**: Built with Tailwind CSS and custom fonts like `Orbitron`, `VT323`, `Roboto`.
- 🔁 **Reusable Components**: Navbar, Footer, Cards, Canvas etc. for maintainability.
- 🚀 **Fast Development**: Powered by Vite for blazing-fast HMR.
- 📱 **Responsive Design**: Fully mobile-friendly and accessible.
- 🧪 **Code Modularity**: JSON-based data injection & decoupled UI logic.
- 💡 **Open Source**: Contributions welcome from developers across the globe!

---

## 🔁 Code Flow

1. `main.jsx` boots the app by rendering `App.jsx`.
2. `App.jsx` defines routing using `react-router-dom` (assumed).
3. Pages like `Home`, `Team`, `Projects`, `Education`, `Semulator` use:
   - UI components (e.g., `CrewCard`, `GearList`, `Footer`)
   - Data from `utils/*.json`
4. Assets like videos and fonts are served from `public/` using relative paths.
5. Deployment configuration is handled via `vercel.json`.

---

## 🛠️ Tech Stack

- **React** – Frontend library
- **Tailwind CSS** – Utility-first styling
- **Vite** – Build tool and dev server
- **Vercel** – Hosting and deployment
- **Custom Fonts & Media** – For an engaging user experience

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/neuro-bot.git
cd neuro-bot

# Install dependencies
npm install

# Start the development server
npm run dev
````

Open your browser at `http://localhost:5173` to see the app live.

---

## 🌱 Contributing

We welcome contributions to improve the site!

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/neuro-bot.git

# Create your feature branch
git checkout -b feature/amazing-feature

# Commit changes
git commit -m "Add amazing feature"

# Push and open a Pull Request
git push origin feature/amazing-feature
```

> Ensure you follow clean code practices and maintain component modularity.

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

## 🙌 Acknowledgements

* Department of Artificial Intelligence and Robotics
* HOD and Principal of Gyan Ganga Institute of Technology and Science
* Contributors and members of the Neuro Bots Club

---

## 📬 Contact

Have questions or want to collaborate?
📧 Email us at: \[[anmolawasthi117@gmail.com](mailto:anmolawasthi117@gmail.com)]


```


