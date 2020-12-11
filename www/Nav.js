function closehamburger()
{
	var x = document.getElementById("subMyName");
	x.style.display = "none";
	
	var x = document.getElementById("subAboutMe");
	x.style.display = "none";
	
	var x = document.getElementById("subProjects");
	x.style.display = "none";
	
	var x = document.getElementById("subPersonalWork");
	x.style.display = "none";
	
	var x = document.getElementById("subContact");
	x.style.display = "none";
	
	var x = document.getElementById("subResume");
	x.style.display = "none";
}

function hamburgerMenu()
{
    var x = document.getElementById("subMyName");
    if (x.style.display ==="block") 
    {
        x.style.display = "none";
    }
    else 
    {
        x.style.display = "block";
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

    var x = document.getElementById("subResume");
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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous buttons
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image buttons
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slideshow");
  var dots = document.getElementsByClassName("dot");
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