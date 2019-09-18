
$(function(){

$("#adminlogin").on("click", function(){

    let username = $("input[name=adminuser]").val();
    let password = $("input[name=adminpassword]").val();
    
    $.getJSON("admin.json", function(data){
        $.each(data, function(key, value){
            if (value.username == username && value.password == password){
                window.location = "adminPage.html";
            }
            else{
                alert("Unauthorized credentials");
                window.location = "login.html";
            }
        });

    });





    //alert('http://localhost:8008/user?username='+username+'&password='+password);
//     $.ajax({
//         method: 'GET',
//         url: 'http://localhost:3003/adminCredentials',
//         dataType: 'json',
//         success: function(data) {   
//             alert("inside success");
//             $.each(data, function (key, value) {
//             alert(value.username);
//             //console.log(value.password);
//                 // if (value.uname != '' && value.password!='')
//                 //     {
//                 //         if(value.username!=uname && value.password!=password)
//                 //         alert("password correct");
//                 //         return false;
//                 //     }
//             });


//         },

//         error: function() {

//         }
        
//  })

});
});