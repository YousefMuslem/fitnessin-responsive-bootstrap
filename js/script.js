$(document).ready(function () {
    //Get window size and make it with viewport size
    var newHeight = $(window).innerHeight()  + "px";
    var newWidth = $(window).innerWidth() + "px";
    $(".img-fluid").css("height", newHeight);
    $(".img-fluid").css({"width":newWidth,"backgroundSize":"cover"});
    //End getting window size

    //set background color for navbar when scroll bacome after image
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 550) {
            $(".navbar").css({"background-color":"rgb(58, 55, 55,.8)","transition":".9s"});
            $(".navbar-nav a").css("color", "#FFF");
        } else {
            $(".navbar").css("backgroundColor", "");
            $(".navbar-nav a").css("color", "");
               }
    });
    //End navbar setting background color
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

});

function showLoginModal() {
    $('#readMore').modal('toggle');
}
