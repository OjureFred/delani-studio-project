$(document).ready(function(e){
//Toggle between image and description for what we do section
$(".txtovc").click(function(e) {
    e.preventDefault();
    $(this).find(".overlay-text").toggle();
    $(this).find(".container").toggle();
    });
    
    

//Hover effet for portfolio section
$(".imghov").mouseover(function() {
$(this).find(".overlay-card").show();
}).mouseout(function(){
$(this).find(".overlay-card").hide();
});


//Processing form data
 $("#contact").submit(function(e) {
 e.preventDefault();
 var fullname = $("#fullname").val();
 var email =$("#email").val();
 alert("Thank you " + fullname + " we have recieved your message and will get back to you on " + email);
 });

});
