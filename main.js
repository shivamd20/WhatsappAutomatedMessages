



function sendMessage(msg){var input = document.querySelector('.pluggable-input-body');
var count = 0;
	input.innerHTML = msg;
	input.dispatchEvent(new Event('input', {bubbles: true}));
	var button = document.querySelector('button.compose-btn-send');
    button.click();}



    var chats=document.getElementsByClassName('emojitext ellipsify');
    
    for(let i=0;i<chats.length;i++)

        console.log(chats[i].innerHTML);
        
 