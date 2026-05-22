let environmentTitle = "a shooting star? no! its a cat! a paper cat!";

let environmentElements = ["tree", "rock", "grass", "stars", "clouds", "moon"];

let mainEntity = {
    name: "the cat",
    type: "animal",
    mood: "ambitous",
    isMoving: true,
    favoriteElement: environmentElements[3]
};

let messages = {
    title: "info: a shooting star? no! its a cat! a paper cat!",
    "main-entity": "info: a cat that loves to practice its jumping every night, and is made of paper",
    moon: "info: it's made of rocks and floats in space",
    tree: "info: it's a tree",
    rock: "info: it's a rock, it sits there all day long",
    clouds: "info: made of water, they float through the sky for hours",
    stars: "info: bright shiny objects the paper cat loves to watch"
};

$("#button-row button").click(function () {
    let id = $(this).attr("id");
    let message = messages[id];

    $("#message").text(message);

    $("#button-row button").removeClass("selected");
    $(this).addClass("selected");
});

$("#moon-img").click(function () {
    let timeOfDay = prompt("What time of day is it? (sunrise, night)").toLowerCase();

    if (timeOfDay === "sunrise") {
        $("body").css("background-image", "url('sunsrise.png')");
    } 
    else {
        $("body").css("background-image", "url('background.jpg')");
    }
})

// $("#tree-img").click(function () {
//     let timeOfDay = prompt("What time of day is it? (sunrise, night)").toLowerCase();

//     if (timeOfDay === "sunrise") {
//         $("#tree-img").css("background-image", "url('sunsrise.png')");
//     } 
//     else {
//         $("tree-img").css("background-image", "url('background.jpg')");
//     }
// })