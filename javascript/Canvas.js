var context;
var dx= 4;
var dy=4;
var y=150;
var x=10;
function draw(){
	context= myCanvas.getContext('2d');
	context.clearRect(0,0,450,400);
	context.beginPath();
	context.fillStyle="black";
	context.arc(x,y,15,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	if( x<0 || x>350)
	dx=-dx;
	if( y<0 || y>300)
		dy=-dy;
		x+=dx;
		y+=dy;
	}
setInterval(draw,15);

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); 
}