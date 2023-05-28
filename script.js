import { courses, major, literature, repositories, others } from "./list.js";

document.addEventListener("DOMContentLoaded", function () {
  renderLinksList(courses, "coursesList");
  renderLinksList(major, "majorList");
  renderLinksList(literature, "literatureList");
  renderLinksList(repositories, "repositoryList");
  renderLinksList(others, "othersList");
  // Call renderLinksList for other sections here
});

function renderLinksList(links, ulId) {
  var ul = document.getElementById(ulId);

  links.forEach(function (link) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = link.link;
    a.textContent = link.title;
    a.target = "_blank";

    li.appendChild(a);
    ul.appendChild(li);
  });
}
