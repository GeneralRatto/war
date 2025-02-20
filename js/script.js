
var firstPlayer = [];
var secondPlayer = [];
var playedCards = [];
var cards = [];
var number1;
var number2;
var suit1;
var suit2;
var numberImg1;
var numberImg2;
var totalCards;

var $draw = $("#draw");
var $firstPlayer = $("#firstPlayer");
var $secondPlayer = $("#secondPlayer");
var $firstPlayerNumber = $("#firstPlayerNumber");
var $secondPlayerNumber = $("#secondPlayerNumber");
var $firstPlayerSuit = $("#firstPlayerSuit");
var $secondPlayerSuit = $("#secondPlayerSuit");
var $winner = $("#winner");
var $player1Count = $("#player1Count");
var $player2Count = $("#player2Count");
var $p1 = $("#p1");
var $p2 = $("#p2");

var audio = new Audio('card.mp3');

for (i=1; i<14; i++){ 

    for (k=1; k<5; k++) {

        var j = [i,k];
        cards.push(j);
        totalCards = cards.length;
        
    }

}

cards.shuffle = function() {

    console.log("shuffle");
    var input = this;
    for (var i = cards.length-1; i>=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = cards[randomIndex][0];
        var itemAtSecond = cards[randomIndex][1];
        input[randomIndex][0] = input[i][0];
        input[randomIndex][1] = input[i][1];
        input[i][0] = itemAtIndex;
        input[i][1] = itemAtSecond;
    }

    return input;

}


cards.shuffle();

var half = cards.length/2;
for (i=0; i<half; i++) {

    firstPlayer.push(cards[i]);

}

cards.splice(0, half);

secondPlayer = cards;
$player1Count.html(firstPlayer.length);
$player2Count.html(secondPlayer.length);

function endgame() {

    if (firstPlayer.length == 0) {

    $winner.html("Player One has 0 cards left. Therefore, Player Two wins");
    $p1.html("Player One has no cards left");
    $player2Count.html(totalCards)

    } else if (secondPlayer.length == 0) {

    $winner.html("Player Two has 0 cards left. Therefore, Player One wins");
    $p2.html("Player Two has no cards left");
    $player1Count.html(totalCards)

    }

}

function assign(){

    if (firstPlayer.length == 0 || secondPlayer.length == 0) {endgame()}

    console.log("assign");

    $firstPlayerSuit.empty();
    $secondPlayerSuit.empty();

    $firstPlayerSuit.css("display", "block")
    $secondPlayerSuit.css("display", "block")

    number1=firstPlayer[0][0];
    number2=secondPlayer[0][0];
    
    $firstPlayerNumber.html(number1);
    $secondPlayerNumber.html(number2);
    
    suit1 = firstPlayer[0][1];
    suit2 = secondPlayer[0][1];

    if (suit1 == 1) {
        suit1 = "<img src='./images/hearts.png'>";
    }

    if (suit1 == 2) {
        suit1 = "<img src='./images/diamonds.png'>";
    }

    if (suit1 == 3) {
        suit1 = "<img src='./images/spades.png'>";
    }

    if (suit1 == 4) {
        suit1 = "<img src='./images/clubs.png'>";
    }

    if (suit2 == 1) {
        suit2 = "<img src='./images/hearts.png'>";
    }

    if (suit2 == 2) {
        suit2 = "<img src='./images/diamonds.png'>";
    }

    if (suit2 == 3) {
        suit2 = "<img src='./images/spades.png'>";
    }

    if (suit2 == 4) {
        suit2 = "<img src='./images/clubs.png'>";
    }

    if (number1<11) {

        for (i=0; i<number1; i++) {
            $firstPlayerSuit.append(suit1);
        }

    } else {

        if (number1 == 11) {

            numberImg1 = "<img src='./images/jack.png'>";
            $firstPlayerSuit.html(suit1);
            $firstPlayerNumber.html(numberImg1);

        }
        if (number1 == 12) {

            numberImg1 = "<img src='./images/queen.png'>";
            $firstPlayerSuit.html(suit1);
            $firstPlayerNumber.html(numberImg1);

        }
        if (number1 == 13) {

            numberImg1 = "<img src='./images/king.png'>";
            $firstPlayerSuit.html(suit1);
            $firstPlayerNumber.html(numberImg1);

        }

    }

    if (number2<11) {

        for (i=0; i<number2; i++) {
            $secondPlayerSuit.append(suit2);
        }

    } else {

        if (number2 == 11) {

            numberImg2 = "<img src='./images/jack.png'>";
            $secondPlayerSuit.html(suit2);
            $secondPlayerNumber.html(numberImg2);

        }
        if (number2 == 12) {

            numberImg2 = "<img src='./images/queen.png'>";
            $secondPlayerSuit.html(suit2);
            $secondPlayerNumber.html(numberImg2);

        }
        if (number2 == 13) {

            numberImg2 = "<img src='./images/king.png'>";
            $secondPlayerSuit.html(suit2);
            $secondPlayerNumber.html(numberImg2);


        }

    }

    playedCards.push(firstPlayer[0]);
    playedCards.push(secondPlayer[0]);

    firstPlayer.splice(0,1);
    secondPlayer.splice(0,1);
    $player1Count.html(firstPlayer.length);
    $player2Count.html(secondPlayer.length);

    console.log("function greater called")
    greater();

}

function war() {

    $winner.html("This means war");

      

    for (i=0; i<3; i++) {

        playedCards.push(firstPlayer[0]);
        playedCards.push(secondPlayer[0]);

        firstPlayer.splice(0,1);
        secondPlayer.splice(0,1);

    }



    $firstPlayerSuit.css("display", "none")
    $secondPlayerSuit.css("display", "none")

    numberImg1 = "<img style='height:14rem;' src='./images/cards.png'>";
    $firstPlayerNumber.html(numberImg1);
    numberImg2 = "<img style='height:14rem;' src='./images/cards.png'>";
    $secondPlayerNumber.html(numberImg2);

    audio.play();

    window.setTimeout(function() {
    
    audio.play();

    }, 1000);

    window.setTimeout(function() {
    
    audio.play();

    }, 1800);

    window.setTimeout(function() {
        console.log("assign called")
        assign();
        audio.play();
    }, 2600);

}

function greater() {

    if (number1 > number2) {

        $winner.html;("Player 1 wins");

        for (i=0; i<playedCards.length; i++) {

            firstPlayer.push(playedCards[i]);
            console.log("pushed a card to a player");

        }
        $player1Count.html(firstPlayer.length);
        playedCards = [];

    } else if (number2 > number1) {

        $winner.html("Player 2 wins");

        for (i=0; i<playedCards.length; i++) {

            secondPlayer.push(playedCards[i]);
            console.log("pushed a card to a player");

        }
        $player2Count.html(secondPlayer.length);
        playedCards = [];

    } else if (number1 == number2) {

        war();
       
    }

}

$draw.on('click', function() {

    assign();
    audio.play();

});
