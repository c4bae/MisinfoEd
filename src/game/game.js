const UI = {
  body: document.querySelector("body"),

  beginOverlay: document.querySelector(".begin-overlay"),
  beginGameBtn: document.querySelector(".begin-btn"),

  callPopup: document.querySelector("#callPopup"),
  introPopup: document.querySelector(".welcomePopup"),

  gamePuzzleFrame: document.querySelector(".puzzleWindow"),
  gamePuzzleText: document.querySelector(".puzzleText"),
  inputElement: document.querySelector(".puzzleInput"),
  gameContinueBtn: document.querySelector(".puzzleContinueBtn"),
  gameSubmitBtn: document.querySelector(".puzzleSubmitBtn"),

  l2HelpVideo: document.querySelector(".video"),

  finalBtnContainer: document.querySelector(".finalBtnContainer"),
  finalTrueButton: document.querySelector(".trueButton"),
  finalFalseButton: document.querySelector(".falseButton"),
}

const puzzleData = [
  {
    id: "l1",
    instructions: "<b>Hey again,</b> <br> <br> Let's start with the authors. We were most suspicious on that and I'd like you to investigate them. First, find his contact email.",
    placeholder: "Enter email address...",
    correctAnswer: "bctimes@bctimes.com",
    correctComment: "<b>Nice catch!</b> <br> <br> Notice how this email is not personally the authors, but the whole organizations. Remember that reputable news sites usually have personal email addresses for each author. This gives us a good reason to be suspicious so far.",
    incorrectComment: "Incorrect. Keep looking around the article!",
  },
  {
    id: "l2",
    instructions: "Now, lets conduct a <b> reverse image search </b> on the authors profile picture. Go to <i>https://images.google.ca</i>, and drag the image into the search bar. Whats the link of the most popular website result? For more help view video on the left!",
    placeholder: "Enter web link...",
    correctAnswer: "https://www.istockphoto.com/photo/breaking-news-gm1147538000-309584440",
    correctComment: "<b>Who could have guessed! Its a stock image.</b> <br> Stock photos are generic photos, not depicting real people, that are used for various reasons. Remember, reverse image searching can be very useful and has clearly told us that so far, something is very off about this.",
    incorrectComment: "Incorrect. The author's profile is located on the left side of the website!",
  },
  {
    id: "l3",
    instructions: "<b>Lets start to wrap up on the author. </b> I heard of some inconsistency between the article date and the authors join date. By how many months are the dates different? If we made a mistake and there is no disparity, just tell us the word: none.",
    placeholder: "Enter the difference...",
    correctAnswer: "5",
    correctComment: "<b>The author wrote the article before joining?</b> <br> That is fairly funny. Such a simple mistake but it tells us a lot. Remember to look closely for any mistakes as it can really tell a <b> lot </b> about the accuracy of the website. Now lets move on to the article itself for further clues.",
    incorrectComment: "Not quite! Heres a helpful tip: read carefully throught the description provided on the author.",
  },
  {
    id: "l4",
    instructions: "Sources have told us that there are something is wrong with the <b>headline</b> compared to other articles. Lets do some <b> lateral reading </b>, which is where you evaluate the credibility of a source by comparing it to other websites. Search up something like the headline of this article. What word or number is incorrect?",
    placeholder: "Enter the number...",
    correctAnswer: "110",
    correctComment: "Perfect! Seems like it! What you just did was <b>laterally read</b>. This is a very efficient tool for recognizing fake-news and disinformation used by many of us. If things such as headlines, info, and more are not consistent, one party must have some sort of false information.",
    incorrectComment: "Thats not quite it! Heres a hint: it relates to a number. Enter in billions and without the $ sign.",
  },
  {
    id: "l5",
    instructions: "Now whats the actual amount of money thats supposed to be in the headline? If you cant remember you can always go back to searching again.",
    placeholder: "Enter the money here...",
    correctAnswer: "44",
    correctComment: "Nice! Another mistake is abnormal and at this point we could really call this news fake and a source of disinformation. But lets delve deeper into this website before we can really confirm it. Remember <b> lateral reading </b> - its gonna help you a lot in the future.",
    incorrectComment: "A little off! Remember to go search in a new tab again if you forgot. Enter in billions and without the $ sign.",
  },
  {
    id: "l6",
    instructions: "Lets look for more inconsistencies throughout the article. Sources have told me it may have something to do with money. Look through the paragraphs and see if there are any other numbers that arent $44 billion. You have already found out the actual amount of money, now get to it! Enter the other wrong amount thats located in the article.",
    placeholder: "Enter the money here...",
    correctAnswer: "120",
    correctComment: "Who could have guessed, another mistake! This website is really just not polished. Looking out for mistakes like these are great and always reliable. Lets look into a few more before we move on from the content of the website.",
    incorrectComment: "Heres some help, its located in the first paragraph of the article. Remember that you are supposed to enter the wrong amount of money! Enter in billions and without the $ sign.",
  },
  {
    id: "l7",
    instructions: "Just a couple more to go! This time we got news about a <b> whole paragraph (or two!) </b> not matching with the vast majority of other articles. You know what to do, find what number paragraph(s), 1, 2, or 3, matches this description! If there are multiple, separate the numbers with: <mark>and</mark>.",
    placeholder: "Enter the paragraph number(s) here...",
    correctAnswer: "1 and 2 and 3",
    correctComment: "This seemed really fake anyway. When looking into the last paragraph, you may have noticed that <b>fact-checking websites</b> pop up. This will be the case for viral news. If you arent sure whether a viral post is real or not, its a good idea to check these websites.",
    incorrectComment: "Not quite it. Remember there may be more than one inconsistent paragraph! If there is, seperate your answer with the word and. For example 5 and 7, 9 and 13, etc.",
  },
  { 
    id: "l8",
    instructions: "Lets do some <b> reverse searching </b> again, except with social media like this one. Try searching up what the tweet says along with the words <i> Elon Musk tweet </i> on Google. If nothing comes up or any directly articles, its likely fake and made up. Enter whether its fake or real.",
    placeholder: "Enter here...",
    correctAnswer: "fake",
    correctComment: "Youve done it again! This is another form of <b> reverse searching </b> that can help you a lot in investigating disinformation. With how prevalent social media is nowadays, you can find nearly anything anybody says on the internet.",
    incorrectComment: "Have you found any tweets? If not, its probably fake. Also there should not be any capitals in the word real or fake!",
  },
  {
    id: "l9",
    instructions: "<b>Now thats all from me!</b> Lets wrap up. You can continue to investigate this website and find more fake information located in this article. Otherwise, its time for you to give your final conclusion on whether or not this article is fake or not. When you are ready, enter <b>ready</b>!",
    placeholder: "Enter here...",
    correctAnswer: "ready",
    correctComment: "On the next page you will be presented with two options - <b> Real </b> or <b> Fake</b>. Choose the one you best believe. It has been great working with you rookie and I proudly welcome you to the team!",
    incorrectComment: "The word is ready with all lowercase letters.",
  }
]

const gameAudio = {
  phoneRinging: new Audio("../game/assets/audio/callingSFX.mp3"),
  phonePickup: new Audio("../game/assets/audio/pickupSFX.mp3"),
}

/////

function beginGame() {
  UI.beginOverlay.style.display = "none";
  UI.beginGameBtn.style.display = "none";

  setTimeout(() => {
    gameAudio.phoneRinging.loop = true;
    gameAudio.phoneRinging.play();
  }, 1000);

  setTimeout(() => {
    UI.callPopup.classList.toggle("active");

    UI.body.classList.add("blur");
  }, 4000);
}

function toggleCall() {
  gameAudio.phoneRinging.pause();
  gameAudio.phonePickup.play();

  var callPopup = document.getElementById("callPopup");
  callPopup.classList.remove("active");

  setTimeout(() => {
    gameAudio.phonePickup.pause();
    
    UI.introPopup.classList.add("open-popup");  //opens the welcome info popup
  }, 1000);
}

function closePopup() {
  UI.introPopup.classList.remove("open-popup");
  UI.body.classList.remove("blur");

  initializeGame();

  setTimeout(() => {
    UI.gamePuzzleFrame.classList.add("puzzleopen-popup");
    initializeGame();
  }, 1000);
}

/////
let puzzleViewObjs = [];
let puzzleCheckObjs = [];

class PuzzleView {
  constructor(id, puzzleInstructions, inputPlaceholder, currentLevel) {
    this.id = id;
    this.puzzleInstructions = puzzleInstructions;
    this.inputPlaceholder = inputPlaceholder;
    this.currentLevel = currentLevel;
  }

  begin() {
    //submits answer, passes it on to "submitPuzzle" object
    UI.gameContinueBtn.style.display = "none";
    UI.gameSubmitBtn.style.display = "block";
    UI.inputElement.style.display = "block";

    if(this.id != "l1") {
      UI.gameSubmitBtn.style.opacity = 0;
      UI.gameContinueBtn.style.opacity = 0;
      UI.inputElement.style.opacity = 0;

      UI.gameSubmitBtn.classList.add("fadeIn");
      UI.inputElement.classList.add("fadeIn");
      UI.gamePuzzleText.classList.add("fadeOutandIn");
    }

    if(this.id == "l2") {
      UI.l2HelpVideo.style.display = "block";
    }
    else {
      UI.l2HelpVideo.style.display = "none";
    }
    
    UI.inputElement.value = "";
    UI.inputElement.placeholder = this.inputPlaceholder;

    setTimeout(() => {
      UI.gamePuzzleText.innerHTML = this.puzzleInstructions;
      UI.gamePuzzleText.classList.remove("fadeOutandIn");

      UI.gameSubmitBtn.onclick = () => {puzzleCheckObjs[this.currentLevel].check(UI.inputElement.value);}
      //need () => or else the function will be immediately called, in this case the check().
    }, 500);
  }
}

class PuzzleChecker {
  constructor(correctComment, incorrectComment, currentLevel) {
    this.correctComment = correctComment;
    this.incorrectComment = incorrectComment;
    this.currentLevel = currentLevel;
  }

  check(answer) {
    //checks answers, then moves on to the next "Puzzle" object
    if(answer.toLowerCase() === puzzleData[this.currentLevel].correctAnswer) {
      UI.gameContinueBtn.style.display = "block";
      UI.gameSubmitBtn.style.display = "none";
      UI.inputElement.style.display = "none";

      UI.gameSubmitBtn.style.opacity = 0;
      UI.inputElement.style.opacity = 0;
      //must include opacity because of "fadeIn" animations

      UI.gameSubmitBtn.classList.remove("fadeIn");
      UI.inputElement.classList.remove("fadeIn");
      UI.gameContinueBtn.classList.add("fadeIn");

      UI.gamePuzzleText.classList.add("fadeOutandIn");

      setTimeout(() => {
        UI.gamePuzzleText.innerHTML = this.correctComment;
        UI.gamePuzzleText.classList.remove("fadeOutandIn");

        if(this.currentLevel != 8) {
          //check for if last level
          UI.gameContinueBtn.onclick = () => {puzzleViewObjs[this.currentLevel + 1].begin();}
        }
        else {
          UI.gameContinueBtn.onclick = () => {finishGame()};
        }
      }, 500);
    }

    else {
      alert(this.incorrectComment);
    }
  }
}

/////

function initializeGame() {
  //map() returns a new array, while forEach() doesn't. hence map() is used here
  puzzleViewObjs = puzzleData.map((level, index) => {
    return new PuzzleView(level.id, level.instructions, level.placeholder, index);
    //when curly brackets follow arrows, must use "return"
  })

  puzzleCheckObjs = puzzleData.map((level, index) => {
    return new PuzzleChecker(level.correctComment, level.incorrectComment, index);
  })

  puzzleViewObjs[0].begin();
  //triggers the game
}

function finishGame() {
  setTimeout(() => {
    UI.body.classList.add("blur");
    UI.gamePuzzleFrame.style.display = "none";
  }, 1000);

  setTimeout(() => {
    UI.finalBtnContainer.classList.add("fadein-class");
    UI.finalBtnContainer.style.display = "flex";

    UI.finalTrueButton.style.display = "block";
    UI.finalFalseButton.style.display = "block";
    UI.finalTrueButton.disabled = false;
    UI.finalFalseButton.disabled = false;
  }, 1500);
}
