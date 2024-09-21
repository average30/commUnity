document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Show the loading spinner
    document.getElementById("loading").classList.remove("hidden");

    // Disable the sign in button
    document.getElementById("signInButton").disabled = true;

    // Simulate a delay for demonstration (e.g., 3 seconds)
    setTimeout(() => {
        // Here you would typically redirect or show a message
        alert("Signed In! (Simulated)");
        
        // Hide the loading spinner
        document.getElementById("loading").classList.add("hidden");

        // Enable the sign in button
        document.getElementById("signInButton").disabled = false;
    }, 3000); // 3 seconds delay
});
