const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode'); // Light mode ni yoqish/o'chirish
    themeToggle.classList.toggle('fa-moon'); // Ikona o'zgarishi
    themeToggle.classList.toggle('fa-sun'); // Ikona o'zgarishi
});