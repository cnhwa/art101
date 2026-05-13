
$("#crAdd").click(function(){
    // assigning variables with value from input
    let crName=$("#crName").val();
    let crColor=$("#crColor").val();
    let crEyesNum=$("#crEyesNum").val();

    //construct html for eyes
    let crEyesHtml="";
    for (let i = 0; i < crEyesNum; i++){
        crEyesHtml = crEyesHtml + "<div class='eye'>. </div>";
    }
    
    //test in console
    console.log(crName);
    console.log(crColor);
    console.log(crEyesNum);
    console.log(crEyesHtml);
    

   if(crName.length > 2){
       // $("#creature-list").append("<div>"+crName+", "+crColor+", "+crEyesNum+"<div>");
        $("#creature-list").append(`
            <div class="creature">
                <div class="creature-body" style="background-color:${crColor}"> ${crEyesHtml} </div>
                <div class="creature-info"> ${crName}</div> 
            </div>
            
            `);
   }
   else {
    
   }

   // $("#creature-list").append("<div>"+crName+"<div>");

    $("#crName").val("");
    
});