// lightbox.js
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe.esm.js';

const homeLightbox = new PhotoSwipeLightbox({
  gallery: '#gallery__home',
  children: '.pswp-gallery__item',
  pswpModule: PhotoSwipe,
});

homeLightbox.init();

const aboutLightbox = new PhotoSwipeLightbox({
  gallery: '#gallery__about',
  children: '.pswp-gallery__item',
  pswpModule: PhotoSwipe,
});

aboutLightbox.init();
