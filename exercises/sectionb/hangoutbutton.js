let count = 0;
let friend = ["Monica", "Rachel", "Phoebe"];
let friendCount = 0;

$("#friend-h").click(function(){
    count = count + 1;
    $("#friend-h").html("Friend" + "Hangouts: " + count);
})

function makeImage() {
 if (friend[friendCount] == 0) 
  { 
    $("body").append("<img width=50 src='friends photo.avif'>");
    makeImage();
  }

 else if (friend[friendCount] == 1) 
  { 
    $("body").append("<img width=50 src='friends photo.avif'>");
    makeImage();
  }

  else if (friend[friendCount] == 2) 
  { 
    $("body").append("<img width=50 src='friends photo.avif'>");
    makeImage();
  }

}








