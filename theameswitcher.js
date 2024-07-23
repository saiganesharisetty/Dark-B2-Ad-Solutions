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
// Get the modal
var modal3 = document.getElementById("contactModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("contactButton3");

// Get the <span> element that closes the modal
var span = document.getElementById("close3");

// When the user clicks the button, open the modal
btn3.onclick = function () {
  modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

// Get the modal
var modal2 = document.getElementById("contactModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("contactButton2");

// Get the <span> element that closes the modal
var span = document.getElementById("close2");

// When the user clicks the button, open the modal
btn2.onclick = function () {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

// Get the modal
var modal1 = document.getElementById("contactModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("contactButton1");

// Get the <span> element that closes the modal
var span = document.getElementById("close1");

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
