


    var winCounter = 0;
    var lossCounter = 0;
    var guessCounter = 9;
    var prevGuessList = "";
    var prevLetters = [];

    var isAlpha = function (ch) {
        
        var x = ch.toString();
        var x = ch.toLowerCase();
        
        if ((x == "a" || x == "b" || x == "c" || x == "d" || x == "e" || x == "f" || x == "g" || x == "h" || x == "i" || x == "n" || x == "v" || x == "w" || x == "j" || x == "o" || x == "u" || x == "x" || x == "k" || x == "p" || x == "t" || x == "y" || x == "l" || x == "q" || x == "s" || x == "z" || x == "m" || x == "r"))
            return true;
        else
            return false;
    }
    var randomLetter = function () {
        var randLet;
        var rand = Math.floor(Math.random() * 26) + 1
        
        switch (rand) {
            case 1:
                randLet = "a";
                break;
            case 2:
                randLet = "b";
                break;
            case 3:
                randLet = "c";
                break;
            case 4:
                randLet = "d";
                break;
            case 5:
                randLet = "e";
                break;
            case 6:
                randLet = "f";
                break;
            case 7:
                randLet = "g";
                break;
            case 8:
                randLet = "h";
                break;
            case 9:
                randLet = "i";
                break;
            case 10:
                randLet = "j";
                break;
            case 11:
                randLet = "k";
                break;
            case 12:
                randLet = "l";
                break;
            case 13:
                randLet = "m";
                break;
            case 14:
                randLet = "n";
                break;
            case 15:
                randLet = "o";
                break;
            case 16:
                randLet = "p";
                break;
            case 17:
                randLet = "q";
                break;
            case 18:
                randLet = "r";
                break;
            case 19:
                randLet = "s";
                break;
            case 20:
                randLet = "t";
                break;
            case 21:
                randLet = "u";
                break;
            case 22:
                randLet = "v";
                break;
            case 23:
                randLet = "w";
                break;
            case 24:
                randLet = "x";
                break;
            case 25:
                randLet = "y";
                break;
            case 26:
                randLet = "z";
                break;
        }
        return randLet;
    }
    var randLet = randomLetter()
    var repeatedLetter = function(x,y)
    {
        var userLetter = x.toLowerCase();
        for (var i = 0; i < y.length; i++)
        {
            if (y[i] == userLetter){

            return true
        }
    }

            return false
    }
    
    document.onkeyup = function (event) {

        var userguess = event.key;
        if (isAlpha(userguess) && !repeatedLetter(userguess,prevLetters)) {
            prevLetters.push(1)
            
            userguess = userguess.toString()
             if (userguess == randLet){
             winCounter += 1;
             guessCounter = 9;
             prevGuessList = "";
             randLet = randomLetter();
             prevLetters = [];
             alert("you have won")
             }
             else{
                 if(guessCounter > 1){
                     prevGuessList += userguess + " ";
                     userguess = userguess.toString()
                     prevLetters.push(userguess.toLowerCase());
                     guessCounter--;
                 }
                 
                 else if (guessCounter <= 1){
                 lossCounter += 1;
                 guessCounter = 9;
                 prevGuessList = "";
                 randLet = randomLetter();
                 prevLetters = [];
                 alert("you have lost!")
                 }
             }
 
            var html =
                "<p>you chose: " + userguess + "</p><br>" +
                "<p>wins: " + winCounter + "</p><br>" +
                "<p>losses: " + lossCounter + "</p><br>" +
                "<p>remaining guesses: " + guessCounter + "</p><br>" +
                "<p>previous guesses: " + prevGuessList + "</p>"
                ;
            console.log(html)


            document.querySelector('#game').innerHTML = html;
        }
        else {
            alert("incorrect Input");
        }
    };

