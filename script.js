document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const carousel = document.querySelector('.carousel');
    let currentSlide = 0;

    // Initial theme setup
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');

    // Theme Toggle
    themeToggle.innerHTML = `
        <svg class="theme-icon moon" viewBox="0 0 24 24" width="24" height="24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <svg class="theme-icon sun" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
    `;

    function updateThemeIcon() {
        const isDarkMode = body.classList.contains('dark-mode');
        document.querySelector('.moon').style.display = isDarkMode ? 'block' : 'none';
        document.querySelector('.sun').style.display = isDarkMode ? 'none' : 'block';
    }

    // Initial icon state
    updateThemeIcon();

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        updateThemeIcon();
    });

    // Enhanced Carousel Animation
    function moveCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        
        // Remove active class from all slides
        slides.forEach(slide => slide.style.opacity = '0.7');
        
        // Add active class to current slide
        slides[currentSlide].style.opacity = '1';
        
        // Move carousel
        currentSlide = (currentSlide + 1) % 4;
        carousel.style.transform = `translateX(-${currentSlide * 25}%)`;
    }

    // Initial state
    moveCarousel();
    
    // Start carousel animation
    setInterval(moveCarousel, 3000);

    // Add hover effect to navbar brand
    const navBrand = document.querySelector('.nav-brand');
    navBrand.addEventListener('mouseover', () => {
        navBrand.style.textShadow = '0 0 10px var(--primary-green)';
    });
    navBrand.addEventListener('mouseout', () => {
        navBrand.style.textShadow = 'none';
    });
});