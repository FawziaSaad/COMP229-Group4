 document.addEventListener("DOMContentLoaded", ()=> {
    console.log("here!");
    let surveyType = document.getElementById("surveyType");
    let mcqContainer = document.querySelector(".mcq-container");
    let saContainer = document.querySelector(".sa-container");

    surveyType.addEventListener("change", ()=> {
        if (surveyType.value === "MCQ"){

        console.log("It is an Multiple Choice");
        mcqContainer.style.display = "block";
        saContainer.style.display = "";

        // Set the required attribute for MCQ questions
        let mcqQuestions = mcqContainer.querySelectorAll("input");
        mcqQuestions.forEach((question) => {
          question.required = true;
        });

        // Remove the required attribute for SA questions
        let saQuestions = saContainer.querySelectorAll("input");
        saQuestions.forEach((question) => {
          question.required = false;
        });

      } if (surveyType.value === "SA"){
        console.log("It is an Short Answer Survey");
        mcqContainer.style.display = "";
        saContainer.style.display = "block";

        // Remove the required attribute for MCQ questions
        let mcqQuestions = mcqContainer.querySelectorAll("input");
        mcqQuestions.forEach((question) => {
          question.required = false;
      });

      // Set the required attribute for SA questions
      let saQuestions = saContainer.querySelectorAll("input");
      saQuestions.forEach((question) => {
        question.required = true;
      });

      }
    })
  })