document.addEventListener("DOMContentLoaded", function () {
  // Light/Dark theme toggle
  const themeSwitch = document.getElementById("theme-switch");
  const currentTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  if (currentTheme === "dark") {
    themeSwitch.checked = true;
  }

  // Apply initial theme
  document.documentElement.setAttribute("data-theme", currentTheme);

  themeSwitch.addEventListener("change", function () {
    const theme = this.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
});
