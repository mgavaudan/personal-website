$( "#aboutme" ).click(function() {
   $(".navbar").css("display", "inline-block");
   $(".title").fadeOut( "fast", function() {});
   $(".scene").fadeOut( "fast", function() {});
   $(".links").fadeOut( "fast", function() {});
   $( ".wrapper" ).animate({
    height: "+=35em",
    top: "-=30%"
  }, "slow" );
   $(".wrapper" ).css( "background", "white" );
   $(".navbar").fadeIn("fast", function(){});
   $(".wrapperNav").css("background", "rgba(0, 0, 0, 0.5)");
   $(".aboutmepage").css("display", "block");
});


$( "#projects" ).click(function() {
   $(".navbar").css("display", "inline-block");
   $(".title").fadeOut( "fast", function() {});
   $(".scene").fadeOut( "fast", function() {});
   $(".links").fadeOut( "fast", function() {});
   $( ".wrapper" ).animate({
    height: "+=35em",
    top: "-=30%"
  }, "slow" );
   $(".wrapper" ).css( "background", "white" );
   $(".navbar").fadeIn("fast", function(){});
   $(".wrapperNav").css("background", "rgba(0, 0, 0, 0.5)");
   $(".projectpage").css("display", "block");
});

$( "#pro" ).click(function() {
   $(".aboutmepage").css("display", "none");
   $(".projectpage").css("display", "block");
});

$( "#abo" ).click(function() {
   $(".projectpage").css("display", "none");
   $(".aboutmepage").css("display", "block");
});




