/*
 * This file is part of the theme and overrides the theme's default script file to remove the light theme functionality.
 * Please do not rename or change the file name, as it is intentionally used to override the theme's dark mode functionality.
 */
// Feather Icons
feather.replace();

const mobileNav = document.getElementById('mobileNav');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
mobileNav.style.display = 'none';
menuClose.style.display = 'none';
menuOpen.style.display = 'block';

const resizeListener = () => {
  if (window.innerWidth > 576) {
    mobileNav.style.display = 'none';
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
  }
};

window.addEventListener('resize', resizeListener);

const openMobile = () => {
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'block';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
  } else {
    mobileNav.style.display = 'none';
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
  }
};
