document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const carouselImages = document.getElementById('carousel-images');
  const totalImages = carouselImages.children.length; 
  let autoScrollTimer;

  // Function to move the carousel
  function moveCarousel(direction) {
      currentIndex = (currentIndex + direction + totalImages) % totalImages;
      const offset = -currentIndex * 100;
      carouselImages.style.transform = `translateX(${offset}%)`;
      resetAutoScroll();
  }

  // Function to move carousel automatically
  function autoScroll() {
      moveCarousel(1); // Move to next image 
  }

  // Reset auto-scroll timer
  function resetAutoScroll() {
      clearInterval(autoScrollTimer); // Clear timer
      autoScrollTimer = setInterval(autoScroll, 3000); // restart timer
  }

  // Select arrows and attach event listeners
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  leftArrow.addEventListener('click', () => moveCarousel(-1));
  rightArrow.addEventListener('click', () => moveCarousel(1));
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(autoScrollTimer));
  carousel.addEventListener('mouseleave', resetAutoScroll);
  // Start auto-scroll
  autoScrollTimer = setInterval(autoScroll, 3000); // scroll speed
});