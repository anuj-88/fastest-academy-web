
// Simple scroll reveal utility
export const initScrollReveal = () => {
  // Get all elements with class 'reveal'
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150; // How many pixels from viewport bottom to trigger
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };
  
  // Add event listener
  window.addEventListener('scroll', revealOnScroll);
  
  // Initial check for elements in view on page load
  setTimeout(revealOnScroll, 300);
  
  return () => {
    window.removeEventListener('scroll', revealOnScroll);
  };
};
