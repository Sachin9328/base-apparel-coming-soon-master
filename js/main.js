function ValidateEmail(inputText)
{
    var x = document.forms["input"]["email"].value;
    if (x == "") {
        alert("Please enter an email address!");
        return false;
    } else {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(inputText.value.match(mailformat))
        {
            alert("Thank you! We will contact you with further announcements!");
            return true;
        }
        else
        {
            alert("Please enter a valid email address!");
            return false;
        }
    }
}
