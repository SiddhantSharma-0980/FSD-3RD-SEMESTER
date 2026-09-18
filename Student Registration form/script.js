document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let course = document.getElementById("course").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;

    // Additional fields
    let dob = document.getElementById("dob").value;
    let college = document.getElementById("college").value;
    let city = document.getElementById("city").value;

    let message = document.getElementById("message");

    // Checking required fields
    if (
        name === "" ||
        email === "" ||
        password === "" ||
        course === "" ||
        contact === "" ||
        address === "" ||
        dob === "" ||
        college === "" ||
        city === ""
    ) {
        message.innerHTML = "Please fill all the fields!";
        message.style.color = "red";
        return;
    }
     {
        num.innerHTML = "Please enter valid Number";
        num.style.color = "red";
        return;
    }

    if( contact.length < 10 && contact.length > 12){
        message.innerHTML = "Please enter a valid contact number!";
        message.style.color = "red";
        return;
    }

    // Password validation
    if (password.length < 6) {
        message.innerHTML = "Password must contain at least 6 characters!";
        message.style.color = "red";
        return;
    }

    // Contact number validation
    if (contact.length !== 10 || isNaN(contact)) {
        message.innerHTML = "Please enter a valid 10-digit contact number!";
        message.style.color = "red";
        return;
    }

    

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    console.log("Student Name:", name);
    console.log("Email:", email);
    console.log("Course:", course);
    console.log("Date of Birth:", dob);
    console.log("College:", college);
    console.log("City:", city);

});