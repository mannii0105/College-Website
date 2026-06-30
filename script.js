// --- 1. Main Navigation Logic (Home vs Login) ---
const homeBtn = document.getElementById('home-btn');
const loginBtn = document.getElementById('login-btn');
const homeSection = document.getElementById('home-section');
const loginSection = document.getElementById('login-section');

homeBtn.addEventListener('click', () => {
    homeSection.classList.remove('hidden');
    loginSection.classList.add('hidden');
    homeBtn.classList.add('active');
    loginBtn.classList.remove('active');
});

loginBtn.addEventListener('click', () => {
    loginSection.classList.remove('hidden');
    homeSection.classList.add('hidden');
    loginBtn.classList.add('active');
    homeBtn.classList.remove('active');
});

// --- 2. Sub-Navigation Logic (Student vs Staff Login) ---
const studentToggle = document.getElementById('student-toggle');
const staffToggle = document.getElementById('staff-toggle');
const studentForm = document.getElementById('student-form');
const staffForm = document.getElementById('staff-form');

studentToggle.addEventListener('click', () => {
    studentForm.classList.remove('hidden');
    staffForm.classList.add('hidden');
    studentToggle.classList.add('active');
    staffToggle.classList.remove('active');
});

staffToggle.addEventListener('click', () => {
    staffForm.classList.remove('hidden');
    studentForm.classList.add('hidden');
    staffToggle.classList.add('active');
    studentToggle.classList.remove('active');
});

// --- 3. NEW: Show/Hide Password Feature ---
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}