



function sendMessage(msg){var input = document.querySelector('.pluggable-input-body');
var count = 0;
	input.innerHTML = msg;
	input.dispatchEvent(new Event('input', {bubbles: true}));
	var button = document.querySelector('button.compose-btn-send');
    button.click();}



    function wishOnTime(hour,min,msg){

   window.setInterval(function(){ // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    if(date.getHours() === hour && date.getMinutes() === min){ // Check the time
       

        sendMessage(msg);


    }
}, 60000);
    }