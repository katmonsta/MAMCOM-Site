
//Navbar menu hide on click anywhere

$('body').on('click', function(){
	 "use strict";
    $('.navbar-collapse').collapse('hide');
});





/* -----------Code on hold!------------------
// Navbar collapse on scroll below 100px
$(document).ready(function () {

    changeNavbar();
	
    $(window).scroll(function () {
        changeNavbar();
    });


    function changeNavbar() {

        var navbar = $("#myNav");

        if ($(this).scrollTop() >= 20) {

            navbar.removeClass("navbar-expand-lg");
			$("#logoText").hide();
			

        } else if ($(this).scrollTop() < 100) {

            navbar.addClass("navbar-expand-lg");
			$("#logoText").show();						
        }
    }
});


// animate logo text on nav collapse 
$("#logoText").animate({width: "toggle”});’

*/


