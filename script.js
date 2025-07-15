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
  tagline: "IT Professional • Designer @ Graphicrawn",
  about: "I’m an IT Professioanl with an experience of QA Tester, Web Administrator, and Graphic Designer (Graphicrawn) with experience in UX/UI, QA automation, debugging, and full-stack development. I’ve built and tested academic systems like TIMO and Ranao HRS, and I’m pursuing an MMITM degree to transition into project leadership roles.",
  skills: [
    "JavaScript / TypeScript",
    "React / Vue",
    "QA Testing (Cypress / Selenium)",
    "Full-stack Development (HTML/CSS/JS/PHP)",
    "UX/UI Design (Figma)",
    "Graphic Design (Canva, Adobe)",
    "Project Management (Agile/Scrum)"
  ],
  projects: [
    {
      title: "TIMO System",
      description: "Full-stack Developer and QA/UX Designer for TIMO, a web-based information management system for MSU-Marawi Faculty Union. Contributed to system architecture, testing, and user-centered interface."
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
      description: "Developer and QA Automation Tester for the Ranao Human Resource System by ITS Marawi. Handled core module development, debugging, and testing."
    },
    {
      title: "Graphicrawn",
      description: "Branding, logo design, and promotional graphics for local businesses and clients."
    }
  ],
  certifications: [
    "Google Project Management Certificate (In Progress)",
    "DigitaljobsPH Training Program - Graphic Design with Canva",
  ],
  contact: "Email: rawnrusdee11@gmail.com | GitHub: github.com/rawnloopers | IG: @graphicrawn | LinkedIn: linkedin.com/in/ron-rhasdy-a-ilupa-4a3938270"
});

rawnnPortfolio.renderAll();
