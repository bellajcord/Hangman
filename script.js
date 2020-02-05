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

}