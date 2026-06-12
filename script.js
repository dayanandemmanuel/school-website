// Responsive Mobile Navigation Drawer Logic Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Homepage Exploration Welcome Notification Action Trigger
const welcomeBtn = document.getElementById('welcomeBtn');
if (welcomeBtn) {
    welcomeBtn.addEventListener('click', () => {
        alert('Welcome to our school portal! Explore our academic tracks down below.');
    });
}

// Admissions Contact Validation Processing Action Form Event Interceptor
const admissionForm = document.getElementById('admissionForm');
const formStatus = document.getElementById('formStatus');

if (admissionForm && formStatus) {
    admissionForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop standard default browser page routing refreshes

        // Capture individual field configurations for response modeling
        const parentName = document.getElementById('parentName').value;
        const gradeLevel = document.getElementById('gradeLevel').value;

        // Display a personalized user message block content context 
        formStatus.textContent = `Thank you, ${parentName}! Your inquiry for our ${gradeLevel} program has been received. Our team will contact you soon.`;
        formStatus.className = "form-status success";
        formStatus.style.display = "block";

        // Reset the interface field metrics 
        admissionForm.reset();
        
        // Smooth scroll adjustment interface framework centering view focus targeting
        formStatus.scrollIntoView({ behavior: 'smooth' });
    });
}