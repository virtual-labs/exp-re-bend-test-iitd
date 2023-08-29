
(function() {
    function buildQuiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

            } else {
                answerContainers[questionNumber].style.color = "red";
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");







    /////////////// MCQ below  ///////////////


    const myQuestions = [{
            question: " 1.What should be the mandrel diameter for bend test of a Fe500 specimen of diameter 20mm ?", 
            answers: {
                a: "80 mm", 
                b: "100 mm", 
                c: "140 mm",
                d: "20 mm", 
            },
            correctAnswer: "a" 
        },
                         
//       

        {
            question: "2.What should be the mandrel diameter for re-bend test of a Fe550 specimen of diameter 12mm ?", 
            answers: {
                a: "108 mm", 
                b: "84 mm", 
                c: "60 mm",
                d: "72 mm", 
            },
            correctAnswer: "a" 
        },
                         
        {
            question: " 3.At what testing rate, the bending shall be applied in bend and re-bend tests ?", 
            answers: {
                a: "1 mm/s", 
                b: "2.5 mm/s", 
                c: "3 mm/s", 
                d: "4 mm/s", 
            },
            correctAnswer: "a" 
        },                 

        {
            question: "4.Which of the following grades of steel has the highest ductility ?" , 

            answers: {
                a: "Fe415", 
                b: "Fe415D", 
                c: "Fe415S", 
                d: "All of the above have same ductility", 
            },
            correctAnswer: "c" 
        }, 

        {
            question: "5.What shall be the distance between the supports for the bend test of a Fe550 rod of diameter 12 mm ?" , 

            answers: {
                a: "96 ± 6 mm", 
                b: "84 ± 6 mm", 
                c: "108 ± 6 mm", 
                d: "60 ± 6 mm", 
            },
            correctAnswer: "a" 
        }, 
        
        {
            question: "6.What kind of support is used to fix the specimen in bend and re-bend tests ?" , 

            answers: {
                a: "Hinge", 
                b: "Fixed", 
                c: "Roller", 
                d: "Pinned", 
            },
            correctAnswer: "c" 
        }, 
        

         


        
    ];




    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();


