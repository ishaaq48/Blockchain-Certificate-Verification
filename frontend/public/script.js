// Function to handle scroll effects
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.getElementById('login-button').addEventListener('click', function() {
    // Redirect to the login page
    window.location.href = 'login.html'; // Change 'login.html' to the actual URL of your login page
});

document.getElementById('signup-button').addEventListener('click', function() {
    // Redirect to the login page
    window.location.href = 'login.html'; // Change 'login.html' to the actual URL of your login page
});

// Event listener for the verify button
document.getElementById('verify-button').addEventListener('click', function() {
    alert('Redirecting to the certificate verification page...');
    // Here you can add the logic to redirect to the verification page
    // window.location.href = 'verification.html'; // Uncomment and set the correct URL
});

// Event listener for the CTA button
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Redirecting to the verification process...');
    // Here you can add the logic to redirect to the verification page
    // window.location.href = 'verification.html'; // Uncomment and set the correct URL
});

// Function to toggle FAQ answers
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+"; // Change icon to plus
    } else {
        answer.style.display = "block";
        icon.textContent = "-"; // Change icon to minus
    }
}

// Event listener for the newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Here you can add logic to handle the email subscription
    alert(`Thank you for subscribing with the email: ${email}`);
    
    // Clear the input field
    emailInput.value = '';
});