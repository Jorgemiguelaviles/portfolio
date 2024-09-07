document.getElementById('explore-button').addEventListener('click', function() {
    var newSection = document.getElementById('new-section');
    
    newSection.style.display = 'block';
    
    setTimeout(function() {
        newSection.classList.add('animate');
    }, 100);
    
    newSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    setTimeout(function() {
        window.scrollBy(0, -100);
    }, 500);
});
