$(document).ready(function(e){
//Toggle between image and description for what we do section
$(".txtovc").click(function(e) {
    e.preventDefault();
    $(".overlay-text").toggle();
    });
    
    

//Hover effet for portfolio section
$(".imghov").mouseover(function() {
$(this).find(".overlay-card").show();
}).mouseout(function(){
$(this).find(".overlay-card").hide();
});


//Manage user form with mail chimp


});
