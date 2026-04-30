let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCounter = 0;
let mood = "neutral";

$("#needy-button").click(function () { 
   $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCounter] );
   $("body").css("background-color", colors[colorCounter]);
   

   if (count == 4) {
    /*count = 0;*/
    console.log("it happened");
   }

    /* tells u color after click */
        if (colors[colorCounter]=="HotPink"){
            $("#needy-button").after("Pink, ");
        }

        else if (colors[colorCounter]=="Orchid"){
            $("#needy-button").after("Orchid, ");
        }

        else {
            $("#needy-button").after("other color, ");
        }

   /* changes button based on count 
        if (count <= 5) {
            $("#needy-button").html(count + " clicks... " + colors[colorCounter] + "... " + "fresh and happy!");
        }

        else if (5 <= count <= 10) {
            $("#needy-button").html(count + " clicks... " + colors[colorCounter] + "... " + "keep going!!!");
        }

        else {
            $("#needy-button").html(count + " clicks... " + colors[colorCounter] + "... " + "so tired...T-T");
        } */

        
        if (count < 5){
            mood = "fresh and happy!";
        }
        else if ( 5 <= count <= 10) {
            mood = "keep going!!!";
        }
        else {
            mood = "so tired... T-T"
        }

   count = count + 1;
   colorCounter = count - 1;

   

});