// lightbox.js
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '.grid', // The parent container for your lightbox links
  children: 'a', // The anchor tags within the grid
  pswpModule: PhotoSwipe,
});

lightbox.init();
