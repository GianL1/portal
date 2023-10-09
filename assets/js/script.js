var slideItem = 0;
var bolinhas = document.getElementsByClassName('bolinha');

window.onload = function() {
	setInterval(passarSlide, 2000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	bolinhas.item(slideItem).style.backgroundColor = "red";
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}
}
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	
	if(slideItem >= 3) {
		bolinhas.item(slideItem).style.backgroundColor = "#ccc";
		slideItem = 0;
		bolinhas.item(slideItem).style.backgroundColor = "red";
	} else {
		slideItem++;
		bolinhas.item(slideItem).style.backgroundColor = "red";
		bolinhas.item(slideItem-1).style.backgroundColor = "#ccc";
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}