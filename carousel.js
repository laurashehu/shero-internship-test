document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    gap: 20,
    autoplay: 3000,
    hoverpause: true,
    animationDuration: 500,
    breakpoints: {
      1024: { perView: 2 },
      768: { perView: 1 }
    }
  }).mount();
});
