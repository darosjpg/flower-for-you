
const images = [
  './assets/image-content/image-1.png',
  './assets/image-content/image-2.png',
  './assets/image-content/image-3.png',
  './assets/image-content/image-4.png',
  './assets/image-content/image-5.png',
  './assets/image-content/image-6.png'
];



// Connect to the elements
const imageContent = document.querySelector('.image-content');  
const mainButton = document.getElementById('main-button');     
const finalMessage = document.querySelector('.final-message');  


// Track what image we're at 
// =============================================
// Start with the first image (index 0)
let currentIndex = 0;


//  Update image function 
// =============================================
// Function to change images with fade effect
function updateImage() {
  // Fade out current image
  imageContent.style.opacity = 0;
  
  // Preload next image
  const img = new Image();
  img.src = images[currentIndex];
  
  // When image is loaded
  img.onload = () => {
    // Change to new image
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Fade in new image
    imageContent.style.opacity = 1;
  };
}



// Show first image when page loads
updateImage();


// =============================================
// Change image when button is clicked
mainButton.addEventListener('click', () => {
  // Go to next image
  currentIndex++;
  
  // Update if not at the end
  if (currentIndex < images.length) {
    updateImage();
  }
  
  // Once at the last image, show the final message and hide the button 
  if (currentIndex === images.length - 1) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
  }
});
