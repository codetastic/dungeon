// Capture user input and display it on the web page

// How to return user input
// http://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt
// http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_value
// Var needs to be within the function to work. when it was outside it didn't work.
// Is this the most elegant and efficient way of doing it? Probably not.

function uiFunction() {
    // Capture
    var uiName = document.getElementById("yourName").value;
    var uiMum = document.getElementById('yourMum').value;
    var uiDisgust = document.getElementById('yourDisgust').value;
    var uiFear = document.getElementById("yourFear").value;
    var uiFood = document.getElementById('yourFood').value;
    // Display
    document.getElementById("disname").innerHTML = uiName;
    document.getElementById("disMum").innerHTML = uiMum;
    document.getElementById("disDisgust").innerHTML = uiDisgust;
    document.getElementById("disFear").innerHTML = uiFear;
    document.getElementById("disFood").innerHTML = uiFood;
}

// Room1

var myModal1a = document.getElementById('modal1a');
var myModal1b = document.getElementById('modal1b');
var myModal1c = document.getElementById('modal1c');
var myModal1d = document.getElementById('modal1d');
var myModal1e = document.getElementById('modal1e');
var myModal = document.getElementsByClassName('modal');

var myAnswer1a = document.getElementById('answer1a');
var myAnswer1b = document.getElementById('answer1b');
var myAnswer1c = document.getElementById('answer1c');
var myAnswer1d = document.getElementById('answer1d');
var myAnswer1e = document.getElementById('answer1e');

var close1a = document.getElementsByClassName('closeButton1a')[0];
var close1b = document.getElementsByClassName('closeButton1b')[0];
var close1c = document.getElementsByClassName('closeButton1c')[0];
var close1d = document.getElementsByClassName('closeButton1d')[0];
var close1e = document.getElementsByClassName('closeButton1e')[0];

myAnswer1a.onclick = function() {
    myModal1a.style.display = "block";
}

myAnswer1b.onclick = function() {
    myModal1b.style.display = "block";
}

myAnswer1c.onclick = function() {
    myModal1c.style.display = "block";
}

myAnswer1d.onclick = function() {
    myModal1d.style.display = "block";
}

myAnswer1e.onclick = function() {
    myModal1e.style.display = "block";
}

close1a.onclick = function() {
    myModal1a.style.display = "none";
}

close1b.onclick = function() {
    myModal1b.style.display = "none";
}

close1c.onclick = function() {
    myModal1c.style.display = "none";
}

close1d.onclick = function() {
    myModal1d.style.display = "none";
}

close1e.onclick = function() {
    myModal1e.style.display = "none";
}

// Room2

// Room3

// Globals
