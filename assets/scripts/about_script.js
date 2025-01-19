const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(
  ".about, .about-cambodia, .contact"
);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => {
      btn.classList.remove("active-h1");
    });
    tab.classList.add("active-h1");

    all_content.forEach((section) => {
      section.classList.remove("content-show");
    });
    all_content[index].classList.add("content-show");
  });
});
