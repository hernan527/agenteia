// ... dentro del observador IntersectionObserver
entries.forEach(entry => {
    if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || '0';
        entry.target.style.transitionDelay = delay + 's'; // Aplica el retraso antes de la animación
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    }
});
// ...