/*
File Name: Menu.js 
Author: Samantha Voigt
Date: 4/27/2014
Purpose: To create a menu on the Time4Cornhole website that will hide all buttons except the 'menu' button, unless the menu button is clicked. In that event, the 
rest of the buttons will drop/slide down, seemingly from underneath the menu button and stay there until the menu button is clicked again. When the menu button is clicked 
and all the buttons are already visible, the menu will compress/slide up again. 

This will also highlight nav button for the page that the user is on. 


note-- this ended up way simpler than I thought it would be, because of jQuery. Hopefully I made up for it with the image carousel, which is a little more complicated. 
*/

$(document).ready(function() {

  $("#navbar ul li:nth-of-type(1)").click(function() { //on click of the first li in the navbar (which is the menu button)... 

    if ($("#navbar ul li.hiddenmenu").hasClass("hidden")) { //if the hiddenmenu list items are hidden, then... 
	    $("#navbar ul li").slideDown() //slide them down 
	                      .removeClass("hidden"); //and make them visible 
    }
	
	else { //if they are not hidden... (if the menu button has already been clicked)
	  $("#navbar ul li.hiddenmenu").slideUp() //slide up the hiddenmenu list items and
	                               .addClass("hidden"); //hide them by adding a class
	} 
	
  }); 

  pageHighlight();
  
}); 

  
  function pageHighlight() { //a function to highlight the navbar button for the page that the user is on
  
   var pageNames = ["home", "about", "gallery", "construction", "bags", "rules", "prices", "feedback", "faq"]; //the names of all the pages in the site
  
    for (var i=0; i < pageNames.length; i++) { //loop through all elements in pagesNames to find the one that matches the page we're on
       if ($("main#" + pageNames[i] ).length > 0){ //since jQuery will always return something, including an empty array, addding .length>0 makes sure that the element that I want exists on the page, by making sure there is something in the array that is returned
          $('#navbar a[href="' + pageNames[i] + '.html"]').css("color", "#e6e6e6"); //change the color of the navbar element with the link that matches the name of the page
	   }
    }
 
  } 
  
  