// Basic JavaScript for the app
console.log('App loaded');

// Example function
function greetUser() {
    alert('Welcome to My Flask App!');
}

// Attach event listener to a button if it exists
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', greetUser);
    }
});
