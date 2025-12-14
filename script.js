// Initialize tooltips and smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dark Mode Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const toggleIcon = themeToggle.querySelector('i');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        toggleIcon.classList.remove('bi-moon-fill');
        toggleIcon.classList.add('bi-sun-fill');
    } else if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        toggleIcon.classList.remove('bi-sun-fill');
        toggleIcon.classList.add('bi-moon-fill');
    }

    themeToggle.addEventListener('click', () => {
        let theme = 'light';
        if (!document.body.hasAttribute('data-theme')) {
             if (prefersDarkScheme.matches) {
                 theme = 'light'; // If system is dark, toggle to light
             } else {
                 theme = 'dark'; // If system is light, toggle to dark
             }
        } else {
             theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        }

        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update Icon
        if (theme === 'dark') {
            toggleIcon.classList.remove('bi-moon-fill');
            toggleIcon.classList.add('bi-sun-fill');
        } else {
            toggleIcon.classList.remove('bi-sun-fill');
            toggleIcon.classList.add('bi-moon-fill');
        }
    });

    console.log("Portfolio loaded successfully! 🚀");
});
