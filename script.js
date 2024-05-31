import { courses, major, literature, repositories, others } from "./list.js";
document.addEventListener("DOMContentLoaded", function () {
  renderLinksList(courses, "coursesList");
  renderLinksList(major, "majorList");
  renderLinksList(literature, "literatureList");
  renderLinksList(repositories, "repositoryList");
  renderLinksList(others, "othersList");

  setupTooltip();
});

function renderLinksList(links, ulId) {
  const ul = document.getElementById(ulId);

  links.forEach(function (link) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.link;
    a.textContent = link.title;
    a.target = "_blank";

    li.appendChild(a);
    ul.appendChild(li);

    a.addEventListener("mouseenter", function () {
      showTooltip(a, link.summary);
    });

    a.addEventListener("mouseleave", function () {
      hideTooltip();
    });
  });
}

function setupTooltip() {
  const tooltip = document.getElementById("tooltip");

  document.addEventListener("mousemove", function (e) {
    if (tooltip.style.display === "block") {
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY + 10 + "px";
    }
  });
}

function showTooltip(element, text) {
  const tooltip = document.getElementById("tooltip");
  tooltip.textContent = text;
  tooltip.style.display = "block";
  tooltip.style.left = element.getBoundingClientRect().left + "px";
  tooltip.style.top = element.getBoundingClientRect().bottom + "px";
}

function hideTooltip() {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
  tooltip.textContent = "";
}
