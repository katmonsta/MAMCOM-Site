
//Navbar menu hide on click anywhere

$('body').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//Our Partners tooltip function

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

$("#carouselExampleIndicatorsModal").carousel({interval: false});


//arrow scroll effect
$(document).ready(function(){
        $(window).scroll(function(){
            $(".a").css("opacity", 1 - $(window).scrollTop() / ($('.a').height() / 2));
        });
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

//Collapse animation team profile
$('.btnProfileCard').on('click', function(e) {
  var $panel = $(this).closest('.panel');
  $('html,body').animate({
    scrollTop: $panel.offset().top
  }, 500);
});


*/


