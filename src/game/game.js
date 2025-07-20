const audio = new Audio('callingSFX.mp3');
const audio2 = new Audio('pickupSFX.mp3');

let popup = document.querySelector('.welcomePopup');
  console.log(popup);
  let onePopupOpened = false;

  function openPopup() {
      if(!onePopupOpened){
      popup.classList.add("open-popup");
      onePopupOpened = true;
      }
  }

  function closePopup() {
      popup.classList.remove("open-popup");
      onePopupOpened = false;
      var body = document.querySelector("body");
      body.classList.remove("blur");

      setTimeout(() => {
        let puzzlePopup = document.querySelector('.puzzlePopup1');
        puzzlePopup.classList.add("puzzleopen-popup");
        }, 1000);
  }

window.onload = function() {
  setTimeout(() => {
    audio.loop = true;
    audio.play(); 
  
    audio.onerror = function() {
    console.error('Error loading audio file');
    }
    
    audio.oncanplay = function() {
    console.log('Audio is ready to play');
    audio.play();
    }
  }, 1000);
  
  setTimeout(() => {
  var popup = document.getElementById('callPopup');
  popup.classList.toggle('active')

  var body = document.querySelector("body");
  body.classList.add("blur");
    
  }, 4000);
};

function toggleCall() {
  console.log("yes");
  audio.pause();
  audio2.play();
  var callPopup = document.getElementById('callPopup');
  callPopup.classList.remove('active');

  setTimeout(() => {
      audio2.pause();
      openPopup();
  }, 1000);
}

function submitPuzzle1() {
    console.log("submitted");
    const answer = document.querySelector('.puzzle1Input').value;
    console.log(answer);
    if(answer == "BCTimes@bctimes.com") {
      const header = document.querySelector('.puzzle1H');
      const input = document.querySelector('.puzzle1Input');
      const submitbutton = document.querySelector('.puzzle1Button');
      const continuebutton = document.querySelector('.puzzle1Finish');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      continuebutton.classList.add('fadein-class');
      continuebutton.disabled = false;
      submitbutton.disabled = true;
      header.classList.add('fadeoutandin-class');
      setTimeout(() => {
      header.innerHTML = '<b>Nice catch!</b> <br> <br> Notice how this email is not personally the authors, but the whole organizations. Remember that reputable news sites usually have personal email addresses for each author. This gives us a good reason to be suspicious so far.';
      header.classList.remove('fadeoutandin-class');
      }, 500);
    }
    else {
      alert("Incorrect. Keep looking around the article!");
    }
}

function puzzle2() {
  const header = document.querySelector('.puzzle1H');
  const input = document.querySelector('.puzzle1Input');
  const submitbutton = document.querySelector('.puzzle1Button');
  const continuebutton = document.querySelector('.puzzle1Finish');
  const video = document.querySelector('.video');
  header.classList.add('fadeoutandin-class');
  continuebutton.classList.remove("fadein-class");
  continuebutton.disabled = true;
  continuebutton.style.opacity = 0;
  submitbutton.style.opacity = 0;
  input.style.opacity = 0;

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  video.classList.add("fadein-class");
  
  submitbutton.style.top = '23%';
  input.style.top = '20%';
  input.value = '';
  input.placeholder = 'Enter web link...';
  setTimeout(() => {
      header.innerHTML = 'Now, lets conduct a <b> reverse image search </b> on the authors profile picture. Go to <i>https://images.google.ca</i>, and drag the image into the search bar. Whats the link of the most popular website result? For more help view video on the left! <b>(Reload if video fails to load)</b>';

      submitbutton.onclick = submitPuzzle2;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle2() {
  console.log("puzzle 2");
  const answer = document.querySelector('.puzzle1Input').value;
  if(answer == "https://www.istockphoto.com/photo/breaking-news-gm1147538000-309584440") {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');
    const video = document.querySelector('.video');

    video.classList.remove("fadein-class");
    video.style.opacity = 0;

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = '<b>Who could have guessed! Its a stock image.</b> <br> Stock photos are generic photos, not depicting real people, that are used for various reasons. Remember, reverse image searching can be very useful and has clearly told us that so far, something is very off about this.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle3;
    }, 500);
  }
    
  else {
    alert("Incorrect. The author's profile is located on the left side of the website!");
  }
}

function puzzle3() {
  const header = document.querySelector('.puzzle1H');
  const input = document.querySelector('.puzzle1Input');
  const submitbutton = document.querySelector('.puzzle1Button');
  const continuebutton = document.querySelector('.puzzle1Finish');
  header.classList.add('fadeoutandin-class');
  continuebutton.classList.remove("fadein-class");
  continuebutton.disabled = true;
  continuebutton.style.opacity = 0;
  submitbutton.style.opacity = 0;
  input.style.opacity = 0;

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '23%';
  input.style.top = '20%';
  input.value = '';
  input.placeholder = 'Enter the difference...';
  setTimeout(() => {
      header.innerHTML = '<b>Lets start to wrap up on the author. </b> I heard of some inconsistency between the article date and the authors join date. By how many months are the dates different? If we made a mistake and there is no disparity, just tell us the word: none.';

      submitbutton.onclick = submitPuzzle3;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle3() {
  console.log("puzzle 3");
  const answer = document.querySelector('.puzzle1Input').value;
  if((answer == "4") || (answer == "5") || (answer == "6")) {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = '<b>The author wrote the article before joining?</b> <br> That is fairly funny. Such a simple mistake but it tells us a lot. Remember to look closely for any mistakes as it can really tell a <b> lot </b> about the accuracy of the website. Now lets move on to the article itself for further clues.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle4;
    }, 500);
  }
    
  else {
    alert("Not quite! Heres a helpful tip: read carefully throught the description provided on the author.");
  }
}

function puzzle4() {
  const header = document.querySelector('.puzzle1H');
  const input = document.querySelector('.puzzle1Input');
  const submitbutton = document.querySelector('.puzzle1Button');
  const continuebutton = document.querySelector('.puzzle1Finish');
  header.classList.add('fadeoutandin-class');
  continuebutton.classList.remove("fadein-class");
  continuebutton.disabled = true;
  continuebutton.style.opacity = 0;
  submitbutton.style.opacity = 0;
  input.style.opacity = 0;

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '23%';
  input.style.top = '20%';
  input.value = '';
  input.placeholder = 'Enter here...';
  setTimeout(() => {
      header.innerHTML = 'Sources have told us that there are something is wrong with the <b>headline</b> compared to other articles. Lets do some <b> lateral reading </b>, which is where you evaluate the credibility of a source by comparing it to other websites. Search up something like the headline of this article. What word or number is incorrect?';

      submitbutton.onclick = submitPuzzle4;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle4() {
  console.log("puzzle 4");
  const answer = document.querySelector('.puzzle1Input').value;
  if(answer == "110") {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = 'Perfect! Seems like it! What you just did was <b>laterally read</b>. This is a very efficient tool for recognizing fake-news and disinformation used by many of us. If things such as headlines, info, and more are not consistent, one party must have some sort of false information.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle5;
    }, 500);
  }
    
  else {
    alert("Thats not quite it! Heres a hint: it relates to a number. Enter in billions and without the $ sign.");
  }
}

function puzzle5() {
  const header = document.querySelector('.puzzle1H');
  const input = document.querySelector('.puzzle1Input');
  const submitbutton = document.querySelector('.puzzle1Button');
  const continuebutton = document.querySelector('.puzzle1Finish');
  header.classList.add('fadeoutandin-class');
  continuebutton.classList.remove("fadein-class");
  continuebutton.disabled = true;
  continuebutton.style.opacity = 0;
  submitbutton.style.opacity = 0;
  input.style.opacity = 0;

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '23%';
  input.style.top = '20%';
  input.value = '';
  input.placeholder = 'Enter money here...';
  setTimeout(() => {
      header.innerHTML = 'Now whats the actual amount of money thats supposed to be in the headline? If you cant remember you can always go back to searching again.';

      submitbutton.onclick = submitPuzzle5;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle5() {
  console.log("puzzle 5");
  const answer = document.querySelector('.puzzle1Input').value;
  if(answer == "44") {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = 'Nice! Another mistake is abnormal and at this point we could really call this news fake and a source of disinformation. But lets delve deeper into this website before we can really confirm it. Remember <b> lateral reading </b> - its gonna help you a lot in the future.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle6;
    }, 500);
  }
    
  else {
    alert("A little off! Remember to go search in a new tab again if you forgot. Enter in billions and without the $ sign.");
  }
}

function puzzle6() {
  const header = document.querySelector('.puzzle1H');
  const input = document.querySelector('.puzzle1Input');
  const submitbutton = document.querySelector('.puzzle1Button');
  const continuebutton = document.querySelector('.puzzle1Finish');
  header.classList.add('fadeoutandin-class');
  continuebutton.classList.remove("fadein-class");
  continuebutton.disabled = true;
  continuebutton.style.opacity = 0;
  submitbutton.style.opacity = 0;
  input.style.opacity = 0;

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '23%';
  input.style.top = '20%';
  input.value = '';
  input.placeholder = 'Enter money here...';
  setTimeout(() => {
      header.innerHTML = 'Lets look for more inconsistencies throughout the article. Sources have told me it may have something to do with money. Look through the paragraphs and see if there are any other numbers that arent $44 billion. You have already found out the actual amount of money, now get to it! Enter the other wrong amount thats located in the article.';

      submitbutton.onclick = submitPuzzle6;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle6() {
  console.log("puzzle 6");
  const answer = document.querySelector('.puzzle1Input').value;
  if(answer == "120") {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = 'Who could have guessed, another mistake! This website is really just not polished. Looking out for mistakes like these are great and always reliable. Lets look into a few more before we move on from the content of the website.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle7;
    }, 500);
  }
    
  else {
    alert("Heres some help, its located in the first paragraph of the article. Remember that you are supposed to enter the wrong amount of money! Enter in billions and without the $ sign.");
  }
}

function puzzle7() {
  const header = document.querySelector('.puzzle1H');
  const input = document.querySelector('.puzzle1Input');
  const submitbutton = document.querySelector('.puzzle1Button');
  const continuebutton = document.querySelector('.puzzle1Finish');
  header.classList.add('fadeoutandin-class');
  continuebutton.classList.remove("fadein-class");
  continuebutton.disabled = true;
  continuebutton.style.opacity = 0;
  submitbutton.style.opacity = 0;
  input.style.opacity = 0;

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '23%';
  input.style.top = '20%';
  input.value = '';
  input.placeholder = 'Enter # here...';
  setTimeout(() => {
      header.innerHTML = 'Just a couple more to go! This time we got news about a <b> whole paragraph (or two!) </b> not matching with the vast majority of other articles. You know what to do, find what number paragraph(s), 1, 2, or 3, matches this description! If theres two, seperate the numbers in your answer with: <mark>and</mark>.';

      submitbutton.onclick = submitPuzzle7;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle7() {
  console.log("puzzle 7");
  const answer = document.querySelector('.puzzle1Input').value;
  if((answer == "2 and 3") || (answer == "2, 3")) {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = 'This seemed really fake anyway. When looking into the last paragraph, you may have noticed that <b>fact-checking websites</b> pop up. This will be the case for viral news. If you arent sure whether a viral post is real or not, its a good idea to check these websites.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle8;
    }, 500);
  }
    
  else {
    alert("Not quite it. Remember there may be more than one inconsistent paragraph! If there is, seperate your answer with the word and. For example 5 and 7, 9 and 13, etc.");
  }
}

function puzzle8() {
  const header = document.querySelector('.puzzle1H');
  const input = document.querySelector('.puzzle1Input');
  const submitbutton = document.querySelector('.puzzle1Button');
  const continuebutton = document.querySelector('.puzzle1Finish');
  header.classList.add('fadeoutandin-class');
  continuebutton.classList.remove("fadein-class");
  continuebutton.disabled = true;
  continuebutton.style.opacity = 0;
  submitbutton.style.opacity = 0;
  input.style.opacity = 0;

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '23%';
  input.style.top = '20%';
  input.value = '';
  input.placeholder = 'Enter here...';
  setTimeout(() => {
      header.innerHTML = 'Lets do some <b> reverse searching </b> again, except with social media like this one. Try searching up what the tweet says along with the words <i> Elon Musk tweet </i> on Google. If nothing comes up or any directly articles, its likely fake and made up. Enter whether its fake or real.';

      submitbutton.onclick = submitPuzzle8;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle8() {
  console.log("puzzle 8");
  const answer = document.querySelector('.puzzle1Input').value;
  if(answer == "fake") {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = 'Youve done it again! This is another form of <b> reverse searching </b> that can help you a lot in investigating disinformation. With how prevalent social media is nowadays, you can find nearly anything anybody says on the internet.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle9;
    }, 500);
  }
    
  else {
    alert("Have you found any tweets? If not, its probably fake. Also there should not be any capitals in the word real or fake!");
  }
}

function puzzle9() {
  const header = document.querySelector('.puzzle1H');
  const input = document.querySelector('.puzzle1Input');
  const submitbutton = document.querySelector('.puzzle1Button');
  const continuebutton = document.querySelector('.puzzle1Finish');
  header.classList.add('fadeoutandin-class');
  continuebutton.classList.remove("fadein-class");
  continuebutton.disabled = true;
  continuebutton.style.opacity = 0;
  submitbutton.style.opacity = 0;
  input.style.opacity = 0;

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '23%';
  input.style.top = '20%';
  input.value = '';
  input.placeholder = 'Enter here...';
  setTimeout(() => {
      header.innerHTML = '<b>Now thats all from me!</b> Lets wrap up. You can continue to investigate this website and find more fake information located in this article. Otherwise, its time for you to give your final conclusion on whether or not this article is fake or not. When you are ready, enter <b>ready</b> with no capitals.';

      submitbutton.onclick = submitPuzzle9;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle9() {
  console.log("puzzle 9");
  const answer = document.querySelector('.puzzle1Input').value;
  if(answer == "ready") {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;

    continuebutton.innerHTML = 'Finish';
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = 'On the next page you will be presented with two options - <b> True </b> or <b> False </b>. Choose the one you best believe. Additionally, you will be given a summary on what youve learned here. Its been great working with you rookie and I proudly welcome you to the team!';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = finish;
    }, 500);
  }
    
  else {
    alert("The word is ready with all lowercase letters.");
  }
}

function finish() {
  setTimeout(() => {
  var body = document.querySelector("body");
  body.classList.add("blur");
  }, 1000);

  setTimeout(() => {
    var trueButtonContainer = document.querySelector(".wrap");
    var falseButtonContainer = document.querySelector(".wrap1");

    var trueButton = document.querySelector('.trueButton');
    var falseButton = document.querySelector('.falseButton');
    
    
    trueButtonContainer.classList.add('fadein-class');
    falseButtonContainer.classList.add('fadein-class');

    trueButton.disabled = false;
    falseButton.disabled = false;
  }, 1500);
}