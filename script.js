class Portfolio {
  constructor(data) {
    this.data = data;
  }

  renderHeader() {
    document.getElementById("name").textContent = this.data.name;
    document.getElementById("tagline").textContent = this.data.tagline;
  }

  renderAbout() {
    document.getElementById("about").textContent = this.data.about;
  }

  renderSkills() {
    const skillsEl = document.getElementById("skills");
    this.data.skills.forEach(skill => {
      const div = document.createElement("div");
      div.className = "card";
      div.textContent = skill;
      skillsEl.appendChild(div);
    });
  }

  renderProjects() {
    const projEl = document.getElementById("projects");
    this.data.projects.forEach(project => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
      projEl.appendChild(div);
    });
  }

  renderCertifications() {
    const certsEl = document.getElementById("certifications");
    this.data.certifications.forEach(cert => {
      const li = document.createElement("li");
      li.textContent = cert;
      certsEl.appendChild(li);
    });
  }

  renderFooter() {
    document.getElementById("contact").textContent = this.data.contact;
  }

  renderAll() {
    this.renderHeader();
    this.renderAbout();
    this.renderSkills();
    this.renderProjects();
    this.renderCertifications();
    this.renderFooter();
  }
}

class Theme {
  static toggle() {
    document.body.classList.toggle("dark");
    const btn = document.querySelector(".toggle-btn");
    btn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

const rawnnPortfolio = new Portfolio({
  name: "Rawnn Rushday Heyloopers",
  tagline: "QA Tester • Web Admin • Designer @ Graphicrawn • Developer @ Eseqr • QA @ Ranao HRS • Future PM",
  about: "I’m a QA Tester, Web Administrator, and Graphic Designer (Graphicrawn) with experience in UX/UI, QA automation, debugging, and front-end development. I’ve contributed to academic systems like Ranao HRS by ITS Marawi and Eseqr, and I’m pursuing an MMITM degree with a goal to transition into tech-focused project management roles.",
  skills: [
    "JavaScript / TypeScript",
    "React / Vue",
    "QA Testing (Cypress / Selenium)",
    "Automation Testing & Debugging",
    "UX/UI Design (Figma)",
    "Graphic Design (Canva, Photoshop)",
    "Project Management (Agile/Scrum)"
  ],
  projects: [
    {
      title: "TIMO System",
      description: "QA and UX Designer for a web-based info management system for MSU-Marawi Faculty Union."
    },
    {
      title: "MSU Naawan Website",
      description: "Revamped university website UX and supported frontend development."
    },
    {
      title: "Eseqr",
      description: "Developer for an academic platform focused on secure student data and engagement tools."
    },
    {
      title: "Ranao HRS",
      description: "QA Automation Tester and Debugger at ITS Marawi for the Ranao Human Resource System."
    },
    {
      title: "Graphicrawn Works",
      description: "Branding, logo design, and promotional graphics for local businesses and clients."
    }
  ],
  certifications: [
    "Google Project Management Certificate (In Progress)",
    "Udemy: Software Testing & Agile",
    "Graphic Design Mastery (Freelance / Self-Taught)"
  ],
  contact: "Email: rawnn.heyloopers@example.com | GitHub: github.com/rawnndev | IG: @graphicrawn"
});

rawnnPortfolio.renderAll();
