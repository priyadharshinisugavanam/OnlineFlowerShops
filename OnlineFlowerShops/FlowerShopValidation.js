function ValidateCardNumber() {
    var cardnum = document.getElementById("txtCardNumber").value;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var number = regex.test(cardnum);
    if (!number) {
        alert("Enter the valid  card number");
    }
}
function ValidateSecurityCode() {
    var security = document.getElementById("txtSecurityCode").value;
    var regex = /^[0-9]{3}$/;
    var secureNumber = regex.test(security);
    if (!secureNumber) {
        alert("Enter the Valid security number")
    }
}
function ValidateName() {
    var userName = document.getElementById("txtName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var name = regex.test(userName);
    if (!name) {
        alert("Enter the Valid name")
    }
}
function ValidateAddress1() {
   
    var address = document.getElementById("txtAddress1").value;
    var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (!validAddress) {
        alert("Enter the Valid Address1")
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
    if (!validCity) {
        alert("Enter the Valid Town/City")
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
    if (!validPin) {
        alert("Enter the Valid Pincode")
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
    if (!validMail) {
        alert("Enter the Valid Mail id")
    }
}

function Submit() {
    var cardNumber = document.getElementById("txtCardNumber").value.length;
    var mail = document.getElementById("txtEmail").value.length;
    var securityCode = document.getElementById("txtSecurityCode").value.length;
    var name = document.getElementById("txtName").value.length;
    var address = document.getElementById("txtAddress1").value.length;
    var town = document.getElementById("txtCity").value.length;
    var pin = document.getElementById("txtPostcode").value.length;
    

    if (cardNumber > 0 && mail > 0 && securityCode > 0 && name > 0 && address >0 && town >0 && pin >0) {
        alert("successfull")
    }
    else {
       
        alert("Enter the Required fields")
    }
}


