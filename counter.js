let timeRemaining = 180;
let counter = document.getElementById("counter");
let timer = setInterval(() => countdown(), 1000);

function countdown(){
	timeRemaining--;
	counter.innerHTML = timeRemaining;
	if(timeRemaining == 0){
		clearInterval(timer);
		alert('Не ссы братан, это шутка)');
	}
}
