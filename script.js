function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const backToTop = document.getElementById('backToTop');
const footer = document.querySelector('footer');

if (backToTop && footer) {
  function checkFooterVisible() {
    const rect = footer.getBoundingClientRect();
    const winH = window.innerHeight || document.documentElement.clientHeight;

    const footerIsVisible = rect.top < winH && rect.bottom > 0;

    if (footerIsVisible) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }

  window.addEventListener('scroll', checkFooterVisible, { passive: true });
  window.addEventListener('resize', checkFooterVisible);
  window.addEventListener('load', checkFooterVisible);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}