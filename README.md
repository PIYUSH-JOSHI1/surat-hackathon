# 💻 AI-Powered Digital Profile Analyzer for Developers (Frontend Only)

This is a **frontend-only** implementation of a **Digital Profile Analyzer** tool designed for developers. It allows users to input their public profile links, resumes, and coding platform usernames. It then simulates an AI-based analysis to provide insights on their professional presence using mock data.

---

## 🚀 Features

### 🧾 Landing Page (`index.html`)
- Input form for:
  - GitHub, LinkedIn, portfolio URLs
  - Coding platform usernames (LeetCode, Codeforces, etc.)
  - Resume file upload
- Section showcasing:
  - How the tool works
  - Key benefits and use cases

### 📊 Dashboard Page (`dashboard.html`)
- Displays simulated analysis including:
  - Profile overview with summary metrics
  - Skill distribution via charts
  - Project contribution and tech stack coverage
  - Coding activity breakdown
  - Recruiter Readiness Score and Peer Comparison
  - Actionable insights for profile improvement

---

## 🛠️ Tech Stack

- **HTML5** & **CSS3** – for structure and styling  
- **JavaScript (ES6)** – for interactivity and data handling  
- **Chart.js** – for data visualizations  
- **Font Awesome** – for clean and modern icons  
- **LocalStorage** – for data persistence between pages  
- **Responsive Design** – works across all devices  

---

## 📁 Folder Structure

```bash
profile-analyzer/
│
├── index.html               # Landing page
├── dashboard.html           # Results dashboard
├── /css/
│   └── style.css            # Global styles
├── /js/
│   ├── main.js              # Landing page logic
│   └── dashboard.js         # Dashboard logic + mock data
├── /assets/
│   ├── logo.png             # Project logo
│   └── illustrations/       # UI/UX images
└── README.md                # Project documentation
