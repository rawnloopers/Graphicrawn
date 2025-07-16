// script.js
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
    skillsEl.innerHTML = ''; // Clear existing skills to prevent duplicates on re-render
    this.data.skills.forEach(skill => {
      const div = document.createElement("div");
      div.className = "card skill-card"; // Added 'skill-card' class for specific styling
      div.tabIndex = 0; // Make card focusable for keyboard navigation

      // Create and append the icon if iconClass is provided
      if (skill.iconClass) {
        const icon = document.createElement("i");
        icon.className = skill.iconClass + " skill-icon";
        div.appendChild(icon);
      }

      // Create and append the skill name
      const nameP = document.createElement("p");
      nameP.className = "skill-name"; // Class for skill name
      nameP.textContent = skill.name;
      div.appendChild(nameP);

      // Create and append the description if it exists
      if (skill.description) {
        const descP = document.createElement("p");
        descP.className = "skill-description"; // Class for skill description
        descP.textContent = skill.description;
        div.appendChild(descP);
      }

      skillsEl.appendChild(div);
    });
  }

  renderProjects() {
    const projEl = document.getElementById("projects");
    projEl.innerHTML = ''; // Clear existing projects
    this.data.projects.forEach(project => {
      const a = document.createElement("a"); // Using 'a' for clickable cards
      a.href = project.link || "#"; // Add project link
      a.target = "_blank"; // Open links in a new tab
      a.className = "card";

      // Apply specific classes for bento box sizing based on 'span' property
      if (project.span) {
        if (project.span.includes('w-2')) {
          a.classList.add("card-w-2");
        }
        if (project.span.includes('h-2')) {
          a.classList.add("card-h-2");
        }
      }

      // Add a project-specific class for more granular CSS control (optional)
      const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      a.classList.add(`project-${slug}`);

      a.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
      projEl.appendChild(a);
    });
  }


  renderCertifications() {
    const certsEl = document.getElementById("certifications");
    certsEl.innerHTML = ''; // Clear existing certifications
    this.data.certifications.forEach(cert => {
      const li = document.createElement("li");
      li.textContent = cert;
      certsEl.appendChild(li);
    });
  }

  renderFooter() {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.innerHTML = `
        Email: <a href="mailto:${this.data.contact.email}">${this.data.contact.email}</a> |
        GitHub: <a href="${this.data.contact.github}" target="_blank">${this.data.contact.github.split('/').pop()}</a> |
        IG: <a href="${this.data.contact.instagram}" target="_blank">${this.data.contact.instagram.split('/').pop()}</a> |
        LinkedIn: <a href="${this.data.contact.linkedin}" target="_blank">${this.data.contact.linkedin.split('/').pop()}</a>
      `;
    }
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
  static updateButton(isDarkMode) {
    const toggleText = document.querySelector(".toggle-text");
    const toggleIcon = document.querySelector(".toggle-icon-mobile i");

    if (isDarkMode) {
      if (toggleText) toggleText.textContent = "☀️ Light Mode";
      if (toggleIcon) {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
      }
    } else { // Light Mode
      if (toggleText) toggleText.textContent = "🌙 Dark Mode";
      if (toggleIcon) {
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
      }
    }
  }

  static toggle() {
    document.body.classList.toggle("dark");
    // Pass the *new* state to updateButton
    Theme.updateButton(document.body.classList.contains("dark"));
  }
}

const rawnnPortfolio = new Portfolio({
  name: "Rawnn Rushday Heyloopers",
  tagline: "IT Professional • Designer @ Graphicrawn",
  about: "I’m an IT Professional with experience as a QA Tester, Web Administrator, and Graphic Designer (Graphicrawn) with expertise in UX/UI, QA automation, debugging, and full-stack development. I’ve built and tested academic systems like TIMO and Ranao HRS, and I’m pursuing an MMITM degree to transition into project leadership roles.",
  // Updated skills data structure: Removed 'span' for uniform size
  skills: [
    { name: "JavaScript / TypeScript", iconClass: "fa-brands fa-js", description: "Proficient in modern JavaScript, including ES6+ features, and TypeScript for robust applications." },
    { name: "React / Vue", iconClass: "fa-brands fa-react", description: "Experience building dynamic user interfaces with React and Vue.js frameworks." },
    { name: "QA Testing", iconClass: "fa-solid fa-bug", description: "Skilled in manual and automated quality assurance testing (e.g., Cypress, Selenium) for web applications." },
    { name: "Full-stack Development", iconClass: "fa-solid fa-code", description: "Capable of developing both frontend (HTML, CSS, JS) and backend (PHP, Node.js) components of web applications." },
    { name: "UX/UI Design (Figma)", iconClass: "fa-brands fa-figma", description: "Designing intuitive and user-friendly interfaces with a strong focus on user experience principles using Figma." },
    { name: "Graphic Design", iconClass: "fa-solid fa-paint-brush", description: "Creative graphic design for branding, logos, and promotional materials using tools like Canva and Photoshop." },
    { name: "Project Management", iconClass: "fa-solid fa-diagram-project", description: "Familiar with Agile and Scrum methodologies for efficient project planning and execution." }
  ],
  projects: [
    {
      title: "TIMO System",
      description: "Full-stack Developer and QA/UX Designer for TIMO, a web-based information management system for MSU-Marawi Faculty Union. Contributed to system architecture, testing, and user-centered interface.",
      link: "https://example.com/timo",
      span: "w-2" // Example project spanning 2 columns
    },
    {
      title: "MSU Naawan Website",
      description: "Revamped university website UX and supported frontend development.",
      link: "https://example.com/msu-naawan"
    },
    {
      title: "Eseqr",
      description: "Developer for an academic platform focused on secure student data and engagement tools.",
      link: "https://example.com/eseqr"
    },
    {
      title: "Ranao HRS",
      description: "Developer and QA Automation Tester for the Ranao Human Resource System by ITS Marawi. Handled core module development, debugging, and testing.",
      link: "https://example.com/ranao-hrs",
      span: "w-2" // Example project spanning 2 columns
    },
    {
      title: "Graphicrawn",
      description: "Branding, logo design, and promotional graphics for local businesses and clients.",
      link: "https://instagram.com/graphicrawn",
      span: "w-2" // Example project spanning 2 columns
    }
  ],
  certifications: [
    "Google Project Management Certificate (In Progress)",
    "DigitaljobsPH Training Program - Graphic Design with Canva",
  ],
  contact: {
    email: "rawnrusdee11@gmail.com",
    github: "https://github.com/rawnloopers",
    instagram: "https://www.instagram.com/graphicrawn",
    linkedin: "https://www.linkedin.com/in/ron-rhasdy-a-ilupa-4a3938270"
  }
});

document.addEventListener('DOMContentLoaded', () => {
  rawnnPortfolio.renderAll();

  const toggleBtn = document.querySelector(".toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener('click', Theme.toggle);
    // Initialize button state based on the *initial* body class.
    Theme.updateButton(document.body.classList.contains("dark"));
  }
});