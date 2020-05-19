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
//Initialize form
$('#subscribe-form').MailChimpForm({
    url: '//jqueryscript.us6.list-manage.com/subscribe/post?u=d4d8a0f45ce17e5ef2708771f&amp;id=06a33bc6c9',
    fields: '0:EMAIL,1:FULLNAME',
    submitSelector: '#submit-form',
    customMessages: {
        E001: 'This field can not be empty',
        E003: 'Please enter a valid email address',
      }
    });

//Default options
$('#subscribe-form').MailChimpForm({
    url: $form.attr('action'),
    fields: '',
    inputSelector: 'input',
    errorSelector: '.mc-error',
    submitSelector: '',
    customMessages: {}
    });

//Callback functions
$('#subscribe-form').MailChimpForm({
    onFail: (message) => {
    console.error(message);
    },
    onOk: (message) => {
       console.log(message);
     }
     });

//Event handlers
const $formInput = $('input');
/**
* @param element
* @param {String} color
*/
function addBorder(element, color) {
element.css({'border': `1px solid ${color}`});
}
/**
* mc:input:error event handler
 */
$formInput.on('mc:input:error', function () {
 console.log('mc:input:error event fired');
 addBorder($(this), 'red');
});
/**
* mc:input:ok event handler
*/
$formInput.on('mc:input:ok', function () {
console.log('mc:input:ok event fired');
addBorder($(this), 'green');
});

});
