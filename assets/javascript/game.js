
//*******IMPLEMNETATION ONE********
var word = "mannnyyyy";
var wordArray = word.split("");
var i,numberOfGuesses=10, counter=0;
var wrongGuesses = document.getElementById("wrongGuesses");



// draw a blank line for each letter in the word
for(i=0; i<wordArray.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = wordArray[i];
    li.className = "hideSecretLetter";
    document.getElementById("secretWord").appendChild(li);
}

//onkeyup event handler
document.onkeyup = function(event) {
    // get the CharCode of the pressedkey and convert it to lowercase
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    
    //create an array from html collection and run callback function on each item
    Array.from(document.querySelectorAll("#secretWord>li"),li => {
        //if the letter exists in the array, toggle classes to show it 
        if(letter  === li.textContent) {
            li.classList.remove("hideSecretLetter");
            li.classList.add("showSecretLetter");
        } else {
            console.log("wrongword: ", li);
        }
    });
}

/*IMPLEMENTATION 2

var bands=[["MJ"],["foo"],["yaya"]], bandCounter=0;
function getBands(bands){
        for(var i=0,l=bands.length;i<l;i++){
        var word = bands[i][0].split('');
        console.log(word);
        /*for(var j=0;j<word.length;j++) {
        console.log(word[j]);
        }
        // draw a blank line for each letter in the word
        for(var j=0; j<word.length; j++) {
            var li = document.createElement("li");
            li.innerHTML = word[j];
            li.className = "hideSecretLetter";
            document.getElementById("secretWord").appendChild(li);
        }
        bandCounter++;
        break;
    }
}

document.onkeyup = function(event) {
    // get the CharCode of the pressedkey and convert it to lowercase
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    
    //create an array from html collection and run callback function on each item
    Array.from(document.querySelectorAll("#secretWord>li"),li => {
        //if the letter exists in the array, toggle classes to show it 
        console.log(letter);
        console.log(li.textContent);
        if(letter  === li.textContent) {
            li.classList.remove("hideSecretLetter");
            li.classList.add("showSecretLetter");
        } else {
            console.log("crapppppp");
        }
    });
}

window.onload = getBands;

*/

