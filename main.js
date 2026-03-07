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

<script>
            $(document).ready(function () {
                // Handle form submission
                $('#contact_form').submit(function (e) {
                    e.preventDefault(); // Prevent default form submission
                    $('#loader').show(); // Show loader
                    // Collect form data
                    var formData = $(this).serialize();
                    // AJAX request
                    $.ajax({
                        type: "POST",
                        url: "/contact_from",
                        data: formData,
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // CSRF Token
                        },
                        success: function (response) {
                            $('#loader').hide(); // Hide loader
                            // Dynamically show custom alert with message
                            $('#successMessage').text(response.message || "Your message has been sent successfully");
                            $('#customAlert').fadeIn(); // Show custom alert with fade-in effect
                            // Reset the form
                            $('#contact_form')[0].reset();
                        },
                        error: function (xhr, status, error) {
                            $('#loader').hide(); // Hide loader
                            alert('Error occurred while sending message'); // Simple error handling
                        }
                    });
                });
                // Close custom alert on button click
                $('#closeAlert').click(function (e) {
                    e.preventDefault(); // Prevent default action of button
                    $('#customAlert').fadeOut(); // Hide custom alert
                });
            });
        </script>