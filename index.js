var chatInterval = 6000 //Milliseconds per chat message

var chatName =  $('.chat-container .chat-item').first().find('.chat-sender').text();
    $('.chat-loading em').text(chatName);
function chatLoadingBlink (){
  //$('.chat-loading').addClass('hide').delay(chatInterval - 2000).removeClass('hide');
  
  $('.chat-loading').addClass('hide');
  setTimeout(function () { 
      $('.chat-loading').removeClass('hide');
  }, chatInterval - 2000);

  
}

function chatCycle(){
    $('.chat-container .chat-item').first().slideUp(1500, function () {
    $(this).appendTo($('.chat-container')); 
    }).clone().insertAfter(".chat-item:last");
  
    var chatName =  $('.chat-container .chat-item').eq(1).find('.chat-sender').text();
    $('.chat-loading em').text(chatName);
}

setInterval(function(){ 
  chatCycle();
  chatLoadingBlink();
}, chatInterval);