$(function () {

    $(".title h2").html("Start");

    function rand(max, min) {
        return Math.floor(Math.random()*(max - min + 1) + min);
    }

    var cardsCount = 5;
    var cardsArr = [];

    for(var i = 0; i < cardsCount; i++){
        // do {
            var card = rand(1, 4) + "-" + rand(1, 9) + ".png";

        // } while (!~cardsArr.indexOf(card));
        cardsArr[i] = card;
    }

    // $(".cards").append("<div>" +
    //  "</div>");

    console.log(cardsArr);


});