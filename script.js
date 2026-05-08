window.onload = function(){

    const today = new Date();

    document.getElementById("currentDate")
    .innerHTML = today.toLocaleDateString();
}

function updateSlider(){

    document.getElementById("salaryValue")
    .innerText =
    document.getElementById("salary").value;
}

function toggleSSN(){

    let ssnField =
    document.getElementById("ssn");

    if(ssnField.type === "password"){

        ssnField.type = "text";
    }

    else{

        ssnField.type = "password";
    }
}

function validateFirstName(){

    let value =
    document.getElementById("firstName").value;

    let error =
    document.getElementById("firstNameError");

    let regex = /^[A-Za-z'-]+$/;

    if(value === ""){
        error.innerHTML = "Required";
    }

    else if(!regex.test(value)){
        error.innerHTML = "Letters only";
    }

    else{
        error.innerHTML = "";
    }
}

function validateLastName(){

    let value =
    document.getElementById("lastName").value;

    let error =
    document.getElementById("lastNameError");

    let regex = /^[A-Za-z'-]+$/;

    if(value === ""){
        error.innerHTML = "Required";
    }

    else if(!regex.test(value)){
        error.innerHTML = "Letters only";
    }

    else{
        error.innerHTML = "";
    }
}

function validateDOB(){

    let dob =
    new Date(document.getElementById("dob").value);

    let today = new Date();

    let age =
    today.getFullYear() - dob.getFullYear();

    let error =
    document.getElementById("dobError");

    if(dob > today){
        error.innerHTML = "Future DOB invalid";
    }

    else if(age > 120){
        error.innerHTML = "Invalid age";
    }

    else{
        error.innerHTML = "";
    }
}

function validateSSN(){

    let ssn =
    document.getElementById("ssn").value;

    let error =
    document.getElementById("ssnError");

    ssn = ssn.replace(/\D/g,'');

    if(ssn.length > 3 && ssn.length <=5)
    ssn =
    ssn.slice(0,3) + "-" + ssn.slice(3);

    if(ssn.length > 5)
    ssn =
    ssn.slice(0,3) + "-" +
    ssn.slice(3,5) + "-" +
    ssn.slice(5,9);

    document.getElementById("ssn").value = ssn;

    if(ssn.length !== 11){
        error.innerHTML = "Invalid SSN";
    }

    else{
        error.innerHTML = "";
    }
}
