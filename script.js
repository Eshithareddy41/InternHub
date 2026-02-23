var internships = [
  {
    role: "Web Developer Intern",
    company: "Alpha Data Tech",
    location: "Remote",
    stipend: "₹60,000",
    deadline: "25 Dec 2025"
  },
  {
    role: "Frontend Developer Intern",
    company: "Startup XYZ",
    location: "Remote",
    stipend: "₹40,000",
    deadline: "30 Dec 2025"
  },
  {
    role: "Backend Developer Intern",
    company: "CloudNova",
    location: "Remote",
    stipend: "₹50,000",
    deadline: "28 Dec 2025"
  },
  {
    role: "Full Stack Developer Intern",
    company: "CodeCraft Labs",
    location: "Remote",
    stipend: "₹55,000",
    deadline: "31 Dec 2025"
  },
  {
    role: "UI/UX Designer Intern",
    company: "Designify",
    location: "Remote",
    stipend: "₹35,000",
    deadline: "27 Dec 2025"
  },
  {
    role: "Java Developer Intern",
    company: "TechWave",
    location: "Remote",
    stipend: "₹45,000",
    deadline: "29 Dec 2025"
  },
  {
    role: "Python Developer Intern",
    company: "DataSprint",
    location: "Remote",
    stipend: "₹50,000",
    deadline: "01 Jan 2026"
  },
  {
    role: "Cybersecurity Intern",
    company: "SecureNet",
    location: "Remote",
    stipend: "₹60,000",
    deadline: "02 Jan 2026"
  },
  {
    role: "Data Analyst Intern",
    company: "InsightIQ",
    location: "Remote",
    stipend: "₹42,000",
    deadline: "30 Dec 2025"
  },
  {
    role: "Machine Learning Intern",
    company: "AI Works",
    location: "Remote",
    stipend: "₹65,000",
    deadline: "05 Jan 2026"
  },
  {
    role: "Cloud Computing Intern",
    company: "CloudSphere",
    location: "Remote",
    stipend: "₹55,000",
    deadline: "03 Jan 2026"
  },
  {
    role: "DevOps Intern",
    company: "OpsGen",
    location: "Remote",
    stipend: "₹58,000",
    deadline: "04 Jan 2026"
  }
];


function loadInternships() {
  var list = document.getElementById("internship-list");
  list.innerHTML = "";

  for (var i = 0; i < internships.length; i++) {
    var card = document.createElement("div");
    card.className = "card";

    card.innerHTML =
      "<h3>" + internships[i].role + "</h3>" +
      "<p><b>Company:</b> " + internships[i].company + "</p>" +
      "<p><b>Location:</b> " + internships[i].location + "</p>" +
      "<p><b>Stipend:</b> " + internships[i].stipend + "</p>" +
      "<p><b>Apply By:</b> " + internships[i].deadline + "</p>" +
      "<button onclick=\"openForm('" + internships[i].role + "')\">Apply Now</button>";

    list.appendChild(card);
  }
}


function openForm(role) {
  document.getElementById("form-section").className = "";
  document.getElementById("role").value = role;
}


function closeForm() {
  document.getElementById("form-section").className = "hidden";
}


function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var role = document.getElementById("role").value;

  var applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  applications.push({
    name: name,
    email: email,
    role: role
  });

  localStorage.setItem("applications", JSON.stringify(applications));

  alert("Application submitted successfully!");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  closeForm();
}


loadInternships();
