// Hide splash screen after a certain time (e.g., 2 seconds)
window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('splash-screen').style.display = 'none';
    }, 2000); // 2000 milliseconds = 2 seconds
  });

  // Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.querySelector('.get-started');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Function to handle login
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Perform validation here (e.g., check if username and password are not empty)
  
  // Dummy validation for demonstration purposes
  if (username !== '' && password !== '') {
    alert('Login successful!'); // Replace with actual login logic
    closeModal();
  } else {
    alert('Please enter a valid username and password.');
  }
}

// Function to handle signup
function signup() {
  var newUsername = document.getElementById('new-username').value;
  var newPassword = document.getElementById('new-password').value;
  
  // Perform validation here (e.g., check if newUsername and newPassword meet requirements)
  
  // Dummy validation for demonstration purposes
  if (newUsername !== '' && newPassword !== '') {
    alert('Sign up successful!'); // Replace with actual signup logic
    closeModal();
  } else {
    alert('Please enter a valid new username and password.');
  }
}

// Function to switch between login and signup forms
function switchForm() {
  var loginForm = document.getElementById('login-form');
  var signupForm = document.getElementById('signup-form');
  
  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    document.getElementById('switch-text').innerHTML = "Don't have an account? <a href='#' onclick='switchForm()'>Sign Up</a>";
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    document.getElementById('switch-text').innerHTML = "Already have an account? <a href='#' onclick='switchForm()'>Login</a>";
  }
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.querySelector('.get-started');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Toggle chatbot container visibility when chatbot button is clicked
document.getElementById('chatbot-btn').addEventListener('click', function() {
  var chatbotContainer = document.getElementById('chatbot-container');
  chatbotContainer.style.display = chatbotContainer.style.display === 'block' ? 'none' : 'block';
});

