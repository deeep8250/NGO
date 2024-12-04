document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
    const backgroundImages = [
      "url('images/ngo_picture2.jpg')",  // Image 2
      "url('images/ngo_picture3.webp')", // Image 3
      "url('images/poverty3.jpeg')", // Image 3
 
    ];
    
    let currentIndex = 0;
  
    function changeBackgroundImage() {
      // Change the background image smoothly
      heroSection.style.backgroundImage = backgroundImages[currentIndex];
  
      // Move to the next image in the array
      currentIndex = (currentIndex + 1) % backgroundImages.length;
    }
  
    // Initial background image
    changeBackgroundImage();
  
    // Set interval to change background image every 5 seconds
    setInterval(changeBackgroundImage, 5000);
  });
  