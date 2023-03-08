// Questions for the quiz
const questions = [
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "None of the above"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      choices: [
        "var colors = 'red', 'green', 'blue';",
        "var colors = ['red', 'green', 'blue'];",
        "var colors = (1:'red', 2:'green', 3:'blue');",
        "var colors = 1=('red'), 2=('green'), 3=('blue');"
      ],
      answer: "var colors = ['red', 'green', 'blue'];"
    },
    {
      question: "What is the correct way to write a function in JavaScript?",
      choices: [
        "function = myFunction()",
        "function myFunction()",
        "function:myFunction()",
        "function-myFunction()"
      ],
      answer: "function myFunction()"
    },
    // Add more questions here...
  ];
  
  const quizContainer = document.querySelector("#quiz-container");
  const startButton = document.querySelector("#start-button");
  const submitButton = document.querySelector("#submit-button");
  const initialsInput = document.querySelector("#initials-input");
  const timerElement = document.querySelector("#timer");
  const scoreElement = document.querySelector("#score");
  
  let currentQuestionIndex = 0;
  let timeLeft = 60; // Initial time in seconds
  let timerId;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button
    startButton.style.display = "none";
    // Display the quiz container
    quizContainer.style.display = "block";
    // Start the timer
    startTimer();
    // Display the first question
    showQuestion();
  }
  
  // Function to show a question
  function showQuestion() {
    const questionElement = document.querySelector("#question");
    const choicesElement = document.querySelector("#choices");
    const currentQuestion = questions[currentQuestionIndex];
    // Display the question
    questionElement.textContent = currentQuestion.question;
    // Clear any previous choices
    choicesElement.innerHTML = "";
    // Display the choices
    currentQuestion.choices.forEach(choice => {
      const choiceElement = document.createElement("button");
      choiceElement.textContent = choice;
      choiceElement.addEventListener("click", () => {
        // Check if the answer is correct
        if (choice === currentQuestion.answer) {
          // Increment the score
          scoreElement.textContent++;
        } else {
          // Decrement the time
          timeLeft -= 10; // Subtract 10 seconds for incorrect answer
          if (timeLeft < 0) {
            timeLeft = 0;
          }
        }
        // Move to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          // Quiz is over
          gameOver();
        }
      });
      choicesElement.appendChild(choiceElement);
    });
}  
  
  // Function to start the timer
  function startTimer() {
    // Display the initial time
    timerElement.textContent = timeLeft;
    // Start the timer interval
    timerId = setInterval(() => {
      // Decrement the time
      timeLeft--;
      // Update the timer display
      timerElement.textContent = timeLeft;
    });
      // Check if time is up
      if (timeLeft <= 0) {
        // Stop the timer
        clearInterval(timerId);
       }
};
  