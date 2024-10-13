document.addEventListener('DOMContentLoaded', function() {
    console.log('Resume website loaded successfully.');
    const sections = document.querySelectorAll('.about, .interests, .skills');

    sections.forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200);
    });
});
