//your JS code here. If required.
let count = 0;
const btn = document.getElementById("incrementBtn");
let counter = document.getElementById("counter");

btn.addEventListener("click", function() {
	alert(count);
	count++;
	counter.innerText = count;

	
})