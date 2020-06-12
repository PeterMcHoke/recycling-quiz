const STORE = [
  {
    question: "How do I know if something is recyclable?",
    answers: [
      'All plastics and papers may be recycled',
     'Submerge it in hot water to see if it changes color',
     'Items that have the symbols ♻️1-♻️7', 'If you can bite through it, it is recyclable'],
    correctAnswer: 'Items that have the symbols ♻️1-♻️7'
  },
  {
    question: "What do I do after I know something is recyclable?",
    answers: ['Place it in the recycling bin as is', 'Toss it in the garbage anyway','Rinse cans and bottles, break down paper and cardboard', 'Start a pile outside your neighbor’s front door'],
    correctAnswer: 'Rinse cans and bottles, break down paper and cardboard'
  },
  {
    question: "What does one-sort recycling mean?",
    answers: ['You can only put one type of recycling in this bin (only ♻️1, for example)', 'Only one person is allowed to sort this type of recycling','One-sort recycling does not exist', 'You can put all recycling (♻️1-♻️7) in this bin, it will be sorted later'],
    correctAnswer: 'You can put all recycling (♻️1-♻️7) in this bin, it will be sorted later'
  },
  {
    question: "Which is the cheapest method of waste disposal?",
    answers: ['Landfill', 'Incineration','Recycling', 'Flush it. Flush everything.'],
    correctAnswer: 'Recycling'
  },
  {
    question: "What is the best way to dispose of food waste?",
    answers: ['Scatter it in various areas of your home and wait for the ants to take over.', 'Compost it! Start your own if you have space or find out what composting resources your municipality provides','Blend it all into a smoothie for quick, easy meal prep.', 'Fill a bucket and blast it apart with a firework.'],
    correctAnswer: 'Compost it! Start your own if you have space or find out what composting resources your municipality provides'
  }
];

//We want to store the progress of the quiz
let questionNumber = 0;
let score = 0;


function udpateQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
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

//NEW FEATURE
//<p>${STORE[questionNumber].extraInfo}</p>
//provide relevant info based on the question phone# etc.
function correctAnswer() {
  console.log('Opening correctAnswer()');
  $('.responseBin').html(
      `<h3>Correct!</h3>
      <img src="https://www.coolpun.com/images/coolpun/83/83f152ad304aefccc9504325901f507d.jpeg" alt="recycling pun 1" class="images">
      <p class="responseLine">You are a recycling whiz!</p>
      <button type="button" class="nextButton button">Next</button>
      `
  );
  updateScore();
};

function wrongAnswer() {
  $('.responseBin').html(
      `<h3>That's the wrong answer...</h3>
      <img src="images/red-trash.png" alt="red trash can" class="images">
      <p><strong>It's actually:</strong></p>
      <p><em>${STORE[questionNumber].correctAnswer}</em></p>
      <button type="button" class="nextButton button">Next</button>`
    );
};

function nextQuestion() {
  $('.recyclingBin').on('click','.nextButton', e => {
    $('.hideInitial').hide();
    $('.questionBin').show();
    udpateQuestionNumber();
    $('.questionBin > form').replaceWith(generateQuestion());
  });
};


function showFinal() {
  $('.finalBin').show();

  const great = [
    'Great job!',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmemecrunch.com%2Fmeme%2F1NJY%2Frecycling-makes-me-feel%2Fimage.png&f=1&nofb=1',
    'baby pumped about recycling',
    'You sure know your stuff when it comes to recycling!'
  ];

  const good = [
    'Good, not great.',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F8a%2F3f%2Fe8%2F8a3fe88ce369c46593ddcbf80b2570ce--really-funny-pictures-funniest-pictures.jpg&f=1&nofb=1',
    'baby looking confused about not recycling',
    'You should do just a bit more research on recycling...'
  ];

  const bad = [
    'Have you ever even heard of recycling?',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F51%2Fd5%2F64%2F51d564c7e9461b7919ce0e7e58d5ab31.jpg&f=1&nofb=1',
    'recycling meme three',
    'Or do you just hate online quizzes?'
  ];

  if (score >= 4) {
    array = great;
  } else if (score < 4 && score >= 3) {
    array = good;
  } else {
    array = bad;
  }
  return $('.finalBin').html(
    `<h3>${array[0]}</h3>
      <img src="${array[1]}" alt="${array[2]}" class="images">
        <h3>Your score is ${score} / 10</h3>
        <p class="sizeMe">${array[3]}</p>
        <button type="submit" class="restartButton button">Restart</button>`
  );
}

function createQuestionForm(questionIndex){
  let formData = $(`<form>
    <fieldset>
      <legend class="questionText">${STORE[questionIndex].question}</legend>
    </fieldset>
    </form>`);
  const fieldsetSelector = $(formData).find('fieldset');
  STORE[questionIndex].answers.forEach(function(answerValue,answerIndex) {
    $(`<label for="${answerIndex}">
          <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
          <span>${answerValue}</span>
        </label>`).appendTo(fieldsetSelector);
  });
  $("<button type='submit' class='button submit-button'>Submit</button>").appendTo(fieldsetSelector);
  return formData;;
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

function submitAnswer() {
  $('.recyclingBin').on('submit', e => {
    e.preventDefault();
    $('.hideInitial').hide();
    $('.responseBin').show();
    const selectedAnswer = $('input:checked').val();
    console.log(selectedAnswer);
    let correct = STORE[questionNumber].correctAnswer;
    console.log(correct);
    if (selectedAnswer === correct){
      console.log("This is the correctAnswer");
      correctAnswer();
    }
    else {
      wrongAnswer();
    }
  });
}

function restartQuiz() {
  $('.recyclingBin').on('click','.restartButton', e => {
      e.preventDefault();
      resetStats();
      $('.hideInitial').hide();
      $('.startBin').show();
  });
};


function quizFun(){
  startQuiz();
  generateQuestion();
  submitAnswer();
  nextQuestion();
  restartQuiz();
}

$(quizFun);
