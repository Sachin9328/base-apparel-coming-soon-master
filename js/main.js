$(".input").on('submit', function(e){
    e.preventDefault();
        if ( !validEmail( $(".email").val() ) ) {
            $("#error").html("Please enter a valid email address.");
    } 
})

function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};  
