//If I implemented this today, I would use es6, so const, let, arrow functions etc.
var menuBtn = document.querySelector(".menu-button");
var line1 = document.querySelector(".line-1");
var line2 = document.querySelector(".line-2");
var line3 = document.querySelector(".line-3");
var menu = document.querySelector(".menu");
menuBtn.addEventListener("click", dropDownMenu);


//menu drops down and burger menu crosses when clicked
function dropDownMenu() {
    menuBtn.classList.toggle("active");

    line1.classList.toggle("active");
    line2.classList.toggle("active");
    line3.classList.toggle("active");
    menu.classList.toggle("move-down");

}

//document.onload = function imageSwitch(){


//}

/*CEASAR ENCRYTPTION BEGINS*/
//I would use better function names to make it readable by my future self and others
function cEncode() {
    var msgAlphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

    console.log(msgAlphabet);
    var textout = '';
    var shift = document.getElementById("shift-num").value;
    console.log(shift);
    var cStr = document.getElementById("message").value;
    console.log(cStr);

    for (var i = 0; i < cStr.length; i++) {
        var cMsgLetter = cStr[i];


        var positionInMsgAlphabet = msgAlphabet.indexOf(cMsgLetter.toLowerCase());
        console.log(positionInMsgAlphabet);
        if (positionInMsgAlphabet != -1) {
            var newPosition = (positionInMsgAlphabet + Number.parseInt(shift)) % 26;
            console.log(newPosition);
            // adds the new letter to the output
            textout += msgAlphabet[newPosition];
        } else {
            textout += cMsgLetter;
        }
        document.getElementById("text-output-area").innerHTML = textout;
        document.getElementById("c-output").innerHTML = textout;

    }
}
/*CEASAR ENCRYTPTION ENDS*/
/*CEASAR DECRYTPTION BEGINS*/
function cDecode() {
    var msgAlphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    console.log(msgAlphabet);
    var textout = '';
    var shift = document.getElementById("shift-num").value;
    console.log(shift);
    var cStr = document.getElementById("text-output-area").value;
    console.log(cStr);

    for (var i = 0; i < cStr.length; i++) {
        var cMsgLetter = cStr[i];


        var positionInMsgAlphabet = msgAlphabet.indexOf(cMsgLetter.toLowerCase());
        console.log(positionInMsgAlphabet);
        if (positionInMsgAlphabet != -1) {
//Number.parseInt(shift) makes string in select into input
            var newPosition = (positionInMsgAlphabet - Number.parseInt(shift)) % 26;

               if (newPosition<0) {
                   newPosition=newPosition*(-1);
               }
            console.log(newPosition);
            // adds the new letter to the output
            textout += msgAlphabet[newPosition];
        } else {
            textout += cMsgLetter;
        }

        document.getElementById("c-decoded-output").innerHTML = textout;

    }
}
/*CEASAR DECRYTPTION ENDS*/
/*ATBASH ENCRYTPTION BEGINS*/

function encodeAtbash(str) {
    var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    console.log(alphabet);

    var textout = '';
    var str = document.getElementById("message").value;

    // goes through each letter in the input text
    for (var i = 0; i < str.length; i++) {
        // current letter
        var letter = str[i];
        // the index of the current letter in the alphabet
        var positionInAlphabet = alphabet.indexOf(letter.toLowerCase());
        if (positionInAlphabet > -1) {
            // SWITCH A AND Z
            var newPosition = alphabet.length - 1 - positionInAlphabet;
            // adds the new letter to the output
            textout += alphabet[newPosition];
        } else {
            textout += letter;
        }
    }
    document.getElementById("atbash-output").innerHTML = textout;
    document.getElementById("text-output-area").innerHTML = textout;

}
/******ATBASH ENCRYTPTION BEGINS*******/

/*********ATBASH DECRYTPTION BEGINS*******/
function decodeAtbash(str) {
    var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    console.log(alphabet);

    var textout = '';
    var str = document.getElementById("text-output-area").value;

    // goes through each letter in the input text
    for (var i = 0; i < str.length; i++) {
        // current letter
        var letter = str[i];
        // the index of the current letter in the alphabet
        var positionInAlphabet = alphabet.indexOf(letter.toLowerCase());
        if (positionInAlphabet > -1) {
            // SWITCH A AND Z
            var newPosition = alphabet.length - positionInAlphabet - 1;
            // adds the new letter to the output
            textout += alphabet[newPosition];
        } else {
            textout += letter;
        }
    }

    document.getElementById("atbash-decoded-output").innerHTML = textout;

}
/*********ATBASH DECRYTPTION ENDS*******/

/*VIGENERE ENCODER BEGINS*/


function encodeVigenere() {
    var keyAlphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    var msgAlphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    console.log(keyAlphabet);
    console.log(msgAlphabet);

    var textout = '';
    var vigStr = document.getElementById("vig-message").value;
    var vigKey = document.getElementById("vig-keyword").value;
    console.log(vigStr);
    console.log(vigKey);
    var vigKeyFullLength = "";
    var numberOfVigKeySpaces = 0;

    // makes key repeat and the same length as the message

    for (var i = 0; i < vigStr.length; i++) {



        //remove the spaces from the keyword
        if (vigStr[i] === ' ') {
            //vigStr += vigKeyLetter;
            vigKeyFullLength += ' ';
            numberOfVigKeySpaces++;
            continue;


        }

        vigKeyFullLength += vigKey[(i - numberOfVigKeySpaces) % vigKey.length];

    }
    console.log(vigKeyFullLength);
    //stopping the keyword looping at the end of the  message string length



//I would use the map function rather than the for loop
    for (var i = 0; i < vigStr.length; i++) {
        // current letter in each string
        var vigKeyLetter = vigKeyFullLength[i];
        var vigMsgLetter = vigStr[i];


        // the index of the current letter in the alphabet
        var positionInKeyAlphabet = keyAlphabet.indexOf(vigKeyLetter.toLowerCase());
        var positionInMsgAlphabet = msgAlphabet.indexOf(vigMsgLetter.toLowerCase());


        if (positionInMsgAlphabet >= 0 && positionInMsgAlphabet <= 26) {

            var newPosition = (positionInKeyAlphabet + positionInMsgAlphabet) % 26;

            // adds the new letter to the output
            textout += msgAlphabet[newPosition];
        } else {
            textout += vigMsgLetter;
        }
        document.getElementById("vig-output").innerHTML = textout;

        document.getElementById("vig-code").innerHTML = textout;


    }
}

/*VIGENERE ENCODER ENDS*/


/*VIGENERE DECODER BEGINS*/
function decodeVigenere() {
    var keyAlphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    var msgAlphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    console.log(keyAlphabet);
    console.log(msgAlphabet);




    var textout = '';
    var vigStr = document.getElementById("vig-code").value;
    var vigKey = document.getElementById("vig-keyword").value;
    console.log(vigStr);
    console.log(vigKey);
    var vigKeyFullLength = "";
    var numberOfVigKeySpaces = 0;

    // makes key repeat and the same length as the message

    for (var i = 0; i < vigStr.length; i++) {



        //remove the spaces from the keyword
        if (vigStr[i] === ' ') {
            //vigStr += vigKeyLetter;
            vigKeyFullLength += ' ';
            numberOfVigKeySpaces++;
            continue;


        }
        //stopping the keyword looping at the end of the  message string length
        vigKeyFullLength += vigKey[(i - numberOfVigKeySpaces) % vigKey.length];

    }
    console.log(vigKeyFullLength);

    //stopping the keyword looping at the end of the  message string length
    //var keywordString =  vigKey.substr( 0, vigStr.length );

    //console.log(keywordString)


    for (var i = 0; i < vigStr.length; i++) {
        // current letter in each string
        var vigKeyLetter = vigKeyFullLength[i];
        var vigMsgLetter = vigStr[i];


        // the index of the current letter in the alphabet
        var positionInKeyAlphabet = keyAlphabet.indexOf(vigKeyLetter.toLowerCase());
        var positionInMsgAlphabet = msgAlphabet.indexOf(vigMsgLetter.toLowerCase());


        if (positionInMsgAlphabet != -1 && positionInKeyAlphabet != -1) {

            var newPosition = (positionInMsgAlphabet - positionInKeyAlphabet + 26) % 26;

            console.log(positionInMsgAlphabet)
            console.log(positionInKeyAlphabet)

            // adds the new letter to the output
            textout += msgAlphabet[newPosition];
            console.log(textout)
        } else {
            textout += vigMsgLetter;
            console.log(textout)
        }
        document.getElementById("vig-decoded-output").innerHTML = textout

    }
}
/*VIGENERE DECODER ENDS*/
