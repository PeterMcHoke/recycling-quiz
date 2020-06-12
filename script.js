const STORE = [
  {
    question: "How do I know if something is recyclable?",
    answers: [
      'All plastics and papers may be recycled',
     'Submerge it in hot water to see if it changes color',
     'Items that have the symbols ♻️1-♻️7', 'If you can bite through it, it is recyclable'],
    correctAnswer: 'Items that have the symbols ♻️1-♻️7',
    extraInfo: 'FYI, the city of Minneapolis no longer accepts ♻️6 or black plastics. Everything else is still good to recycle!',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F0d%2F75%2F14%2F0d7514fd7f48727df6f0ea94150158dc.jpg&f=1&nofb=1',
    imageAlt: 'Why you no recycle'
  },
  {
    question: "What do I do after I know something is recyclable?",
    answers: ['Place it in the recycling bin as is', 'Rinse cans and bottles, break down paper and cardboard','Toss it in the garbage anyway', 'Start a pile outside your neighbor’s front door'],
    correctAnswer: 'Rinse cans and bottles, break down paper and cardboard',
    extraInfo: "Don't be this guy. Remember to rinse and break down your recycling.",
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F1ncnc7.jpg&f=1&nofb=1',
    imageAlt: 'recycling meme thug life'
  },
  {
    question: "What does one-sort recycling mean?",
    answers: ['You can only put one type of recycling in this bin', 'Only one person is allowed to sort this type of recycling','One-sort recycling does not exist', 'You can put all recycling (♻️1-♻️7) in this bin'],
    correctAnswer: 'You can put all recycling (♻️1-♻️7) in this bin',
    extraInfo: 'Toss all your recycling in single-sort, the rest will be taken care of! <br>Also, please still use reusable bags even though CVS prints manuscripts on their receipts.',
    image: 'https://www.coolpun.com/images/coolpun/83/83f152ad304aefccc9504325901f507d.jpeg',
    imageAlt: 'recycling meme recepit'
  },
  {
    question: "Which is the cheapest method of waste disposal?",
    answers: ['Landfill', 'Incineration','Recycling', 'Flush it. Flush everything.'],
    correctAnswer: 'Recycling',
    extraInfo: "In fact, it costs only <strong>$30</strong> per ton to recycle, whereas it's <strong>$50</strong> for a landfill and up to <strong>$75</strong> to incinerate",
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.quickmeme.com%2Fimg%2F71%2F717be8221b8eaf1aebba4ccf1bf9e071434a5fc21e3fbec765c80fe13b7a9d47.jpg&f=1&nofb=1',
    imageAlt: 'Recycle beer bottles'
  },
  {
    question: "What is the best way to dispose of food waste?",
    answers: ['Scatter it and wait for the ants to take over.', 'Compost it!','Blend it all into a smoothie for quick, easy meal prep.', 'Fill a bucket and blast it apart with a firework.'],
    correctAnswer: 'Compost it!',
    extraInfo: 'Live in an apartment? You can still<a href="https://www.epa.gov/recycle/how-create-and-maintain-indoor-worm-composting-bin" target="_blank"> compost with worms!</a>',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-OZwTCYMEsD4%2FT40gMvLHLXI%2FAAAAAAAAAHA%2Fa1HaDbfOcB8%2Fs1600%2FPhilosoraptor.png&f=1&nofb=1',
    imageAlt: 'composting meme'
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
      `<h2>Correct!</h2>
      <img src="${STORE[questionNumber].image}" alt="${STORE[questionNumber].imageAlt}" class="images shadow">
      <p class="responseLine"><em>${STORE[questionNumber].extraInfo}</em></p>
      <button type="button" class="nextButton button" autofocus>Next</button>
      `
  );
  updateScore();
};

function wrongAnswer() {
  $('.responseBin').html(
      `<h3>That's the wrong answer...</h3>
      <img src="images/red-trash.png" alt="red trash can" class="images trash" width="100px">
      <h4>It's actually:</h4>
      <p><em>${STORE[questionNumber].correctAnswer}</em></p>
      <button type="button" class="nextButton button" autofocus>Next</button>`
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
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.kappit.com%2Fimg%2Fpics%2F201602_2156_fahfa_sm.jpg&f=1&nofb=1',
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
    'Or are quizzes just not your thing?'
  ];

  if (score >= 4) {
    array = great;
  } else if (score < 4 && score >= 3) {
    array = good;
  } else {
    array = bad;
  }
  return $('.finalBin').html(
    `<h2>${array[0]}</h2>
      <img src="${array[1]}" alt="${array[2]}" class="images">
        <h4>Your score is ${score} / 5</h4>
        <p class="sizeMe">${array[3]}</p>
        <button type="submit" class="restartButton button" autofocus>Restart</button>`
  );
}

function createQuestionForm(questionIndex){
  let formData = $(`<form>
    <fieldset>
      <legend class="questionText">${STORE[questionIndex].question}</legend>
    </fieldset>
    </form>`);
  const fieldsetSelector = formData.find('fieldset');
  STORE[questionIndex].answers.forEach(function(answerValue,answerIndex) {
    $(`<label for="${answerIndex}" class="radio">
          <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
          <span>${answerValue}</span>
        </label>`).appendTo(fieldsetSelector);
  });
  $("<button type='submit' class='button submit-button' autofocus>Submit</button>").appendTo(fieldsetSelector);
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
