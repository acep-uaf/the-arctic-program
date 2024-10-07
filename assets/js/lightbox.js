import PhotoSwipeLightbox from './node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from './node_modules/photoswipe/dist/photoswipe.esm.js';

// Function to dynamically set image dimensions for PhotoSwipe
function setDynamicImageDimensions(selector) {
  document.querySelectorAll(selector).forEach((link) => {
    const img = new Image();
    img.src = link.href;

    img.onload = function () {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      link.setAttribute('data-pswp-width', width);
      link.setAttribute('data-pswp-height', height);
      link.setAttribute('target', '_blank'); // Ensure the link opens in a new tab
    };
  });
}

// Set dynamic image dimensions for all gallery images
setDynamicImageDimensions('.pswp-gallery__item');

// Define Lightbox for Home
const homeLightbox = new PhotoSwipeLightbox({
  gallery: '#gallery__home',
  children: '.pswp-gallery__item',
  pswpModule: PhotoSwipe,
});

// Define Lightbox for About
const aboutLightbox = new PhotoSwipeLightbox({
  gallery: '#gallery__about',
  children: '.pswp-gallery__item',
  pswpModule: PhotoSwipe
});

// Initialize Lightboxes
homeLightbox.init();
aboutLightbox.init();
