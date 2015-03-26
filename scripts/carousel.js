/* 
Filename: carousel.js
Author: Samantha Voigt
Date: April, 20, 2014
Purpose: To provide the image carousel on index.html. Will display images in a slideshow-like motion, but on an automatic timer that 
moves to another image every 5 seconds. The user will have a button on the left and the right of the carousel that will allow movement
between the images in the carousel, disregarding the automatic timer. There will also be three circles at the bottom of the carousel 
that will do two things: indicate what image in the list the carousel is currently on and allow the user to choose an image to go to 
by clicking on the circle that corresponds with the image they want to see. 

-- used http://runnable.com/UfZmYYy6DgF0AAAR/building-a-simple-jquery-slideshow-with-a-few-lines-of-code as a baseline/example for functionality and then 
made edits and added different functionality from there. New features from the code: Automatic timer, indicator and navigation circles, new 
selectors for my specific code. 

*/

var imageWidth = 800; //specifies the width of the images to be the width of the main 

$(document).ready(function() {

  var currentImage = 0; 
  var numImages = $("#carousel ul li img").length; //finds the amount of images in the html code that need to be cycled through 
  
  $("#carousel ul").width(numImages*imageWidth); //Sets the width of the ul to be the width of all the images (as if they're side by side) 

  
  $("#carousel_next").click(function(){ //on click of the 'next' button... 
    
	currentImage++; //increase the currentImage number by one 
	
	if (currentImage >= numImages) { //if the next button has been clicked more times than there are images to cycle through, set the number back to 0 
	  currentImage = 0; 
	}
	
    setPosition(currentImage); //given what the currentImage number is, set the carousel to the proper image that aligns with that number (first image is 0, next is 1, etc...)
    highlightCircle(currentImage); 
	return false; 
   }); 
   
 
   
  $("#carousel_prev").click(function(){ //on click of the 'previous' button...
    
	currentImage--; //decrease the currentImage number by one
	
	if (currentImage < 0) { //if currentImage already equals 0 and then the previous button is clicked... 
	  currentImage = numImages - 1; //set currentImage = the number that is associated with the last image
	}
	
    setPosition(currentImage); //given what the currentImage number is, set the carousel to the proper image that aligns with that number (first image is 0, next is 1, etc...)
    highlightCircle(currentImage); 
	return false; 
   }); 
   
   
   setInterval(function(){ //does the same thing that the 'next' button does, but on an automatic timer that fires every 5 seconds

     currentImage++; 
	
     	if (currentImage >= numImages) { 
	       currentImage = 0; 
     	}
	
    setPosition(currentImage); 
    highlightCircle(currentImage); 
   },5000);
   
   
   $("#image1Circle").click(function(){ 
     currentImage = 0; 
	 
	 setPosition(currentImage);
	 highlightCircle(currentImage); 
	 return false; 
   
   }); 
   
   $("#image2Circle").click(function() { 
     currentImage = 1; 
	 
	 setPosition(currentImage);
	 highlightCircle(currentImage); 
	 return false; 
   
   }); 
   
   $("#image3Circle").click(function() { 
     currentImage = 2; 
	 
	 setPosition(currentImage);
	 highlightCircle(currentImage); 
	 return false; 
   
   }); 
}); 

function setPosition(position){ 

  var px = imageWidth*position*(-1);    // sets the amount of pixels that the images in the carousel need to move in order to display the next one (times -1 because they should move to the left)
  $("#carousel ul").animate({left:px}, 500); //animates the carousel to move the ul (and the images inside of them) to the left the amount of pixels they should to desplay the requested image 

} 

function highlightCircle(currentImage) { 
   
  if (currentImage == 0) {
    $("#image1Circle").css("opacity", ".8");	
	$("#image2Circle").css("opacity", ".2");
	$("#image3Circle").css("opacity", ".2");					
  } else if (currentImage == 1) { 
     $("#image1Circle").css("opacity", ".2");	
	 $("#image2Circle").css("opacity", ".8");
	 $("#image3Circle").css("opacity", ".2");						 
  } else if (currentImage == 2) { 
	 $("#image1Circle").css("opacity", ".2");	
	 $("#image2Circle").css("opacity", ".2");
	 $("#image3Circle").css("opacity", ".8");							 
  } 
   
   
   }; 

//In the future, the code for the small bullets that function as links between the pictures and indicators for which picture the carousel is on would be more modular