
$(function(){

$("#adminlogin").on("click", function(){

    let username = $("input[name=adminuser]").val();
    let password = $("input[name=adminpassword]").val();
    console.log(username);
    console.log(password);
    alert('http://localhost:8008/user?username='+username+'&password='+password);
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8008/user?username='+username+'&password='+password,
        dataType: 'json'
    
        // success: function(result){
        //     alert(result);
        // }
        

}).done(function(data){
    alert(url);
 });

});
});