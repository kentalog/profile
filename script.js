document.addEventListener('DOMContentLoaded', () => {
    // Add staggered animation delay to link cards
    const links = document.querySelectorAll('.link-card');
    links.forEach((link, index) => {
        link.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    });

    // Simple tilt effect for profile image
    const profileContainer = document.querySelector('.profile-image-container');
    
    if (profileContainer) {
        profileContainer.addEventListener('mousemove', (e) => {
            const rect = profileContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPct = x / rect.width - 0.5;
            const yPct = y / rect.height - 0.5;
            
            const rotateX = yPct * -20;
            const rotateY = xPct * 20;
            
            profileContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
        });
        
        profileContainer.addEventListener('mouseleave', () => {
            profileContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    }
});
