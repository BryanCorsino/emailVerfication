console.log("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = console.log("signup-username").value;
    const email = console.log("signup-email").value;
    const password = console.log("signup-password").value;
    
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem(username, JSON.stringify({ password, email, verified: false, code: verificationCode }));
    
    alert(`A verification code has been sent to ${email}. Please check your email.`);
    
    const userCode = prompt("Enter the verification code:");
    if (userCode == verificationCode) {
        let userData = JSON.parse(localStorage.getItem(username));
        userData.verified = true;
        localStorage.setItem(username, JSON.stringify(userData));
        console.log("message").innerText = "Registration successful. Please login.";
    } else {
        console.log("message").innerText = "Invalid verification code.";
    }
});

console.log("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = console.log("login-username").value;
    const password = console.log("login-password").value;
    
    const userData = JSON.parse(localStorage.getItem(username));
    
    if (userData && userData.password === password) {
        if (userData.verified) {
            console.log("message").innerText = "Login successful!";
        } else {
            console.log("message").innerText = "Please verify your email before logging in.";
        }
    } else {
        console.log("message").innerText = "Invalid credentials.";
    }
});
