// Get the button element
const scrollUpBtn = document.getElementById('scroll-up-btn');

// Add a scroll event listener to the window object
window.addEventListener('scroll', function () {
  // If the user has scrolled down more than 20 pixels, show the button
  if (window.scrollY > 20) {
    scrollUpBtn.style.display = 'block';
  } else {
    // Otherwise, hide the button
    scrollUpBtn.style.display = 'none';
  }
});
// Add a click event listener to the button
scrollUpBtn.addEventListener('click', function () {
  // Scroll the page to the top with smooth animation
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
