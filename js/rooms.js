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
/* ________________________Animation Hero____________________________________ */
document.addEventListener('DOMContentLoaded', () => {
  const heroSlider = document.querySelector('[data-hero-slider]');

  if (!heroSlider) return;

  const prevBtn = heroSlider.querySelector('[data-hero-prev]');
  const nextBtn = heroSlider.querySelector('[data-hero-next]');

  const imageDesktopEl = document.querySelector('[data-hero-image]');
  const imageMobileEl = document.querySelector('[data-hero-image-mobile]');
  const textEl = heroSlider.querySelector('[data-hero-text]');
  const titleDesktopEl = heroSlider.querySelector('[data-hero-title-desktop]');
  const titleMobileEl = heroSlider.querySelector('[data-hero-title-mobile]');

  const slides = [
    {
      titleDesktop: 'стандарт',
      titleMobile: 'стандарт',
      text: `Начните свое приключение 
             по Арктике с выбора подходящего номера в отеле "Экспедиция". 
             Мы предлагаем гостям несколько категорий уютных номеров, 
             в каждом из которых есть все необходимое для комфортного отдыха после путешествий 
             по Кольскому полуострову.`,
      imageDesktop: '../image/rooms/hero.png',
      imageMobile: '../image/rooms/hero-mobile.png'
    },
    {
      titleDesktop: 'комфорт',
      titleMobile: 'комфорт',
      text: `Номер категории Комфорт подойдет тем, 
             кто ценит больше пространства, удобства 
             и спокойную атмосферу отдыха после поездок 
             по Кольскому полуострову.`,
      imageDesktop: '../image/rooms/hero.png',
      imageMobile: '../image/rooms/hero-mobile.png'
    },
    {
      titleDesktop: 'делюкс',
      titleMobile: 'делюкс',
      text: `Номер Делюкс создан для тех, 
             кто хочет получить особенное ощущение отдыха, 
             насладиться уютной атмосферой и провести время 
             в максимальном комфорте.`,
      imageDesktop: '../image/rooms/hero.png',
      imageMobile: '../image/rooms/hero-mobile.png'
    }
  ];

  let currentIndex = 0;
  let isAnimating = false;
  const animationDuration = 450;

  function hideContent() {
    imageDesktopEl?.classList.add('is-hidden');
    imageMobileEl?.classList.add('is-hidden');
    textEl?.classList.add('is-hidden');
    titleDesktopEl?.classList.add('is-hidden');
    titleMobileEl?.classList.add('is-hidden');
  }

  function showContent() {
    imageDesktopEl?.classList.remove('is-hidden');
    imageMobileEl?.classList.remove('is-hidden');
    textEl?.classList.remove('is-hidden');
    titleDesktopEl?.classList.remove('is-hidden');
    titleMobileEl?.classList.remove('is-hidden');
  }

  function updateContent(index) {
    const slide = slides[index];

    if (titleDesktopEl) titleDesktopEl.textContent = slide.titleDesktop;
    if (titleMobileEl) titleMobileEl.textContent = slide.titleMobile;
    if (textEl) textEl.innerHTML = slide.text;

    if (imageDesktopEl) {
      imageDesktopEl.src = slide.imageDesktop;
    }

    if (imageMobileEl) {
      imageMobileEl.src = slide.imageMobile;
    }
  }

  function changeSlide(newIndex) {
    if (isAnimating || newIndex === currentIndex) return;

    isAnimating = true;
    hideContent();

    setTimeout(() => {
      updateContent(newIndex);
      currentIndex = newIndex;
      showContent();

      setTimeout(() => {
        isAnimating = false;
      }, animationDuration);
    }, animationDuration);
  }

  function showNext() {
    const nextIndex = (currentIndex + 1) % slides.length;
    changeSlide(nextIndex);
  }

  function showPrev() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(prevIndex);
  }

  prevBtn?.addEventListener('click', showPrev);
  nextBtn?.addEventListener('click', showNext);

  updateContent(currentIndex);
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
      if (!images.length) return;
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider(currentIndex);
    }

    function showPrev() {
      const images = getCurrentImages();
      if (!images.length) return;
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