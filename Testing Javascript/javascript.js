



function dealCards(imagesDatabase,myCard1){
    var myCard1 = parseInt(Math.floor((Math.random()*10)+1));
    myCard2 = Math.floor((Math.random()*10)+1);
    var hisCard1 = parseInt(Math.floor((Math.random()*10)+1));
    hisCard2 = Math.floor((Math.random()*10)+1);
    myTotal = myCard1 + myCard2;
    hisTotal = hisCard1 + hisCard2;
    console.log("Your cards are " + myCard1 + " and " + myCard2);
    console.log("Opponents cards are " + hisCard1 + " and " + hisCard2);
    console.log("Your total is " + myTotal);
    console.log("His total is " + hisTotal);

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    var imagesDatabase = {
        1: document.getElementById('AceSpades').src,
        2: document.getElementById('2Spades').src,
        3: document.getElementById('3Spades').src,
        4: document.getElementById('4Spades').src,
        5: document.getElementById('5Spades').src,
        6: document.getElementById('6Spades').src,
        7: document.getElementById('7Spades').src,
        8: document.getElementById('8Spades').src,
        9: document.getElementById('9Spades').src,
        10: document.getElementById('10Spades').src
    }
    
    
    humanDiv.innerHTML = "<img src='" + imagesDatabase[myCard1] + "'height='500'; style='background: blue; box-shadow: 0px 10px 50px rgba(37, 58, 233, 1);'>"
    //messageDiv.innerHTML = "<h3 style'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] +"</h3>"
    //botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height='500'; style='background: red; box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    

}
function drawCard(){
    c1 = Math.floor((Math.random()*10)+1);
    console.log("You drew a " + c1)
    myTotal = myTotal + c1;
    console.log("Your Total is " + myTotal);
    if (myTotal > 21){
        console.log("You Loose!");
        document.getElementById("draw").remove();

    }
    else if (myTotal == 21){
        console.log("Congratulations You Got Black Jack!");
        document.getElementById("draw").remove();        
    }
    else 
        console.log("Do you want to draw another card?")
        
  
}

function stay() {
    try {
    document.getElementById("draw").remove();
    console.log("You decided to stay with " + myTotal);
    botDecision();
}
    catch(TypeError) {
     {
        console.log("Click Restart or refresh browser to play again");
    }

}
}
function botDecision() {
    while (hisTotal<myTotal && myTotal<22){
        c1 = Math.floor((Math.random()*10)+1);
        console.log("Both drew a " + c1)
        hisTotal = hisTotal + c1;
        console.log("Bot's Total is now " + hisTotal);
    }
    decideWinner();

}    

function decideWinner(){
    if (myTotal > hisTotal || hisTotal>21){console.log("YOU WIN!")}
    if (myTotal < hisTotal && hisTotal<22){console.log("BOT WINS")}
    if (myTotal == hisTotal){console.log("IT'S A TIE!")}
    
}
dealCards();
