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

var selectCat = () {
    if (chosenCategories === categories[0]) {
        categoryName.innerHTML = "Test your Spell Knowledge";
    } else if (chosenCategories === categories[1]) {
        categoryName.innerHTML = "Do you know your characters?";
    } else if (chosenCategories === categories[2]) {
        categoryName.innerHTML = "Magical Beasts!";
    }
}
// create and display remaining lives functinon using if and for loop
comments = function() {
    showLives.innerHTML = "Only" + lives + "left";
    if (lives < 1) {
        showLives.innerHTML = "You killed him. You're no wizard";
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            showLives.innerHTML = "Congratulations! You might be a wizard after all!";
        }
    }
}

}