function ValidateCardNumber() {
    var cardnum = document.getElementById("txtCardNumber").value;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var number = regex.test(cardnum);
    if (number) {
        document.getElementById("Valid").style.display = "none";
    }
    else {
        document.getElementById("Valid").style.display = "block"
    }
}
function ValidateSecurityCode() {
    var security = document.getElementById("txtSecurityCode").value;
    var regex = /^[0-9]{3}$/;
    var secureNumber = regex.test(security);
    if (secureNumber) {
        document.getElementById("ValidSecurity").style.display = "none";
    }
    else {
        document.getElementById("ValidSecurity").style.display = "block"
    }
}
function ValidateName() {
    var userName = document.getElementById("txtName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var name = regex.test(userName);
    if (name) {
        document.getElementById("ValidName").style.display = "none";
    }
    else {
        document.getElementById("ValidName").style.display = "block"
    }
}
function ValidateAddress1() {
   
    var address = document.getElementById("txtAddress1").value;
    var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (validAddress) {
        document.getElementById("ValidAddress").style.display = "none";
    }
    else {
        document.getElementById("ValidAddress").style.display = "block"
    }
}

function ValidateAddress2() {

    var address = document.getElementById("txtAddress2").value;
    var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (!validAddress) {
        alert("Enter the Valid Address2")
    }
}
function ValidateAddress3() {

    var address = document.getElementById("txtAddress3").value;
    var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(userName);
    if (!validAddress) {
        alert("Enter the Valid Address3")
    }
}
function ValidateCity() {

    var city = document.getElementById("txtCity").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validCity = regex.test(city);
    if (validCity) {
        document.getElementById("ValidTown").style.display = "none";
    }
    else {
        document.getElementById("ValidTown").style.display = "block"
    }
}

function ValidateRegion() {

    var region = document.getElementById("txtRegion").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validRegion = regex.test(region);
    if (!validRegion) {
        alert("Enter the Valid Region")
    }
}
function ValidatePin() {

    var pin = document.getElementById("txtPostcode").value;
    var regex = /^[0-9]{6}(?:-[0-9]{4})?$/;
    var validPin = regex.test(pin);
    if (validPin) {
        document.getElementById("ValidPin").style.display = "none";
    }
    else {
        document.getElementById("ValidPin").style.display = "block"
    }
}

function ValidatePhone() {

    var phone = document.getElementById("txtTelephone").value;
    var regex = /^[6789]\d{9}$/;
    var validPhone = regex.test(phone);
    if (!validPhone) {
        alert("Enter the Valid Phone Number")
    }
}
function ValidateMail() {

    var mail = document.getElementById("txtEmail").value;
    var regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    var validMail = regex.test(mail);
    if (validMail) {
        document.getElementById("ValidMail").style.display = "none"
    }
    else {
        document.getElementById("ValidMail").style.display = "block"
    }
}

function Submit() {
    ValidateCardNumber();
    ValidateName();
    ValidateSecurityCode();
    ValidatePin();
    ValidateMail();
    ValidateAddress1();
    ValidateCity();
    
}


