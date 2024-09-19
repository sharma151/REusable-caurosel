document.querySelectorAll(".carousel").forEach(function (carousel) {
  let currentIndex = 0;
  const imagesContainer = carousel.querySelector(".carousel-images");
  const images = carousel.querySelectorAll("img");
  const totalSlides = images.length;
  const indicators = carousel.querySelectorAll(".indicators span");
  const prevButton = carousel.querySelector(".prev");
  const nextButton = carousel.querySelector(".next");

  // Update Carousel based on index
  function updateCarousel(index) {
    // Ensure the index loops correctly
    currentIndex = (index + totalSlides) % totalSlides;

    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicator dots
    indicators.forEach((indicator, i) => {
      if (i === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Event Listener for Previous Button
  prevButton.addEventListener("click", () => {
    updateCarousel(currentIndex - 1);
  });

  // Event Listener for Next Button
  nextButton.addEventListener("click", () => {
    updateCarousel(currentIndex + 1);
  });

  // Event Listener for Indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      updateCarousel(index);
    });
  });
});
