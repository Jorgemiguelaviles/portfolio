document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        skillItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            console.log(`Item top: ${rect.top}, bottom: ${rect.bottom}, window height: ${windowHeight}`);
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                item.classList.add('in-view');
            } else {
                item.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica visibilidade ao carregar a página
});
