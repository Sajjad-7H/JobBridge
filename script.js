const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "CodeLayer",
    location: "Dhaka",
    type: "Full-time",
    category: "Technology",
    experience: "Entry",
    salary: 45000,
    verified: true,
    description: "Build responsive web interfaces for SaaS dashboards using HTML, CSS, JavaScript and modern component patterns."
  },
  {
    id: 2,
    title: "Digital Marketing Executive",
    company: "BrightMart",
    location: "Chattogram",
    type: "Full-time",
    category: "Marketing",
    experience: "Mid",
    salary: 38000,
    verified: true,
    description: "Plan campaigns, manage social channels and report growth performance for a fast-moving retail brand."
  },
  {
    id: 3,
    title: "Junior UI Designer",
    company: "PixelNest",
    location: "Remote",
    type: "Remote",
    category: "Design",
    experience: "Entry",
    salary: 52000,
    verified: false,
    description: "Create clean user flows, wireframes and polished screens for mobile-first marketplace products."
  },
  {
    id: 4,
    title: "Finance Analyst",
    company: "NexusFin",
    location: "Dhaka",
    type: "Full-time",
    category: "Finance",
    experience: "Mid",
    salary: 72000,
    verified: true,
    description: "Prepare financial models, merchant reports and executive dashboards for a growing fintech team."
  },
  {
    id: 5,
    title: "Customer Support Specialist",
    company: "HelpHive",
    location: "Sylhet",
    type: "Part-time",
    category: "Support",
    experience: "Entry",
    salary: 30000,
    verified: true,
    description: "Support customers through chat and email, document issues and improve service quality."
  },
  {
    id: 6,
    title: "Senior Backend Engineer",
    company: "CodeLayer",
    location: "Remote",
    type: "Remote",
    category: "Technology",
    experience: "Senior",
    salary: 135000,
    verified: true,
    description: "Design APIs, optimize databases and lead feature delivery for high-traffic cloud products."
  }
];

let activeCategory = "All";
const savedJobs = new Set(JSON.parse(localStorage.getItem("jobbridgeSaved") || "[]"));

const elements = {
  keyword: document.querySelector("#keywordInput"),
  location: document.querySelector("#locationInput"),
  type: document.querySelector("#typeInput"),
  experience: document.querySelector("#experienceFilter"),
  salary: document.querySelector("#salaryFilter"),
  verified: document.querySelector("#verifiedFilter"),
  jobList: document.querySelector("#jobList"),
  resultCount: document.querySelector("#resultCount"),
  savedCount: document.querySelector("#savedCount"),
  dashboardSaved: document.querySelector("#dashboardSaved"),
  applyModal: document.querySelector("#applyModal"),
  authModal: document.querySelector("#authModal")
};

function money(amount) {
  return `৳${Math.round(amount / 1000)}k`;
}

function getFilteredJobs() {
  const keyword = elements.keyword.value.trim().toLowerCase();
  const minimumSalary = Number(elements.salary.value || 0);

  return jobs.filter((job) => {
    const matchesKeyword = !keyword || `${job.title} ${job.company} ${job.description}`.toLowerCase().includes(keyword);
    const matchesLocation = !elements.location.value || job.location === elements.location.value;
    const matchesType = !elements.type.value || job.type === elements.type.value;
    const matchesExperience = !elements.experience.value || job.experience === elements.experience.value;
    const matchesSalary = !minimumSalary || job.salary >= minimumSalary;
    const matchesVerified = !elements.verified.checked || job.verified;
    const matchesCategory = activeCategory === "All" || job.category === activeCategory;

    return matchesKeyword && matchesLocation && matchesType && matchesExperience && matchesSalary && matchesVerified && matchesCategory;
  });
}

function renderJobs() {
  const filteredJobs = getFilteredJobs();
  elements.resultCount.textContent = `${filteredJobs.length} job${filteredJobs.length === 1 ? "" : "s"} found`;

  if (!filteredJobs.length) {
    elements.jobList.innerHTML = `<article class="job-card"><div><h3>No matching jobs found</h3><p>Try another keyword, location or filter combination.</p></div></article>`;
    return;
  }

  elements.jobList.innerHTML = filteredJobs.map((job) => `
    <article class="job-card">
      <div>
        <h3>${job.title}</h3>
        <p>${job.company} · ${job.location} · ${money(job.salary)} monthly</p>
        <p>${job.description}</p>
        <div class="tag-row">
          <span class="tag">${job.type}</span>
          <span class="tag">${job.category}</span>
          <span class="tag">${job.experience}</span>
          ${job.verified ? '<span class="tag">Verified</span>' : ""}
        </div>
      </div>
      <div class="job-actions">
        <button class="solid-btn" type="button" data-apply="${job.id}">Apply</button>
        <button class="save-btn ${savedJobs.has(job.id) ? "saved" : ""}" type="button" data-save="${job.id}">
          ${savedJobs.has(job.id) ? "Saved" : "Save"}
        </button>
      </div>
    </article>
  `).join("");
}

function updateSavedUI() {
  const count = savedJobs.size;
  elements.savedCount.textContent = count;
  elements.dashboardSaved.textContent = count;
  localStorage.setItem("jobbridgeSaved", JSON.stringify([...savedJobs]));
}

document.querySelector("#heroSearch").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#jobs").scrollIntoView({ behavior: "smooth" });
  renderJobs();
});

["input", "change"].forEach((eventName) => {
  [elements.keyword, elements.location, elements.type, elements.experience, elements.salary, elements.verified].forEach((control) => {
    control.addEventListener(eventName, renderJobs);
  });
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    activeCategory = chip.dataset.category;
    renderJobs();
  });
});

elements.jobList.addEventListener("click", (event) => {
  const applyButton = event.target.closest("[data-apply]");
  const saveButton = event.target.closest("[data-save]");

  if (applyButton) {
    const job = jobs.find((item) => item.id === Number(applyButton.dataset.apply));
    document.querySelector("#modalTitle").textContent = `Apply for ${job.title}`;
    document.querySelector("#modalCompany").textContent = `${job.company} · ${job.location} · ${job.type}`;
    elements.applyModal.showModal();
  }

  if (saveButton) {
    const id = Number(saveButton.dataset.save);
    savedJobs.has(id) ? savedJobs.delete(id) : savedJobs.add(id);
    updateSavedUI();
    renderJobs();
  }
});

document.querySelector("#cvForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#cvName").value.trim();
  const role = document.querySelector("#cvRole").value.trim();
  const skills = document.querySelector("#cvSkills").value.trim();
  const experience = document.querySelector("#cvExperience").value.trim();

  document.querySelector("#cvPreview").textContent =
    `${name}\n${role}\n\nProfessional Summary\nMotivated ${role} with practical skills in ${skills}. ${experience}\n\nCore Skills\n${skills}`;
});

document.querySelectorAll("[data-open-auth]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#authMode").textContent = button.dataset.openAuth === "signup" ? "Create account" : "Welcome back";
    elements.authModal.showModal();
  });
});

document.querySelector(".menu-btn").addEventListener("click", (event) => {
  const nav = document.querySelector(".main-nav");
  nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open"));
});

document.querySelector(".newsletter").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.querySelector("button").textContent = "Subscribed";
});

updateSavedUI();
renderJobs();
