function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  const copyrightElement = document.getElementById("copyright");
  const currentYear = new Date().getFullYear();
  copyrightElement.innerHTML = `Copyright &#169; ${currentYear} Oluwole Afolabi. All Rights Reserved.`;
});

// Function to handle GIF animation
function handleThoughtBubbleAnimation() {
  const thoughtBubble = document.querySelector('.thought-bubble');
  const gif = thoughtBubble.querySelector('img');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        thoughtBubble.classList.add('visible');
        gif.classList.add('playing');
        
        // Load the PNG image
        const staticImage = new Image();
        staticImage.src = './assets/shrek-meme.png';
        
        // Load the GIF to get its duration
        const tempGif = new Image();
        tempGif.src = gif.src;
        
        tempGif.onload = () => {
          setTimeout(() => {
            gif.src = './assets/shrek-meme.png'; // Switch to PNG
            observer.disconnect();
          }, 6560);
        };
      }
    });
  }, { threshold: 0.5 });

  observer.observe(thoughtBubble);
}

document.addEventListener('DOMContentLoaded', handleThoughtBubbleAnimation);