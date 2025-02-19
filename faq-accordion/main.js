import { questionsAnswers } from "./utils/questionAnswer.js";

const faqList = document.querySelector(".faq-list");

questionsAnswers.forEach((el) => {
  faqList.innerHTML += `<li class="question-item">
                    <div class="question-icon">
                        <p class="question">${el.question}</p>
                        <span class="material-symbols-rounded open-icon">
                            add_circle
                        </span>
                    </div>
                    <p class="answer closed">${el.answer}</p>
                </li>`;
});

const closeBtns = document.querySelectorAll(".open-icon");
