window.onload = function () {

  //create variables

  var categories;
  var guess;
  var guesses = [];
  var chosenCategories;
  var lives;
  var counter;
  var space;  
  var getHint;
  var word;

  //retrieve elements from HTML
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

  //create categories and selection function

var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Test your Spell Knowledge";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Do you know your characters?";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Magical Beasts!";
    }
  }
// create and display remaining lives functinon using if and for loop
comments = function() {
    showLives.innerHTML = "Only" + lives + "left";
    if (lives < 1) {
        showLives.innerHTML = "You killed him. You're no wizard.";
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            showLives.innerHTML = "Congratulations! You might be a wizard after all!";
        }
    }
}
// guessing function
result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
}