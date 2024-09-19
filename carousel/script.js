document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const slides = carousel.querySelector(".carousel-slides");
    const dots = document.querySelectorAll(".dots");
    const slideCount = slides.children.length;
    let index = 0;

    const showSlide = () => {
      slides.style.transform = `translateX(-${index * 100}%)`;
      slides.style.transition = "transform 0.5s ease";
    };

    const prevSlide = () => {
      index = index > 0 ? index - 1 : slideCount - 1;
      showSlide();
      indicators();
    };

    const nextSlide = () => {
      index = index < slideCount - 1 ? index + 1 : 0;
      showSlide();
      indicators();
    };

    const indicators = () => {
      dots.forEach((dot) => {
        dot.classList.remove("active"); // Use classList.remove to remove the active class
      });
      if (dots[index]) {
        dots[index].classList.add("active"); // Use classList.add to add the active class
      }
    };

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => {
        index = dotIndex;
        showSlide();
        indicators();
      });
    });

    carousel.querySelector(".prev-btn").addEventListener("click", prevSlide);
    carousel.querySelector(".next-btn").addEventListener("click", nextSlide);
    showSlide();
  });
});
