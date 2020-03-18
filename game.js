var card = document.getElementsByClassName('card');
var check = document.getElementsByClassName('is-flipped');
var result = 0;
var score = document.getElementById('score');
var turn_num = 0;
var turn = document.getElementById('turn');

// Randomize cards.


var ul = document.querySelector('.big');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}



//Loop for the card elements.

for (let i=0;i<card.length;i++){
card[i].addEventListener( 'click', function() 
{
    //add flipped status to element.
  card[i].classList.add('is-flipped');
  //statement checker
  if (Check()==1) // if 2 cards are the same.
  {
    DeleteFlipped(check);
    //delete flipped status. 
    result = result + 12.5; //result.
    score.innerHTML = result; //score HTML
    turn_num++;
    turn.innerHTML = turn_num;
    //Run the win checker. 

    setTimeout(function () { 
        WinCheck(); 
    }, 500);
  }
  if (Check()==0)// if 2 cards are different.
  {
    turn_num++;
    turn.innerHTML = turn_num;
      //remove the flipped status. 
    setTimeout(function(){
        // push to before status (unflipped)
        check[1].classList.remove('is-flipped');
        check[0].classList.remove('is-flipped');
        }, 350);
  }
});
}

//Check if the same card.


//
function Check ()
{
    if (check.length==2)
    {
        if (check[0].innerHTML==check[1].innerHTML)
        {
            return 1;
        }
        else 
        {
            return 0;
        }
    }
    if (check.length!=2)
    {
        //
    }

}



// Check the win/ status of player.

function WinCheck()
{
    if (result==100)
    {
        Swal.fire(
            'WOW!',
            'Thắng rồi kìa, hihi!',
            'success'
          )
        clearInterval(timeout);
        Reload();
    }
}

function Reload(){
    var ok = document.getElementsByClassName('swal2-confirm swal2-styled');
    for (var i = 0; i<ok.length;i++){
        ok[i].addEventListener( 'click', function(){
            
            window.location.reload();
        })
    }   
}

//Delete flipped status.

function DeleteFlipped(check)
{
    if (check.length==2)
    {
    {
        check[1].classList.add('keep');
        check[0].classList.add('keep');
        check[1].classList.remove('is-flipped');
        check[0].classList.remove('is-flipped');
        
    }
}
}

//var target_date = new Date().getTime() + (50*400*48);
var target_date = new Date().getTime() + (50*35*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

var timeout = setInterval(function () { getCountdown(); }, 1000);

// Lose Checker 


function CheckLose(){
    if ((minutes==00)&&(seconds==00)||(turn_num==25)){
        
        Swal.fire(
            'Ahihi ĐỒ NGỐC! BAKA!',
            'Thua rồi đó thấy chưa :(',
            'error'
          )
          
          clearInterval(timeout);
          Reload();
        }
}
function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

    CheckLose();
	// format countdown string + set tag value
    countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
    
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

