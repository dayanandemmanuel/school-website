// Find the mobile hamburger icon and the navigation links menu
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

// Toggle the "active" class whenever the hamburger icon is clicked
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Optional: Keep your old button alert if you are testing on index.html
const welcomeBtn = document.getElementById('welcomeBtn');
if (welcomeBtn) {
    welcomeBtn.addEventListener('click', () => {
        alert('Welcome to our school portal! Explore our academic tracks down below.');
    });
}