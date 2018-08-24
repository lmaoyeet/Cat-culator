function one() {
	document.getElementById('i').innerHTML =  document.getElementById('i').innerHTML + '1';
}
function two() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '2';
}
function three() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '3';
}
function four() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '4';
}
function five() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '5';
}
function six() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '6';
}
function seven() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '7';
}
function eight() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '8';
}
function nine() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '9';
}
function zero() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '0';
}
function plus() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '+';
}
function minus() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '-';
}
function multiplication() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '*';
}
function division() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '/';
}
function clearThing() {
	var thingy = document.getElementById('i');
	thingy.innerHTML = ' ';
}
function table() {
	document.getElementById('i').innerHTML = document.getElementById('i').innerHTML + '.';
}
function show() {

	var newValue = eval(document.getElementById('i').innerHTML);
	document.getElementById('i').innerHTML = newValue;
}
function equal() {
	show();
}
