// Initialize Lucide icons
lucide.createIcons();

// Password visibility toggle
document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        const input = e.target.closest('.password-input').querySelector('input');
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;
        e.target.setAttribute('data-lucide', type === 'password' ? 'eye' : 'eye-off');
        lucide.createIcons();
    });
});

// // Form validation and submission
// const forms = document.querySelectorAll('form');
// forms.forEach(form => {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         // Basic form validation
//         const inputs = form.querySelectorAll('input[required], select[required]');
//         let isValid = true;

//         inputs.forEach(input => {
//             if (!input.value.trim()) {
//                 isValid = false;
//                 input.classList.add('error');
//             } else {
//                 input.classList.remove('error');
//             }
//         });

//         // Password match validation for registration forms
//         if (form.id.includes('Register')) {
//             const password = form.querySelector('input[type="password"]');
//             const confirmPassword = form.querySelectorAll('input[type="password"]')[1];
            
//             if (password.value !== confirmPassword.value) {
//                 isValid = false;
//                 confirmPassword.classList.add('error');
//                 alert('Passwords do not match');
//             }
//         }

//         if (isValid) {
//             // Here you would typically send the form data to your server
//             console.log('Form submitted successfully');
            
//             // Redirect based on form type and user type
//             const userType = form.querySelector('select')?.value || form.id.includes('farmer') ? 'farmer' : 'purchaser';
            
//             if (form.id === 'loginForm') {
//                 window.location.href = `${userType}-dashboard.html`;
//             } else {
//                 // For registration, redirect to login page
//                 window.location.href = 'login';
//             }
//         }
//     });
// });

// Input error handling
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            input.classList.remove('error');
        }
    });
});