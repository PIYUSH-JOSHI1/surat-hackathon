import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  // Get profile data from localStorage
  const profileData = JSON.parse(localStorage.getItem("profileData")) || {}

  // Set user name
  const userName = document.getElementById("user-name")
  const sidebarName = document.getElementById("sidebar-name")

  // Extract username from GitHub URL if available
  let displayName = "Developer"
  if (profileData.github) {
    const githubUsername = profileData.github.split("/").pop()
    if (githubUsername) {
      displayName = githubUsername
    }
  }

  if (userName) userName.textContent = displayName
  if (sidebarName) sidebarName.textContent = displayName

  // Navigation
  const navLinks = document.querySelectorAll(".dashboard-nav a")
  const sections = document.querySelectorAll(".dashboard-section")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"))

      // Add active class to clicked link
      this.classList.add("active")

      // Hide all sections
      sections.forEach((section) => section.classList.remove("active"))

      // Show target section
      const targetId = this.getAttribute("href").substring(1)
      document.getElementById(targetId).classList.add("active")
    })
  })

  // Generate mock data based on profile inputs
  generateMockData(profileData)

  // Initialize charts
  initializeCharts()
})

function generateMockData(profileData) {
  // Generate random scores between 60-95
  const getRandomScore = () => Math.floor(Math.random() * 36) + 60

  // Overall score
  const overallScore = getRandomScore()
  document.getElementById("overall-score-value").textContent = overallScore

  // GitHub data
  const repoCount = Math.floor(Math.random() * 20) + 5
  const commitCount = Math.floor(Math.random() * 500) + 100
  document.getElementById("github-repos").textContent = `${repoCount} Repositories`
  document.getElementById("github-commits").textContent = `${commitCount} Commits (Last Year)`
  document.getElementById("total-commits").textContent = commitCount
  document.getElementById("total-projects").textContent = repoCount

  // LinkedIn data
  const connectionCount = Math.floor(Math.random() * 400) + 100
  const profileCompleteness = Math.floor(Math.random() * 30) + 70
  document.getElementById("linkedin-connections").textContent = `${connectionCount} Connections`
  document.getElementById("linkedin-completeness").textContent = `${profileCompleteness}% Complete`

  // Coding platform data
  const leetcodeProblems = Math.floor(Math.random() * 200) + 50
  const codeforcesRating = Math.floor(Math.random() * 800) + 1200
  document.getElementById("leetcode-problems").textContent = `${leetcodeProblems} LeetCode Problems`
  document.getElementById("codeforces-rating").textContent = `${codeforcesRating} CodeForces Rating`

  // Pull requests and issues
  const prCount = Math.floor(Math.random() * 50) + 10
  const issuesCount = Math.floor(Math.random() * 30) + 5
  const openSourceCount = Math.floor(Math.random() * 10) + 1
  document.getElementById("total-prs").textContent = prCount
  document.getElementById("total-issues").textContent = issuesCount
  document.getElementById("open-source-contributions").textContent = openSourceCount

  // Project diversity
  const diversityLevels = ["Low", "Medium", "High"]
  const diversityIndex = Math.floor(Math.random() * 3)
  document.getElementById("project-diversity").textContent = diversityLevels[diversityIndex]

  // Most used language
  const languages = ["JavaScript", "Python", "Java", "TypeScript", "C++", "Go"]
  const randomLanguage = languages[Math.floor(Math.random() * languages.length)]
  document.getElementById("most-used-language").textContent = randomLanguage

  // Peer comparison
  const peerPosition = Math.floor(Math.random() * 30) + 10
  document.getElementById("peer-position").textContent = `Top ${peerPosition}%`

  // Strengths and areas to improve
  const strengths = ["Project Structure", "Code Quality", "Documentation"]
  const improvements = ["Open Source Contributions", "Consistent Activity"]
  document.getElementById("peer-strengths").textContent = strengths.join(", ")
  document.getElementById("peer-improvements").textContent = improvements.join(", ")

  // Profile summary
  generateProfileSummary(profileData, overallScore)

  // Generate recommendations
  generateRecommendations()

  // Generate top skills
  generateTopSkills()

  // Generate top projects
  generateTopProjects()

  // Generate career paths
  generateCareerPaths()
}

function generateProfileSummary(profileData, score) {
  const summaryElement = document.getElementById("profile-summary")

  let summary = `Based on our analysis, your developer profile shows ${score >= 80 ? "strong" : "moderate"} potential for attracting recruiters. `

  if (profileData.github) {
    summary += `Your GitHub activity demonstrates ${score >= 80 ? "active" : "some"} engagement in coding projects. `
  } else {
    summary += `Adding a GitHub profile would significantly improve your visibility to technical recruiters. `
  }

  if (profileData.linkedin) {
    summary += `Your LinkedIn profile provides professional context to your technical skills. `
  } else {
    summary += `A LinkedIn profile would help showcase your professional experience alongside technical abilities. `
  }

  if (profileData.leetcode || profileData.codeforces) {
    summary += `Your coding platform presence demonstrates problem-solving abilities valued by employers. `
  }

  summary += `Overall, there are several opportunities to enhance your digital presence and make your profile more attractive to potential employers.`

  if (summaryElement) summaryElement.textContent = summary

  // Comparison summary
  const comparisonSummary = document.getElementById("comparison-summary")
  if (comparisonSummary) {
    comparisonSummary.textContent = `Compared to other developers in your field, your profile ranks in the top ${Math.floor(Math.random() * 30) + 10}%. Your strengths include project structure and code quality, while areas for improvement include increasing open source contributions and maintaining more consistent activity.`
  }
}

function generateRecommendations() {
  // GitHub recommendations
  const githubRecommendations = [
    "Add detailed README files to your top repositories",
    "Increase contribution frequency (aim for 3-5 commits per week)",
    "Contribute to at least 2 open-source projects",
    "Pin your 6 most impressive repositories",
    "Add project descriptions and topics to all repositories",
  ]

  // LinkedIn recommendations
  const linkedinRecommendations = [
    "Add specific technical skills to your profile",
    "Request recommendations from colleagues or mentors",
    "Add detailed descriptions to your work experience",
    "Share technical content weekly to increase visibility",
    "Join and participate in developer communities",
  ]

  // Coding platform recommendations
  const codingRecommendations = [
    "Solve at least 100 more LeetCode problems",
    "Participate in weekly coding contests",
    "Focus on medium and hard difficulty problems",
    "Improve solution efficiency (time and space complexity)",
    "Document your problem-solving approach",
  ]

  // Resume recommendations
  const resumeRecommendations = [
    "Quantify achievements with specific metrics",
    "Highlight technical skills at the top of your resume",
    "Include links to your GitHub and portfolio",
    "Tailor your resume for each job application",
    "Include a brief summary of your technical expertise",
  ]

  // Populate recommendation lists
  populateList("github-recommendations", githubRecommendations)
  populateList("linkedin-recommendations", linkedinRecommendations)
  populateList("coding-recommendations", codingRecommendations)
  populateList("resume-recommendations", resumeRecommendations)

  // Contribution recommendations
  const contributionRecommendations = [
    "Increase commit frequency to at least 4 days per week",
    "Contribute to popular open-source projects in your field",
    "Create more pull requests to collaborative projects",
    "Participate in Hacktoberfest or similar events",
    "Document your contributions in your portfolio",
  ]
  populateList("contribution-recommendations", contributionRecommendations)

  // Skill recommendations
  const skillRecommendations = [
    "Learn Docker and containerization",
    "Develop expertise in cloud platforms (AWS/Azure/GCP)",
    "Build projects with modern frameworks",
    "Learn CI/CD pipelines and DevOps practices",
    "Explore machine learning fundamentals",
  ]
  populateList("skill-recommendations", skillRecommendations)

  // Project recommendations
  const projectRecommendations = [
    "Build a full-stack application with authentication",
    "Create a mobile app using React Native or Flutter",
    "Develop a project using microservices architecture",
    "Build a project that implements machine learning",
    "Create a developer tool that solves a common problem",
  ]
  populateList("project-recommendations", projectRecommendations)
}

function populateList(elementId, items) {
  const element = document.getElementById(elementId)
  if (!element) return

  element.innerHTML = ""
  items.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    element.appendChild(li)
  })
}

function generateTopSkills() {
  const skills = [
    { name: "JavaScript", level: Math.floor(Math.random() * 30) + 70 },
    { name: "React", level: Math.floor(Math.random() * 30) + 70 },
    { name: "Node.js", level: Math.floor(Math.random() * 30) + 70 },
    { name: "Python", level: Math.floor(Math.random() * 30) + 70 },
    { name: "SQL", level: Math.floor(Math.random() * 30) + 70 },
    { name: "Git", level: Math.floor(Math.random() * 30) + 70 },
    { name: "HTML/CSS", level: Math.floor(Math.random() * 30) + 70 },
    { name: "TypeScript", level: Math.floor(Math.random() * 30) + 70 },
  ]

  const skillsList = document.getElementById("top-skills-list")
  if (!skillsList) return

  skillsList.innerHTML = ""
  skills.forEach((skill) => {
    const li = document.createElement("li")
    li.innerHTML = `
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
        `
    skillsList.appendChild(li)
  })
}

function generateTopProjects() {
  const projects = [
    {
      name: "E-commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      name: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    },
    {
      name: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data using third-party APIs.",
      tags: ["JavaScript", "API Integration", "CSS"],
    },
  ]

  const projectsContainer = document.getElementById("top-projects")
  if (!projectsContainer) return

  projectsContainer.innerHTML = ""
  projects.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.className = "project-card"

    let tagsHTML = ""
    project.tags.forEach((tag) => {
      tagsHTML += `<span class="project-tag">${tag}</span>`
    })

    projectCard.innerHTML = `
            <h4><i class="fas fa-project-diagram"></i> ${project.name}</h4>
            <p>${project.description}</p>
            <div class="project-tags">
                ${tagsHTML}
            </div>
        `

    projectsContainer.appendChild(projectCard)
  })
}

function generateCareerPaths() {
  const careerPaths = [
    {
      title: "Full-Stack Developer",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
      match: "92% Match",
    },
    {
      title: "DevOps Engineer",
      skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms", "Scripting"],
      match: "78% Match",
    },
    {
      title: "Machine Learning Engineer",
      skills: ["Python", "TensorFlow", "Data Analysis", "Statistics", "Algorithm Design"],
      match: "65% Match",
    },
  ]

  const careerPathsContainer = document.getElementById("career-paths")
  if (!careerPathsContainer) return

  careerPathsContainer.innerHTML = ""
  careerPaths.forEach((path) => {
    const pathCard = document.createElement("div")
    pathCard.className = "career-path-card"

    let skillsHTML = ""
    path.skills.forEach((skill) => {
      skillsHTML += `<li><i class="fas fa-check-circle"></i> ${skill}</li>`
    })

    pathCard.innerHTML = `
            <h4>${path.title} <span class="match-percentage">${path.match}</span></h4>
            <ul>
                ${skillsHTML}
            </ul>
        `

    careerPathsContainer.appendChild(pathCard)
  })
}

function initializeCharts() {
  // Skills Chart
  const skillsChartCtx = document.getElementById("skills-chart")
  if (skillsChartCtx) {
    new Chart(skillsChartCtx, {
      type: "bar",
      data: {
        labels: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"],
        datasets: [
          {
            label: "Skill Level",
            data: [85, 80, 75, 70, 90, 85],
            backgroundColor: [
              "rgba(79, 70, 229, 0.7)",
              "rgba(79, 70, 229, 0.7)",
              "rgba(79, 70, 229, 0.7)",
              "rgba(79, 70, 229, 0.7)",
              "rgba(79, 70, 229, 0.7)",
              "rgba(79, 70, 229, 0.7)",
            ],
            borderColor: [
              "rgba(79, 70, 229, 1)",
              "rgba(79, 70, 229, 1)",
              "rgba(79, 70, 229, 1)",
              "rgba(79, 70, 229, 1)",
              "rgba(79, 70, 229, 1)",
              "rgba(79, 70, 229, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    })
  }

  // Activity Chart
  const activityChartCtx = document.getElementById("activity-chart")
  if (activityChartCtx) {
    new Chart(activityChartCtx, {
      type: "doughnut",
      data: {
        labels: ["GitHub", "LinkedIn", "LeetCode", "Portfolio"],
        datasets: [
          {
            data: [40, 25, 20, 15],
            backgroundColor: [
              "rgba(79, 70, 229, 0.7)",
              "rgba(16, 185, 129, 0.7)",
              "rgba(245, 158, 11, 0.7)",
              "rgba(239, 68, 68, 0.7)",
            ],
            borderColor: [
              "rgba(79, 70, 229, 1)",
              "rgba(16, 185, 129, 1)",
              "rgba(245, 158, 11, 1)",
              "rgba(239, 68, 68, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    })
  }

  // Skills Radar Chart
  const skillsRadarChartCtx = document.getElementById("skills-radar-chart")
  if (skillsRadarChartCtx) {
    new Chart(skillsRadarChartCtx, {
      type: "radar",
      data: {
        labels: [
          "Frontend Development",
          "Backend Development",
          "Database Management",
          "DevOps",
          "Problem Solving",
          "UI/UX Design",
        ],
        datasets: [
          {
            label: "Your Skills",
            data: [85, 75, 70, 60, 80, 65],
            backgroundColor: "rgba(79, 70, 229, 0.2)",
            borderColor: "rgba(79, 70, 229, 1)",
            pointBackgroundColor: "rgba(79, 70, 229, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(79, 70, 229, 1)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    })
  }

  // Contribution Chart
  const contributionChartCtx = document.getElementById("contribution-chart")
  if (contributionChartCtx) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const contributionData = months.map(() => Math.floor(Math.random() * 50) + 10)

    new Chart(contributionChartCtx, {
      type: "line",
      data: {
        labels: months,
        datasets: [
          {
            label: "Contributions",
            data: contributionData,
            fill: true,
            backgroundColor: "rgba(79, 70, 229, 0.2)",
            borderColor: "rgba(79, 70, 229, 1)",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }

  // Comparison Chart
  const comparisonChartCtx = document.getElementById("comparison-chart")
  if (comparisonChartCtx) {
    new Chart(comparisonChartCtx, {
      type: "bar",
      data: {
        labels: ["GitHub Activity", "Code Quality", "Project Diversity", "Problem Solving", "Documentation"],
        datasets: [
          {
            label: "Your Profile",
            data: [75, 85, 65, 80, 70],
            backgroundColor: "rgba(79, 70, 229, 0.7)",
            borderColor: "rgba(79, 70, 229, 1)",
            borderWidth: 1,
          },
          {
            label: "Industry Average",
            data: [65, 70, 60, 75, 60],
            backgroundColor: "rgba(156, 163, 175, 0.7)",
            borderColor: "rgba(156, 163, 175, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    })
  }
}

