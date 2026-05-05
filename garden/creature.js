
$("#crAdd").click(function(){
    let crName=$("#crName").val();
    console.log(crName);

    

   if(crName.length > 1){
        $("#creature-list").append("<div>"+crName+"<div>");
   }
   else {
    
   }

   // $("#creature-list").append("<div>"+crName+"<div>");

    $("#crName").val("");
    
});