function validationform() {
    var x = document.forms["getinfo"]["username"].value;
    if (x == "") {
        alert("You forgot to fill a Name");
        return false;
    }
}