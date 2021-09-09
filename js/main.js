function EmailValidation(enteredEmail) {

    var mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if(enteredEmail.value.match(mailFormat)) {

        alert("You have entered a valid email address!");

        document.input.email.focus();

        return true;

    } else {

        alert("You have entered an invalid email address!");

        document.input.email.focus();

        return false;

    }   

}