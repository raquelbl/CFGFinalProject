function validateform(){
    var x = document.forms["guestinfo"]["User Name"].value;
    if (x=="")
{
alert("Please fill your Name");
return false;
}
}