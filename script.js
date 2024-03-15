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

function toggleBiography() {
  var bio = document.querySelector('.biography');
  if (bio.style.display === 'none') {
    bio.style.display = 'block';
    document.querySelector('.show-btn').textContent = 'Свернуть';
  } else {
    bio.style.display = 'none';
    document.querySelector('.show-btn').textContent = 'Развернуть';
  }
}

const home = document.getElementById("home");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");

home.addEventListener("click", () => {
  scrollToElement(".nav-bio");
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
  scrollToElement(".div-zeml");
});

link5.addEventListener("click", () => {
  scrollToElement(".div-media");
});

link6.addEventListener("click", () => {
  scrollToElement(".about");
});

function showTab(tabId, element) {
  var tabContent = document.getElementById(tabId);

  if (tabContent.style.display === "block") {
    tabContent.style.display = "none";
    element.classList.remove("active");
  } else {
    var activeElement = document.querySelector(".word-list .active");
    if (activeElement) {
      activeElement.classList.remove("active");
    }

    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }

    tabContent.style.display = "block";
    tabContent.classList.add("slide-in");
    setTimeout(function () {
      tabContent.classList.remove("slide-in");
    }, 300);

    element.classList.add("active");
  }
}
