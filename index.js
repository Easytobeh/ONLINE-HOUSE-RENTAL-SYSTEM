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
        window.location = "login.html";
    });
    
    $("#apartments").on("click", function(){
        window.location = "apartments.html";
    });

    $("#agent").on("click", function(){
        window.location = "agents.html";
    });

    // $.ajax({
    //         method: 'GET',
    //         url: 'http://localhost:8008/adminlist',
    //         dataType: 'json'
            

    // }).done(function(data){
    //     console.log(data);
    // });
    
    
    

})