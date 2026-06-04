//ENV INFO MESSAGES 
let messages = {
    title: "info: a shooting star? no! its a cat! a paper cat!",
    "main-entity": "info: a cat that loves to practice its jumping every night, and is made of paper",
    moon: "info: it's made of rocks and floats in space",
    tree: "info: it's a tree",
    rock: "info: it's a rock, it sits there all day long",
    clouds: "info: made of water, they float through the sky for hours",
    stars: "info: bright shiny objects the paper cat loves to watch"
};

// ENV INFO BUTTONS CLICK FUNCTION
$("#button-row button").click(function () {
    let id = $(this).attr("id");
    let message = messages[id];

    $("#message").text(message);

    $("#button-row button").removeClass("selected");
    $(this).addClass("selected");
});

// MOON TIME OF DAY CLICK FUNCTION
$("#moon-img").click(function () {
    let timeOfDay = prompt("What time of day is it? (sunrise, night)").toLowerCase();

    if (timeOfDay == "sunrise") {
        $("body").css("background-image", "url('sunsrise.png')");
    } 
    else {
        $("body").css("background-image", "url('background.jpg')");
    }
})

// TREE SEASONS PROMPT FUNCTION
$("#tree-img").click(function () {
    let seasonOfTree = prompt("What season is it for the tree? (fall/winter/spring/summer)").toLowerCase();

    if (seasonOfTree == "fall") {
        $("#tree-img").attr("src", "tree-seasons/falltree.png");
    } 
    if (seasonOfTree == "winter") {
        $("#tree-img").attr("src", "tree-seasons/wintertree.png");
    } 
    if (seasonOfTree == "spring") {
        $("#tree-img").attr("src", "treee.png");
    } 
    if (seasonOfTree == "summer") {
        $("#tree-img").attr("src", "tree-seasons/summertree.png");
    }

})

// CAT JUMPING CLICK FUNCTION
$("#cat-img").on("click", function() {
  $(this).addClass("jumping");
  
  $(this).one("animationend", function() {
    $(this).removeClass("jumping");
  });
});

//CAT'S THOUGHTS HOVER FUNCTION
$("#cat-img").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
    $("#status").text("You're looking at the cat's thoughts!");
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
    $("#status").text("the paper cat is taking a break..");
  }
);