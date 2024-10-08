$(document).ready(function() {
  // Page Loader
  $(window).on('load', function() {
      $('#loader').fadeOut(500);
  });

  // Initialize Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:1,
            nav:false
        },
        1200:{
            items:3,
            nav:true,
            loop:true
        }
    }
})

  // Lazy load images
  const lazyImages = document.querySelectorAll('img.lazy');
  const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
          }
      });
  });

  lazyImages.forEach(image => {
      imageObserver.observe(image);
  });

  // Mobile Menu Toggle
  $('#mobile-menu-icon').click(function() {
      $('#menu').toggle();
  });
});
