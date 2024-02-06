window.onload = function () {
  var tabs = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
};

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
