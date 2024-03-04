document.addEventListener('DOMContentLoaded', () => {
  const playButtons = document.getElementsByClassName('play-btn');
  const images = document.getElementsByClassName('img');
  const videoContainer = document.querySelector('.video-container');
  const videoFrame = document.querySelector('.video-frame');
  const closeBtns = document.querySelectorAll('.close-btn');
  const carouselDiv = document.querySelector('.carousel');

  const carouselItems = document.querySelectorAll('.carousel-item');

  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', function () {
      videoContainer.style.display = 'flex';
      carouselDiv.style.display = 'none'; // Hide the carousel

      // Load and play the video
      const videoUrl = this.parentElement.getAttribute('data-video-url');
      videoFrame.src = videoUrl;
    });
  }

  // Close the video
  closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      // Pause the video
      videoFrame.src = '';

      // Hide the video container
      videoContainer.style.display = 'none';

      carouselDiv.style.display = 'flex';

      // Show the corresponding image
      const index = parseInt(this.getAttribute('data-index'));
      images[index].style.display = 'grid';
    });
  });

  // Dynamically generate carousel indicators
  carouselItems.forEach((item, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    indicator.setAttribute('data-index', index);
    carouselIndicators.appendChild(indicator);
  });

  // Add click event listener to carousel indicators
  // carouselIndicators.addEventListener('click', event => {
  //   const targetIndex = event.target.getAttribute('data-index');
  //   if (targetIndex !== null) {
  //     carouselItems.forEach((item, index) => {
  //       item.style.display = index == targetIndex ? 'block' : 'none';
  //     });
  //   }
  // });
});
