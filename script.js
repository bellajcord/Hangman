// create alphabet selectors

window.onload = function () {

    //create alphabet
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//create alphabet variables and buttons

var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
//set alphabet to body

for (var i = 0; i < alphabet.length; i ++) {
    letters.id = 'alphabet';
    list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alphabet[i];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
}
}