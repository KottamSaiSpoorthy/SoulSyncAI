export function loadComponents() {
  return new Promise((resolve) => {
    applyGlobalTheme();

    let loaded = 0;
    const total = 3;

    const checkDone = () => {
      loaded++;
      if (loaded === total) resolve();
    };

    // NAVBAR
    const nav = document.getElementById("navbar");
    if (nav) {
      fetch("../components/navbar.html")
        .then((r) => r.text())
        .then((html) => {
          nav.innerHTML = html;
          if (typeof applyAuthState === "function") applyAuthState();
          checkDone();
        });
    } else checkDone();

    // FOOTER
    const footer = document.getElementById("footer");
    if (footer) {
      fetch("../components/footer.html")
        .then((r) => r.text())
        .then((html) => {
          footer.innerHTML = html;
          checkDone();
        });
    } else checkDone();

    // SIDEBAR
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      fetch("../components/sidebar.html")
        .then((r) => r.text())
        .then((html) => {
          sidebar.innerHTML = html;
          checkDone();
        });
    } else checkDone();
  });
}

// Show correct navbar buttons based on login state
function applyAuthState() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const loginBtn = document.querySelector(".nav-link");
  const signupBtn = document.querySelector(".nav-btn-primary");

  // Logged-in icons (settings & profile)
  const settingsIcon = document.querySelector(".nav-icon.settings-icon");
  const profileIcon = document.querySelector(".nav-icon.profile-icon");

  const isLoggedIn = token || user;

  if (isLoggedIn) {
    // Hide login/signup
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";

    // Show icons
    if (settingsIcon) settingsIcon.style.display = "flex";
    if (profileIcon) profileIcon.style.display = "flex";
  } else {
    // Show login/signup
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (signupBtn) signupBtn.style.display = "inline-block";

    // Hide icons
    if (settingsIcon) settingsIcon.style.display = "none";
    if (profileIcon) profileIcon.style.display = "none";
  }
}

// Apply dark/light theme globally on every page
export function applyGlobalTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
  } else {
    document.body.classList.remove("theme-dark");
  }
}
