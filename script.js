window.onload = function () {
  var tabs = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
};

function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const home = document.getElementById("home");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

home.addEventListener("click", () => {
  scrollToElement(".container");
});

link1.addEventListener("click", () => {
  scrollToElement(".div-bio");
});

link2.addEventListener("click", () => {
  scrollToElement(".div-lit");
});

link3.addEventListener("click", () => {
  scrollToElement(".div-arch");
});

link4.addEventListener("click", () => {
  scrollToElement(".div-bio");
});



function showTab(tabId, element) {
  var tabContent = document.getElementById(tabId);
  var tabs = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tabContent.style.display = "block";
  tabContent.classList.add("slide-in");
  setTimeout(function () {
    tabContent.classList.remove("slide-in");
  }, 1000);

  var activeElement = document.querySelector(".word-list .active");
  if (activeElement) {
    activeElement.classList.remove("active");
  }
  element.classList.add("active");
}
