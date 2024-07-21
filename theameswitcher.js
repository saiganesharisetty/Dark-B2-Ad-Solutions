/*
document
  .getElementById("theme-switcher")
  .addEventListener("click", function () {
    var themeLink = document.getElementById("cssnormal");
    var themeLink2 = document.getElementById("cssboot");
    var currentTheme = themeLink.getAttribute("href");
    var currentTheme2 = themeLink2.getAttribute("href");

    var buttontheme1 = document.getElementById("theme-spanner1");
    var buttontheme2 = document.getElementById("theme-spanner2");

    if (currentTheme === "css/styledark.css") {
      themeLink.setAttribute("href", "css/style.css");
      buttontheme1.setAttribute("class", "lightbutton");
      buttontheme2.setAttribute("class", "lightbutton");
    } else {
      themeLink.setAttribute("href", "css/styledark.css");
      buttontheme1.setAttribute("class", "darkbutton");
      buttontheme2.setAttribute("class", "darkbutton");
    }
    if (currentTheme2 === "css/bootstrapdark.min.css") {
      themeLink2.setAttribute("href", "css/bootstrap.min.css");
    } else {
      themeLink2.setAttribute("href", "css/bootstrapdark.min.css");
    }
  });
   */
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("dark-mode");
  const stylesheet = document.getElementById("cssnormal");
  const stylesheet2 = document.getElementById("cssboot");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      stylesheet.href = "css/style.css";
      stylesheet2.href = "css/bootstrap.min.css";
    } else {
      stylesheet.href = "css/styledark.css";
      stylesheet2.href = "css/bootstrapdark.min.css";
    }
  });
});
