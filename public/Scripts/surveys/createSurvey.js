let addButton = document.getElementById("addBtn");
let questionForm = document.getElementById("questionForm");
let container = document.getElementById("createSurveyContainter");

let currentQuestionCount = 0;
const maxQuestionCount = 10;
const maxResponseCount = 4;

// Create an array of questions
let questions = [];

addButton.addEventListener("click", function () {
  let currentResponseCount = 0;

  if (currentQuestionCount >= maxQuestionCount){
    console.log("MAX REACHED");
  } else {
    let newQuestionContainer = document.createElement("div");
    newQuestionContainer.className = "question-container";
    questionForm.appendChild(newQuestionContainer);
    currentQuestionCount++;
    console.log(`current question count: ${currentQuestionCount}`);

    let newQuestion = document.createElement("div");
    newQuestion.className = "form-group";
    newQuestion.innerHTML = `<label for="question">Question ${Array.from(questionForm.children).indexOf(newQuestionContainer) + 1}</label><input type="text" class="form-control" name=${"q" + (Array.from(questionForm.children).indexOf(newQuestionContainer) + 1)} placeholder="Enter question">`;

    let createAnswerBtn = document.createElement("button");
    createAnswerBtn.innerHTML = "Add Answer";
    createAnswerBtn.addEventListener("click", function (e) {
      if (currentResponseCount >= maxResponseCount) {
        console.log("MAX RESPONSES REACHED");
      } else{
        e.preventDefault();
        let newAnswer = document.createElement("div");
        newAnswer.className = "form-group";
        newQuestion.appendChild(newAnswer);
        let answerIndex = Array.from(newQuestion.children).indexOf(newAnswer) - 3;
        newAnswer.innerHTML = `<label for="answer">Answer</label><input type="text" class="form-control" name=${"q" + String(Array.from(questionForm.children).indexOf(newQuestionContainer) + 1) + "a" + String(answerIndex)} placeholder="Enter answer ${answerIndex + 0}">`;
        currentResponseCount++;
        console.log(`current response count: ${currentResponseCount}`);
      }
    });
    createAnswerBtn.className = "add-answer-btn";
    newQuestion.appendChild(createAnswerBtn);
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove Question";
    removeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      questionForm.removeChild(newQuestionContainer);
      if (questionForm.childElementCount == 0) {
        submitBtn = document.getElementById("submitBtn");
        container.removeChild(submitBtn);
        currentResponseCount++;
        console.log(`current response count: ${currentResponseCount}`);
      }
    });
    removeBtn.className = "remove-question-btn";
    newQuestion.appendChild(removeBtn);

    newQuestionContainer.appendChild(newQuestion);

    if (questionForm.childElementCount == 1 && container !== null) {
      let submitBtn = document.createElement("button");
      submitBtn.id = "submitBtn";
      submitBtn.innerHTML = "Submit";
      container.appendChild(submitBtn);
    }
  }
});
