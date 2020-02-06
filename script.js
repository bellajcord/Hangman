window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
          //create variables
    var categories;         
    var chosenCategory;     
    var getHint ;          
    var word ;              
    var guess ;             
    var geusses = [ ];      
    var lives ;             
    var counter ;           
    var space;              
  
   
    //retrieve elements from HTM
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
  
  
    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
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
  
 //define the hangman to be drawn & link to lives
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
  
    
// retrieve hangman elements stage canvas function    
  canvas = function(){
      
        myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };

//define the drawing of the head function

    head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
    }

    //define path from drawing

    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }
//create the gallow
    frame1 = function() {
        draw (0, 150, 150, 150);
    };

    frame2 = function() {
        draw (10, 0, 10, 600);
    };

    frame3 = function() {
        draw (0, 5, 70, 5);
    };

    frame4 = function() {
        draw (60, 5, 60, 15);
    };

    // code to draw each component of the hangman
    torso = function() {
        draw (60, 36, 60, 70);
    };

    rightArm = function() {
        draw (60, 46, 100, 50);
    };

    leftArm = function() {
        draw (60, 46, 20, 50);
    };

    rightLeg = function() {
        draw (60, 70, 100, 100);
    };

    leftLeg = function() {
        draw (60, 70, 20, 100);
    };

    drawArray =[rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

//guessing count function linked to lives
    check = function () {
        list.onclick = function () {
          var geuss = (this.innerHTML);
          this.setAttribute("class", "active");
          this.onclick = null;
          for (var i = 0; i < word.length; i++) {
            if (word[i] === geuss) {
              geusses[i].innerHTML = geuss;
              counter += 1;
            } 
          }
          var j = (word.indexOf(geuss));
          if (j === -1) {
            lives -= 1;
            comments();
            animate();
          } else {
            comments();
          }
        }
      }
      
    //set category words

      play = function() {
          categories = [
              ["rictusempra", "morsmordre", "sectumsempra", "crucio"],
              ["severus snape", "hermione granger", "lord voldemort", "Dobby the House Elf", "Albus Dumblefore"],
              ["niffler", "merperson", "baslisk", "acromantula", "thestral", "hippogriff"]
        ];
//create function to randomely select category word and replace with dashes
        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();

  //create hint function 
    getHint.onclick = function() {

        hints = [
            ["Tickle Tickle", "Summon the Dark Mark", "Harry F** Malfoy up with this", "TORTURE SPELL"],
            ["Mr. Always", "The real reason for Harry's succes", "Where's this guys nose?", "Give him a sock and he'll be loyal for life", "His favorite candy is lemon drops"],
            ["Ooo shiny", "Come seek us where our voices sound, We cannot sing above the ground", "It's fang can destroy horcrux",
        "Everyone though this is what was petrifying students", "Only visible when your soul has been tainted by death", "Nearly lost his head because of Malfoy's b*ass"]
        ];

        //create function to show clue

        var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

    }

      
    
         