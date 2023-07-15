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
    if (questionForm.childElementCount == 0) {
      submitBtn = document.getElementById("submitBtn");
      container.removeChild(submitBtn);
    }
  });
  removeBtn.className = "remove-question-btn";
  newQuestion.appendChild(removeBtn);

  newQuestionContainer.appendChild(newQuestion);

  
});

document.getElementById("submitBtn").addEventListener("click", async function (e) {
  e.preventDefault();
  let surveyName = document.getElementById("surveyName").value;
  let questions = [];
  let questionContainers = document.getElementsByClassName("question-container");
  for (let i = 0; i < questionContainers.length; i++) {
    let question = {};
    let questionInputs = questionContainers[i].getElementsByTagName("input");
    question["question"] = questionInputs[0].value;
    let answers = [];
    for (let j = 1; j < questionInputs.length; j++) {
      answers.push(questionInputs[j].value);
    }
    question["answers"] = answers;
    questions.push(question);
  }
  let survey = {
    "name": surveyName,
    "questions": questions
  };
  console.log(survey);
  await fetch("/game-list/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(survey)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    // console.log(data);
    window.location.href = "/surveys";
  });
});