document.addEventListener('DOMContentLoaded', function () {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const fullscreenContainer = document.querySelector('.fullscreen-container');
  const closeButton = document.querySelector('.close-button');
  const fullscreenIframe = document.querySelector('.fullscreen-iframe');
  const carouselNavLeft = document.querySelector('.carousel-nav-left');
  const carouselNavRight = document.querySelector('.carousel-nav-right');
  let currentIndex = 0;

  carouselItems.forEach((item, index) => {
    const playButton = item.querySelector('.play-button');
    const overlay = item.querySelector('.overlay');
    console.log(overlay); // Check if the overlay element is selected

    playButton.addEventListener('click', function (event) {
      event.stopPropagation();
      const videoId = playButton.getAttribute('data-video');
      console.log('Play button clicked');
      openFullscreen(videoId);
      currentIndex = index;
      updateNavButtons();
    });

    overlay.addEventListener('click', function () {
      const videoId = playButton.getAttribute('data-video');
      console.log('Overlay clicked');
      openFullscreen(videoId);
      currentIndex = index;
      updateNavButtons();
    });
  });

  closeButton.addEventListener('click', closeFullscreen);

  carouselNavLeft.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateNavButtons();
      const videoId = carouselItems[currentIndex]
        .querySelector('.play-button')
        .getAttribute('data-video');
      openFullscreen(videoId);
    }
  });

  carouselNavRight.addEventListener('click', function () {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      updateNavButtons();
      const videoId = carouselItems[currentIndex]
        .querySelector('.play-button')
        .getAttribute('data-video');
      openFullscreen(videoId);
    }
  });

  function openFullscreen(videoId) {
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    fullscreenIframe.src = videoUrl;
    fullscreenContainer.style.display = 'block';
    carouselNavLeft.style.display = 'block';
    carouselNavRight.style.display = 'block';
  }

  function closeFullscreen() {
    fullscreenIframe.src = '';
    fullscreenContainer.style.display = 'none';
    carouselNavLeft.style.display = 'none';
    carouselNavRight.style.display = 'none';
  }

  function updateNavButtons() {
    if (currentIndex === 0) {
      carouselNavLeft.style.display = 'none';
    } else {
      carouselNavLeft.style.display = 'block';
    }

    if (currentIndex === carouselItems.length - 1) {
      carouselNavRight.style.display = 'none';
    } else {
      carouselNavRight.style.display = 'block';
    }
  }
});
