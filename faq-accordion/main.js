import { questionsAnswers } from "./utils/questionAnswer.js";

const faqList = document.querySelector(".faq-list");

questionsAnswers.forEach(({ id, question, answer }) => {
  faqList.innerHTML += `<li class="question-item" id=${id}>
                    <div class="question-icon">
                        <p class="question">${question}</p>
                        <span class="material-symbols-rounded toggle-icon">
                            expand_circle_down
                        </span>
                    </div>
                    <p class="answer closed">${answer}</p>
                </li>`;
});

const closeBtns = document.querySelectorAll(".toggle-icon");

closeBtns.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    const parentEl = el.target.closest(".question-item");
    const answer = parentEl.querySelector(".answer");
    const icon = parentEl.querySelector(".toggle-icon");

    answer.classList.toggle("closed");
    if (answer.classList.contains("closed")) {
      icon.innerText = "expand_circle_down";
    } else {
      icon.innerText = "expand_circle_up";
    }
  });
});
