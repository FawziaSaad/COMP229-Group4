let addButton = document.getElementById("addBtn");
let questionForm = document.getElementById("questionForm");
let container = document.getElementById("createSurveyContainter");

addButton.addEventListener("click", function () {
  let newQuestionContainer = document.createElement("div");
  newQuestionContainer.className = "question-container";
  questionForm.appendChild(newQuestionContainer);

  let newQuestion = document.createElement("div");
  newQuestion.className = "form-group";
  newQuestion.innerHTML = `<label for="question">Question ${Array.from(questionForm.children).indexOf(newQuestionContainer) + 1}</label><input type="text" class="form-control" name=${"q" + (Array.from(questionForm.children).indexOf(newQuestionContainer) + 1)} placeholder="Enter question">`;

  let createAnswerBtn = document.createElement("button");
  createAnswerBtn.innerHTML = "Add Answer";
  createAnswerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let newAnswer = document.createElement("div");
    newAnswer.className = "form-group";
    newQuestion.appendChild(newAnswer);
    let answerIndex = Array.from(newQuestion.children).indexOf(newAnswer) - 3;
    newAnswer.innerHTML = `<label for="answer">Answer</label><input type="text" class="form-control" name=${"q" + String(Array.from(questionForm.children).indexOf(newQuestionContainer) + 1) + "a" + String(answerIndex)} placeholder="Enter answer ${answerIndex + 0}">`;
  });
  createAnswerBtn.className = "add-answer-btn";
  newQuestion.appendChild(createAnswerBtn);

  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remove Question";
  removeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    questionForm.removeChild(newQuestionContainer);
  });
  removeBtn.className = "remove-question-btn";
  newQuestion.appendChild(removeBtn);

  newQuestionContainer.appendChild(newQuestion);

});


// Please add some kind of form limit, the model will only take a max of 4.

// These prevent the form from submitting
addButton.addEventListener("click", function (e) {
  e.preventDefault();
});

let addAnswerButtons = document.getElementsByClassName("add-answer-btn");
for (let i = 0; i < addAnswerButtons.length; i++) {
  addAnswerButtons[i].addEventListener("click", function (e) {
    e.preventDefault();
  });
}