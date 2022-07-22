$(document).ready(function(){

    $("#sname, #sclass, #scountry").focus(function(){
        $(this).css("background-color","red");
    });

    $("#sname, #sclass, #scountry").blur(function(){
        $(this).css("background-color","");
    });

    $("#scountry").change(function(){
       $(this).css("background-color","aqua");
       var a = $(this).val();
       $("#test").html(a);
    });

    $("#sname, #sclass").select(function(){
        $(this).css("background-color","gold");
    });

    $("#sform").submit(function(){
        alert("form submitted");
    });

});