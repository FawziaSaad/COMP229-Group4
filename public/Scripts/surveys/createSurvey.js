let addButton = document.getElementById("addBtn");
let questionForm = document.getElementById("questionForm");
let container = document.getElementById("createSurveyContainter");

addButton.addEventListener("click", function () {
    let newQuestion = document.createElement("div");
    questionForm.appendChild(newQuestion);
    
    newQuestion.className = "form-group";
    newQuestion.innerHTML = `<label for="question">Question ${Array.from(questionForm.children).indexOf(newQuestion)+1}</label><input type="text" class="form-control" name=${"q"+(Array.from(questionForm.children).indexOf(newQuestion)+1)} placeholder="Enter question">`;

    
    let createAnswerBtn = document.createElement("button");
    createAnswerBtn.innerHTML = "Add Answer";
    createAnswerBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let newAnswer = document.createElement("div");
        newAnswer.className = "form-group";
        newQuestion.appendChild(newAnswer);
        newAnswer.innerHTML = `<label for="answer">Answer</label><input type="text" class="form-control" name=${"q"+String(Array.from(questionForm.children).indexOf(newQuestion)+1)+"a"+String(Array.from(newQuestion.children).indexOf(newAnswer)-3)} placeholder="Enter answer">`;
        
    }
    );
    newQuestion.appendChild(createAnswerBtn);

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove Question";
    removeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        questionForm.removeChild(newQuestion);
        if (questionForm.childElementCount == 0) {
            submitBtn = document.getElementById("submitBtn");
            container.removeChild(submitBtn);
        }
    });
    newQuestion.appendChild(removeBtn);

    if (questionForm.childElementCount == 1 ){
        let submitBtn = document.createElement("button");
        submitBtn.id = "submitBtn"; 
        submitBtn.innerHTML = "Submit";
        container.appendChild(submitBtn);
    }

});

