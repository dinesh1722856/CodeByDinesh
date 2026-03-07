// 🌙 DARK MODE
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};


// 📱 MOBILE MENU
const menu = document.querySelector(".mobile-menu");
const links = document.querySelector(".nav-links");

menu.onclick = () => {
  links.classList.toggle("show");
};


// 🔥 GITHUB PROJECTS AUTO
const username = "dinesh1722856";

async function loadProjects() {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await res.json();

  const container = document.getElementById("githubProjects");

  container.innerHTML = repos.slice(0, 6).map(repo => `
    <div class="project-card">
      <h3>${repo.name}</h3>
      <p>${repo.description || "No description"}</p>
      <a href="${repo.html_url}" target="_blank">View Code</a>
    </div>
  `).join("");
}

loadProjects();


// 📩 CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  await fetch("http://localhost:5000/contact", {
    method: "POST",
    body: formData
  });

  alert("Message sent!");
});