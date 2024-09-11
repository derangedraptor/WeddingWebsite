/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerDrop() {
  var x = document.getElementById("myLinks");

  if (x.style.right === "-100%" || x.style.right === "") {
    x.style.right = "0%"; // Slide in from the right
  } else {
    x.style.right = "-100%"; // Slide out of view to the right
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('.carousel');
  const images = Array.from(document.querySelectorAll('.carousel img'));

  // Duplicate images
  const cloneImages = () => {
    images.forEach(img => {
      const clone = img.cloneNode();
      carousel.appendChild(clone);
    });
  };
  
  cloneImages();

  // Scroll continuously
  const scrollSpeed = 2; // Adjust this for speed
  let scrollAmount = 0;

  const scrollCarousel = () => {
    scrollAmount += scrollSpeed;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
    
    if (scrollAmount >= carousel.scrollWidth / 2) {
      scrollAmount = 0; // Reset to prevent jumps
      carousel.style.transition = 'none'; // Disable transition during reset
      carousel.style.transform = `translateX(0)`;
      
      // Allow some time for the reset to apply
      setTimeout(() => {
        carousel.style.transition = 'transform 0.5s linear'; // Re-enable transition
      }, 50);
    }
    
    requestAnimationFrame(scrollCarousel);
  };

  scrollCarousel();
});