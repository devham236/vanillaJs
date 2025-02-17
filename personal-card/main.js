import { socialArray } from "./utils/socialArray.js";

const socialList = document.querySelector(".social-links");

socialArray.forEach((link) => {
  socialList.innerHTML += `<li class="link">${link.name}</li>`;
});

const socialLink = document.querySelectorAll(".link");

socialLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    alert(`Go to ${e.target.innerText}`);
  });
});
