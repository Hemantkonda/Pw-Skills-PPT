function validateForm() {
    // Get form field values
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var password = document.forms["myForm"]["password"].value;
    var age = document.forms["myForm"]["age"].value;
    var gender = document.forms["myForm"]["gender"].value;
    var date = document.forms["myForm"]["date"].value;
    var color = document.forms["myForm"]["color"].value;

    // Perform validation
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    // Email validation regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return false;
    }

    if (phone === "") {
        alert("Phone number must be filled out");
        return false;
    }

    // Phone number validation regex pattern
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Invalid phone number format. Please enter a 10-digit number");
        return false;
    }

    if (password === "") {
        alert("Password must be filled out");
        return false;
    }

    if (age === "") {
        alert("Age must be filled out");
        return false;
    }

    // Age validation (must be a number)
    if (isNaN(age)) {
        alert("Age must be a number");
        return false;
    }

    if (gender === "") {
        alert("Gender must be selected");
        return false;
    }

    if (date === "") {
        alert("Date must be filled out");
        return false;
    }

    if (color === "") {
        alert("Color must be selected");
        return false;
    }

    // Form is valid, can submit
    return true;
}