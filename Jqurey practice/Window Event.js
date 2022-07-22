$(document).ready(function(){

    $(window).resize(function(){
        console.log("you are resizing window");
    });

    $("#box").scroll(function(){
        $(this).css("color","gold");
        console.log("you are scrolling");
    });
});