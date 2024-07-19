document
  .getElementById("theme-switcher")
  .addEventListener("click", function () {
    var themeLink = document.getElementById("cssnormal");
    var themeLink2 = document.getElementById("cssboot");
    var currentTheme = themeLink.getAttribute("href");
    var currentTheme2 = themeLink2.getAttribute("href");

    if (currentTheme === "css/styledark.css") {
      themeLink.setAttribute("href", "css/style.css");
    } else {
      themeLink.setAttribute("href", "css/styledark.css");
    }
    if (currentTheme2 === "css/bootstrapdark.min.css") {
      themeLink2.setAttribute("href", "css/bootstrap.min.css");
    } else {
      themeLink2.setAttribute("href", "css/bootstrapdark.min.css");
    }
  });
