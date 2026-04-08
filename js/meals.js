const menu = document.querySelector('[data-burger]');
  const panel = document.querySelector('.mobile-menu__panel');
  const openBtn = document.querySelector('[data-burger-open]');
  const closeEls = document.querySelectorAll('[data-burger-close]');

  let scrollY = 0;

  function preventScroll(e) {
    if (panel && panel.contains(e.target)) return;
    e.preventDefault();
  }

  function openMenu(){
    scrollY = window.scrollY || 0;
    menu.hidden = false;

    document.body.classList.add('is-menu-open');
    document.body.style.top = `-${scrollY}px`;

    document.addEventListener('touchmove', preventScroll, { passive: false });
  }

  function closeMenu(){
    menu.hidden = true;

    document.body.classList.remove('is-menu-open');
    document.removeEventListener('touchmove', preventScroll);

    const y = Math.abs(parseInt(document.body.style.top || '0', 10));
    document.body.style.top = '';
    window.scrollTo(0, y);
  }

  openBtn?.addEventListener('click', openMenu);
  closeEls.forEach(el => el.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && !menu.hidden) closeMenu();
  });

/* ________________________room-preview____________________________________ */

document.addEventListener('DOMContentLoaded', () => {
  const roomPreviews = document.querySelectorAll('[data-room-preview]');

  roomPreviews.forEach((roomPreview) => {
    const desktopImages = roomPreview.querySelectorAll(
      '.room-preview__inner .room-preview__image-wrapper .room-preview__image'
    );

    const mobileImages = roomPreview.querySelectorAll(
      '.room-preview__inner-mobile .room-preview__image-wrapper .room-preview__image'
    );

    const desktopPagination = roomPreview.querySelectorAll(
      '.room-preview__pagination-line'
    );

    const mobilePagination = roomPreview.querySelectorAll(
      '.room-preview__pagination-line-mobile'
    );

    const prevButtons = roomPreview.querySelectorAll('[data-prev]');
    const nextButtons = roomPreview.querySelectorAll('[data-next]');

    let currentIndex = 0;

    function isMobile() {
      return window.innerWidth <= 768;
    }

    function getCurrentImages() {
      return isMobile() ? mobileImages : desktopImages;
    }

    function getCurrentPagination() {
      return isMobile() ? mobilePagination : desktopPagination;
    }

    function updateSlider(index) {
      desktopImages.forEach((image, i) => {
        image.classList.toggle('is-active', !isMobile() && i === index);
      });

      mobileImages.forEach((image, i) => {
        image.classList.toggle('is-active', isMobile() && i === index);
      });

      desktopPagination.forEach((line, i) => {
        line.classList.toggle('is-active', !isMobile() && i === index);
      });

      mobilePagination.forEach((line, i) => {
        line.classList.toggle('is-active', isMobile() && i === index);
      });
    }

    function showNext() {
      const images = getCurrentImages();
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider(currentIndex);
    }

    function showPrev() {
      const images = getCurrentImages();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider(currentIndex);
    }

    prevButtons.forEach((button) => {
      button.addEventListener('click', showPrev);
    });

    nextButtons.forEach((button) => {
      button.addEventListener('click', showNext);
    });

    window.addEventListener('resize', () => {
      const images = getCurrentImages();
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      updateSlider(currentIndex);
    });

    updateSlider(currentIndex);
  });
});

/* ________________________footer____________________________________ */

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Форма отправлена!');
    });
  });
});