$(function(){

    //****Event handler for homepage buttons*****
   
    $("#home-btn").click (function(){
        window.location = "index.html";
    });
    $("#learn-btn").on("click", function(){
        alert("You clicked me");
    });

    $("#our-team").on("click", function(){
        alert("You clicked me");
    });

    $("#search").on("mouseenter", function(){
        alert("You clicked me");
    });

    $("#contact").on("click", function(){
        alert("You clicked me");
    });

    $("#our-team").on("click", function(){
        alert("You clicked me");
    });

    $("#sign-in").on("click", function(){
        window.location = "signIn.html";
    });
    
    $("#apartments").on("click", function(){
        window.location = "apartments.html";
    });

    
    
    

})