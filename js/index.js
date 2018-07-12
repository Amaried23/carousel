// create variable for angle and assign it to zero

var angle = 0;

// create function that fires when the arrows are clicked for the carousel
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");

if (!sign) {
    angle = angle + 45; 
  } else { angle = angle - 45;

  }
  spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

