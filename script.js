
/* JavaScript for Green Earth Initiative website
 */

const messageDisplay = document.getElementById('messageDisplay'); 
// User feedback
const sendButton = document.getElementById('sendButton'); // Submit button for email form

sendButton.addEventListener('click', handleEmailSubmission);

//email form submission
function handleEmailSubmission() {
  // Get the email input
  const emailInput = document.getElementById('emailInput');
  const userEmail = emailInput.value;
  
  // Input validation
  if (userEmail.trim() === '') {
    //error message
    messageDisplay.innerHTML = 'Please enter your email address.';
    messageDisplay.className = 'error-message'; 
    return; \
    // Exit function early if validation fails
  }
  
// Email validation successful 
  messageDisplay.innerHTML = `Email sent to ${userEmail}! We'll contact you soon with more information about our sustainability initiatives.`;
  messageDisplay.className = 'success-message';
  
// Clear the input field
  emailInput.value = '';
}
