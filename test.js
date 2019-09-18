$(document).ready(function(){

    $("#adminlogin").on("click", function(){
        $.getJSON("admin.json", function(data){
            $.each(data, function(index, admin){
                $("ul#users").append('<li>'+admin.username+ '</ul>');
        
            });
        
        });
        
    });
}); 