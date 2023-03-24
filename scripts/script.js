"use strict";
// get elements
const btnS = document.querySelectorAll(".teb-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// addeventlistener
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other button
    btnS.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
