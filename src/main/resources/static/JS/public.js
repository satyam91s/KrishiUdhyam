// Initialize Lucide icons
lucide.createIcons();

// Font size control
let currentFontSize = 1; // 1 is normal size
const fontSizeStep = 0.1;
const maxFontSize = 1.3;
const minFontSize = 0.8;

function updateFontSize(increase) {
    currentFontSize = increase 
        ? Math.min(currentFontSize + fontSizeStep, maxFontSize)
        : Math.max(currentFontSize - fontSizeStep, minFontSize);
    
    document.documentElement.style.setProperty('--content-scale', currentFontSize);
    
    // Update active state of font size controls
    document.getElementById('decreaseFont').disabled = currentFontSize <= minFontSize;
    document.getElementById('increaseFont').disabled = currentFontSize >= maxFontSize;
    
    // Save preference
    localStorage.setItem('preferredFontSize', currentFontSize);
}

// Load saved font size preference
function loadFontSizePreference() {
    const savedSize = localStorage.getItem('preferredFontSize');
    if (savedSize) {
        currentFontSize = parseFloat(savedSize);
        document.documentElement.style.setProperty('--content-scale', currentFontSize);
    }
}

// Initialize font size controls
function initFontSizeControls() {
    loadFontSizePreference();
    
    const controls = document.createElement('div');
    controls.className = 'font-size-controls';
    controls.innerHTML = `
        <button id="decreaseFont" class="btn btn-icon" title="Decrease font size">
            <i data-lucide="minus"></i>
        </button>
        <button id="resetFont" class="btn btn-icon" title="Reset font size">
            <i data-lucide="rotate-ccw"></i>
        </button>
        <button id="increaseFont" class="btn btn-icon" title="Increase font size">
            <i data-lucide="plus"></i>
        </button>
    `;
    
    document.body.appendChild(controls);
    lucide.createIcons();
    
    document.getElementById('decreaseFont').addEventListener('click', () => updateFontSize(false));
    document.getElementById('increaseFont').addEventListener('click', () => updateFontSize(true));
    document.getElementById('resetFont').addEventListener('click', () => {
        currentFontSize = 1;
        document.documentElement.style.setProperty('--content-scale', currentFontSize);
        localStorage.setItem('preferredFontSize', currentFontSize);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initFontSizeControls);

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

// Modal functionality
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

function showLoginModal() {
    loginModal.classList.add('active');
}

function hideLoginModal() {
    loginModal.classList.remove('active');
}

function showRegisterModal(userType = '') {
    registerModal.classList.add('active');
    if (userType) {
        const userTypeSelect = document.getElementById('registerUserType');
        userTypeSelect.value = userType;
    }
}

function hideRegisterModal() {
    registerModal.classList.remove('active');
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        hideLoginModal();
    }
    if (e.target === registerModal) {
        hideRegisterModal();
    }
});

// Form submissions
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add login logic here
    hideLoginModal();
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add registration logic here
    hideRegisterModal();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});