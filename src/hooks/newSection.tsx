export function handleExploreButtonClick() {
    const newSection = document.getElementById('new-section');
    
    if (newSection) {
      newSection.style.display = 'block';
      
      setTimeout(() => {
        newSection.classList.add('animate');
      }, 100);
      
      newSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  
      setTimeout(() => {
        window.scrollBy(0, -100);
      }, 500);
    }
  }
  