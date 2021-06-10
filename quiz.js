// Declare variable
const content = document.querySelector(".content");
const question_text = document.querySelector(".question_box h4");
const answerList = document.querySelector(".answer_list");
const nextBtn = document.querySelector("#nextBtn");
const preBtn = document.querySelector("#previousBtn");
const submitBtn = document.querySelector("#submitBtn");
let currentQuestion = document.querySelector(".current_question");
let totalQuestion = document.querySelector(".total_question");
const answer = document.getElementsByName("answer");
let score = 0;
let index = 0;
// Render question
function showQuestion(number) {
    currentQuestion.innerHTML = myQuestions[number].id;
    totalQuestion.innerHTML = myQuestions.length;
    question_text.innerHTML = myQuestions[number].question;

    let answerRender = `
        <div class="answer">
           <input type="radio" name="answer" id="a" />
           <label for="a"
            ><strong>A.</strong>${myQuestions[number].answers["a"]}</label
           >
        </div>
        <div class="answer">
          <input type="radio" name="answer" id="b" />
          <label for="b"
            ><strong>B.</strong>${myQuestions[number].answers["b"]}</label
          >
        </div>
        <div class="answer">
          <input type="radio" name="answer" id="c" />
          <label for="c"
            ><strong>C.</strong>${myQuestions[number].answers["c"]}</label
          >
        </div>
        <div class="answer">
          <input type="radio" name="answer" id="d" />
          <label for="d"
            ><strong>D.</strong>${myQuestions[number].answers["d"]}</label
          >
        </div>
            </div>`;
    answerList.innerHTML = answerRender;
    // show checked history
    switch (myQuestions[number].userAnswer) {
        case "a":
            document.getElementById("a").checked = true;
            break;
        case "b":
            document.getElementById("b").checked = true;
            break;
        case "c":
            document.getElementById("c").checked = true;
            break;
        case "d":
            document.getElementById("d").checked = true;
            break;
    }
}
showQuestion(index);
// Next button function
nextBtn.addEventListener("click", function(e) {
    e.preventDefault();
    addAnswer();
    index++;
    if (index >= myQuestions.length - 1) {
        index = myQuestions.length - 1;
        nextBtn.classList.add("hide");
        submitBtn.classList.remove("hide");
    }

    showQuestion(index);
    console.log(index);
});
// Previous button function
preBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addAnswer();
    index--;
    if (index < 0) {
        index = 0;
    } else if (index < myQuestions.length - 1) {
        submitBtn.classList.add("hide");
        nextBtn.classList.remove("hide");
    }
    showQuestion(index);
    console.log(index);
});
// add answer from user

function addAnswer() {
    for (let i = 0; i < answer.length; i++) {
        if (answer[i].checked) {
            myQuestions[index].userAnswer = answer[i].getAttribute("id");
        }
    }
    console.log(myQuestions);
}
// calculate score when submit
function calcScore() {
    for (let i = 0; i < myQuestions.length; i++) {
        if (myQuestions[i].userAnswer == myQuestions[i].correctAnswer) {
            score++;
        }
    }
}
// Show result
submitBtn.onclick = (e) => {
    // add answer for last question
    addAnswer();
    // calculate total score
    calcScore();
    // For render html
    content.style.display = "none";
    let result = document.querySelector(".result");
    result.classList.remove("hide");
    document.querySelector(
        ".result p",
    ).innerHTML = `You got ${score} of ${myQuestions.length} questions`;
    e.preventDefault();
};
// Countdown timer
const time = document.querySelector(".time");