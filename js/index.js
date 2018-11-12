let begin = true;
function nope() {
	if(begin==true) {
		document.getElementById('i').innerHTML = '';
		begin = false;
	}
}

function one() {
	nope();
	document.getElementById('i').innerHTML =  document.getElementById('i').innerHTML + '1';
}
function two() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '2';
}
function three() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '3';
}
function four() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '4';
}
function five() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '5';
}
function six() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '6';
}
function seven() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '7';
}
function eight() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '8';
}
function nine() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '9';
}
function zero() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '0';
}
function plus() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '+';
}
function minus() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '-';
}
function multiplication() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '*';
}
function division() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '/';
}
function clearThing() {
	nope();
	var thingy = document.getElementById('i');
	thingy.innerHTML = '0';
	begin = true;
}
function table() {
	nope();
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '.';
}
function show() {
	nope();
	var newValue = eval(document.getElementById('i').innerHTML);
	document.getElementById('i').innerHTML = newValue;
}
function equal() {
	nope();
	show();
}
