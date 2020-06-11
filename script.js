const STORE = [
  {
    question: "Question 1 text",
    answers: ['Answer 1', 'Answer 2','Answer 3', 'Answer 4'],
    correctAnswer: 'Answer 1'
  },
  {
    question: "Question 3 text",
    answers: ['Answer 1', 'Answer 2','Answer 3', 'Answer 4'],
    correctAnswer: 'Answer 2'
  },
  {
    question: "Question 1 text",
    answers: ['Answer 1', 'Answer 2','Answer 3', 'Answer 4'],
    correctAnswer: 'Answer 3'
  },
  {
    question: "Question 4 text",
    answers: ['Answer 1', 'Answer 2','Answer 3', 'Answer 4'],
    correctAnswer: 'Answer 4'
  }
];

//We want to store the progress of the quiz
let questionNumber = 0;
let score = 0;


function udpateQuestionNumber() {
  $('.questionNumber').text(++questionNumber);
}
function updateScore(){
  $('.quizScore').text(++score);
};

function resetStats() {
  questionNumber = 0;
  score = 0;
  $('.questionNumber').text(0);
  $('.quizScore').text(0);
};

function createQuestionForm(questionIndex){
  let formData = $(`<form>
    <fieldset>
      <legend class="questionText">${STORE[questionIndex].question}</legend>
    </fieldset>
    </form>`);
  const fieldsetSelector = $('.questionBin > form').find('fieldset');
  const formInputs = STORE[questionIndex].answers.forEach(function(answerValue,answerIndex) {
    $(`<input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
        <label for="${answerIndex}">
          <span>${answerValue}</span>
        </label>`).appendTo(fieldsetSelector);
  });
  $("<button type='submit' class='button submit-button'>Submit</button>").appendTo(fieldsetSelector);
  return formInputs;
};

function generateQuestion(){
  if (questionNumber < STORE.length) {
    return createQuestionForm(questionNumber);
  }
  else {
    $('.questionBin').hide();
    showFinal();
    $('.questionNumber').text(STORE.length);
  }
};

function startQuiz() {
  $('.hideInitial').hide();
  $('.startBin').on('click','.startButton', e => {
    $('.startBin').hide();
    $('.questionNumber').text(1);
    $('.questionBin').show();
    $('.progressGroup').show();
    $('.questionBin').append(generateQuestion());
  });
};

// showFinal() {
//   //show the final div
//   //show the final score with a tailored response based on the score of the quiz
//   //show the restart button that will prompt the quiz to be restarted
// };

$(startQuiz);
