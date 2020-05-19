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


//Manage user form with mail chimp
$('#subscribe-form').MailChimpForm({
    url: '//jqueryscript.us6.list-manage.com/subscribe/post?u=d4d8a0f45ce17e5ef2708771f&amp;id=06a33bc6c9',
    fields: '0:EMAIL,1:FULLNAME',
    submitSelector: '#submit-form'
    });

});
