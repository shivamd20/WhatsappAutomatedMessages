



function sendMessage(msg){var input = document.querySelector('.pluggable-input-body');
var count = 0;
	input.innerHTML = msg;
	input.dispatchEvent(new Event('input', {bubbles: true}));
	var button = document.querySelector('button.compose-btn-send');
    button.click();}


function birthdayMessage( bdate,msg){

    window.setInterval(function(){ // Set interval for checking
        var date = new Date(); // Create a Date object to find out what time it is
        if(date.getHours() === bdate.getHours() && date.getMinutes() === bdate.getMinutes() && 
        date.getDay()===bdate.getDay() && date.getFullYear===bdate.getFullYear()){ 

            sendMessage(msg);

        }
    }, 60000);
}