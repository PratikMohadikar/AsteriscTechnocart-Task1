// Access the registration form
const registrationForm = document.getElementById("registration-form");

// Add an event listener to the form submission
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the user's name and email from the form
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const name = nameInput.value;
  const email = emailInput.value;

  // Perform any desired validation or processing with the form data
  // For example, you can send the data to a server using AJAX or fetch API

  // Display a thank you message
  alert(`Thank you, ${name}! You have successfully registered with the email ${email}.`);
  
  // Reset the form
  registrationForm.reset();
});
