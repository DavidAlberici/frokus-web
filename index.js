// Get references to the input and button elements
const emailInput = document.getElementById('email');
const emailButton = document.getElementById('email-button');
const emailButtonLabel = document.getElementById('email-button-label');
const emailError = document.getElementById('email-error');
const emailSuccess = document.getElementById('email-success');
const emailSpinner = document.getElementById('email-spinner');

// Add event listener to the button
emailButton.addEventListener('click', () => {
  // Clear previous result messages
  hideEmailResultMessages()
  // Show spinner instead of label
  displaySpinner()
  
  setTimeout(() => {
    // Get the user input value
    const email = emailInput.value;
    // Create the URL with the user input as a query parameter
    const url = `https://api.frokus.com/waiting-list-emails?email=${encodeURIComponent(email)}`;
    fetch(url, {
      method: 'POST',
    })
      .then(response => {
        display(emailSuccess)
        console.log('Request sent successfully!');
      })
      .catch(error => {
        display(emailError)
        console.error('Error sending request:', error);
      })
      .finally(() => {
        hideSpinner()
      });
  }, 1500)
});

function hide(element) {
  element.style.display = "none"
}

function display(element) {
  element.style.display = "block"
}

function displaySpinner() {
  display(emailSpinner)
  hide(emailButtonLabel)
  emailButton.disabled = true
}

function hideSpinner() {
  hide(emailSpinner)
  display(emailButtonLabel)
  emailButton.disabled = false
}

function hideEmailResultMessages() {
  hide(emailError)
  hide(emailSuccess)
}