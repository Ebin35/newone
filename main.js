function validateForm() {
    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // var password = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    // Validate name
    if (name === "") {
      document.getElementById("nameError").innerHTML = "Name is required";
      return false;
    }

    // Validate email
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Email is required";
      return false;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").innerHTML = "Invalid email format";
      return false;
    }

  
    // Validate Mobile Number
    const mobile = document.getElementById("number").value;
    const mobilePattern = /^\d{10}$/; // Assuming a 10-digit mobile number
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").textContent = "Please enter a valid 10-digit mobile number.";
        return false;
    }
      
    
    // Form is valid
    return true;
  }

  function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
