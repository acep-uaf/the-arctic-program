// lightbox.js
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe.esm.js';

const homeLightbox = new PhotoSwipeLightbox({
  gallery: '.lightbox-image-wrapper',
  children: 'a',
  pswpModule: PhotoSwipe,
});

homeLightbox.init();

const aboutLightbox = new PhotoSwipeLightbox({
  gallery: '.lightbox-gallery',
  children: 'a',
  pswpModule: PhotoSwipe,
});

aboutLightbox.init();
