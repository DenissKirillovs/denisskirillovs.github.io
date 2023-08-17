// HAMBURGER MENU CLOSE ON CLICK FUNCTION
function closehamburger() //Play this function when it is called
{
	var x = document.getElementById("subMyName"); //Getting the element id called subMyName
    x.style.display = "none";                     //And setting it's display to none
    	
	var x = document.getElementById("subAboutMe");
	x.style.display = "none";
	
	var x = document.getElementById("subProjects");
	x.style.display = "none";
	
	var x = document.getElementById("subPersonalWork");
	x.style.display = "none";
	
	var x = document.getElementById("subContact");
	x.style.display = "none";

    var x = document.getElementById("subCV");
	x.style.display = "none";
	
}

// END OF HAMBURGER MENU CLOSE ON CLICK FUNCTION

function hamburgerMenu() //Play this function when user presses the hamburger menu icon
{
    var x = document.getElementById("subMyName"); //Get the element by id called subMyName
    if (x.style.display ==="block")               //If it's display is block ("block" by default in css)
    {
        x.style.display = "none";                 //Set it's display to none
    }
    else 
    {
        x.style.display = "block";                //If anything else, set its display to block
    }


    var x = document.getElementById("subAboutMe");
    if (x.style.display ==="block") 
    {
        x.style.display = "none";
    }
    else 
    {
        x.style.display = "block";
    }

    var x = document.getElementById("subProjects");
    if (x.style.display ==="block") 
    {
        x.style.display = "none";
    }
    else 
    {
        x.style.display = "block";
    }

    var x = document.getElementById("subPersonalWork");
    if (x.style.display ==="block") 
    {
        x.style.display = "none";
    }
    else 
    {
        x.style.display = "block";
    }

    var x = document.getElementById("subContact");
    if (x.style.display ==="block") 
    {
        x.style.display = "none";
    }
    else 
    {
        x.style.display = "block";
    }

    var x = document.getElementById("subCV");
    if (x.style.display ==="block") 
    {
        x.style.display = "none";
    }
    else 
    {
        x.style.display = "block";
    }

}



// START OF SLIDESHOW JS

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slideshow");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
} 


// END OF SLIDESHOW JS