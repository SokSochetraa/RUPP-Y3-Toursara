const tabs = document.querySelectorAll(".menu-item");
const allContent = document.querySelectorAll(
  ".menu-one-container, .menu-two-container, .menu-three-container"
);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((btn) => {
      btn.classList.remove("active");
    });
    tab.classList.add("active");

    const line = document.querySelector(".active-line");
    line.style.left = tab.offsetLeft + "px";
    allContent.forEach((section) => {
      section.classList.remove("menu-container-active");
    });
    allContent[index].classList.add("menu-container-active");
  });
});

const tabsHistory = document.querySelectorAll(".menu-item-two");
const allContentHistory = document.querySelectorAll(".option-two-info");

tabsHistory.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabsHistory.forEach((btn) => {
      btn.classList.remove("active");
    });
    tab.classList.add("active");

    const line = document.querySelector(".active-line-two");
    line.style.left = tab.offsetLeft + "px";
    allContentHistory.forEach((section) => {
      section.classList.remove("option-two-info-active");
    });
    allContentHistory[index].classList.add("option-two-info-active");
  });
});
