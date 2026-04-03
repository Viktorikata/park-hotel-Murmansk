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

  if (!roomPreviews.length) return;

  const roomGroups = [
    [
      {
        title: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        text: `Этот светлый, изысканный и компактный<br>
               номер обладает всем необходимым<br>
               для полного расслабления после<br>
               увлекательно проведённого дня<br>
               в Мурманске.`,
        textMobile: `Этот светлый, изысканный и компактный номер<br>
                     обладает всем необходимым для полного расслабления<br>
                     после увлекательно проведённого дня в Мурманске.`,
        image: '../image/rooms/standard.png',
        imageMobile: '../image/rooms/standard.png',
        alt: 'Номер стандарт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        text: `Этот светлый, изысканный и компактный<br>
               номер обладает всем необходимым<br>
               для полного расслабления после<br>
               увлекательно проведённого дня<br>
               в Мурманске.`,
        textMobile: `Этот светлый, изысканный и компактный номер<br>
                     обладает всем необходимым для полного расслабления<br>
                     после увлекательно проведённого дня в Мурманске.`,
        image: '../image/rooms/standard.png',
        imageMobile: '../image/rooms/standard.png',
        alt: 'Номер стандарт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        text: `Этот светлый, изысканный и компактный<br>
               номер обладает всем необходимым<br>
               для полного расслабления после<br>
               увлекательно проведённого дня<br>
               в Мурманске.`,
        textMobile: `Этот светлый, изысканный и компактный номер<br>
                     обладает всем необходимым для полного расслабления<br>
                     после увлекательно проведённого дня в Мурманске.`,
        image: '../image/rooms/standard.png',
        imageMobile: '../image/rooms/standard.png',
        alt: 'Номер стандарт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        text: `Этот светлый, изысканный и компактный<br>
               номер обладает всем необходимым<br>
               для полного расслабления после<br>
               увлекательно проведённого дня<br>
               в Мурманске.`,
        textMobile: `Этот светлый, изысканный и компактный номер<br>
                     обладает всем необходимым для полного расслабления<br>
                     после увлекательно проведённого дня в Мурманске.`,
        image: '../image/rooms/standard.png',
        imageMobile: '../image/rooms/standard.png',
        alt: 'Номер стандарт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        text: `Этот светлый, изысканный и компактный<br>
               номер обладает всем необходимым<br>
               для полного расслабления после<br>
               увлекательно проведённого дня<br>
               в Мурманске.`,
        textMobile: `Этот светлый, изысканный и компактный номер<br>
                     обладает всем необходимым для полного расслабления<br>
                     после увлекательно проведённого дня в Мурманске.`,
        image: '../image/rooms/standard.png',
        imageMobile: '../image/rooms/standard.png',
        alt: 'Номер стандарт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        text: `Этот светлый, изысканный и компактный<br>
               номер обладает всем необходимым<br>
               для полного расслабления после<br>
               увлекательно проведённого дня<br>
               в Мурманске.`,
        textMobile: `Этот светлый, изысканный и компактный номер<br>
                     обладает всем необходимым для полного расслабления<br>
                     после увлекательно проведённого дня в Мурманске.`,
        image: '../image/rooms/standard.png',
        imageMobile: '../image/rooms/standard.png',
        alt: 'Номер стандарт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">стандарт</span>',
        text: `Этот светлый, изысканный и компактный<br>
               номер обладает всем необходимым<br>
               для полного расслабления после<br>
               увлекательно проведённого дня<br>
               в Мурманске.`,
        textMobile: `Этот светлый, изысканный и компактный номер<br>
                     обладает всем необходимым для полного расслабления<br>
                     после увлекательно проведённого дня в Мурманске.`,
        image: '../image/rooms/standard.png',
        imageMobile: '../image/rooms/standard.png',
        alt: 'Номер стандарт'
      },
    ],

    [
      {
        title: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        text:  `Этот светлый, изысканный и компактный<br>
                        номер обладает всем необходимым<br>
                        для полного расслабления после<br>
                        увлекательно проведённого дня<br>
                        в Мурманске.`,
        textMobile: `Номер Комфорт сочетает уют и пространство: здесь<br>
        можно отдохнуть после долгих прогулок, насладиться<br>
        тишиной и теплом. Интерьер продуман до мелочей,<br>
        чтобы вы чувствовали себя как дома — в сердце<br>
        северной экспедиции.`,
        image: '../image/rooms/comfort.png',
        imageMobile: '../image/rooms/comfort.png',
        alt: 'Номер комфорт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        text:  `Этот светлый, изысканный и компактный<br>
                        номер обладает всем необходимым<br>
                        для полного расслабления после<br>
                        увлекательно проведённого дня<br>
                        в Мурманске.`,
        textMobile: `Номер Комфорт сочетает уют и пространство: здесь<br>
        можно отдохнуть после долгих прогулок, насладиться<br>
        тишиной и теплом. Интерьер продуман до мелочей,<br>
        чтобы вы чувствовали себя как дома — в сердце<br>
        северной экспедиции.`,
        image: '../image/rooms/comfort.png',
        imageMobile: '../image/rooms/comfort.png',
        alt: 'Номер комфорт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        text:  `Этот светлый, изысканный и компактный<br>
                        номер обладает всем необходимым<br>
                        для полного расслабления после<br>
                        увлекательно проведённого дня<br>
                        в Мурманске.`,
        textMobile: `Номер Комфорт сочетает уют и пространство: здесь<br>
        можно отдохнуть после долгих прогулок, насладиться<br>
        тишиной и теплом. Интерьер продуман до мелочей,<br>
        чтобы вы чувствовали себя как дома — в сердце<br>
        северной экспедиции.`,
        image: '../image/rooms/comfort.png',
        imageMobile: '../image/rooms/comfort.png',
        alt: 'Номер комфорт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        text:  `Этот светлый, изысканный и компактный<br>
                        номер обладает всем необходимым<br>
                        для полного расслабления после<br>
                        увлекательно проведённого дня<br>
                        в Мурманске.`,
        textMobile: `Номер Комфорт сочетает уют и пространство: здесь<br>
        можно отдохнуть после долгих прогулок, насладиться<br>
        тишиной и теплом. Интерьер продуман до мелочей,<br>
        чтобы вы чувствовали себя как дома — в сердце<br>
        северной экспедиции.`,
        image: '../image/rooms/comfort.png',
        imageMobile: '../image/rooms/comfort.png',
        alt: 'Номер комфорт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        text:  `Этот светлый, изысканный и компактный<br>
                        номер обладает всем необходимым<br>
                        для полного расслабления после<br>
                        увлекательно проведённого дня<br>
                        в Мурманске.`,
        textMobile: `Номер Комфорт сочетает уют и пространство: здесь<br>
        можно отдохнуть после долгих прогулок, насладиться<br>
        тишиной и теплом. Интерьер продуман до мелочей,<br>
        чтобы вы чувствовали себя как дома — в сердце<br>
        северной экспедиции.`,
        image: '../image/rooms/comfort.png',
        imageMobile: '../image/rooms/comfort.png',
        alt: 'Номер комфорт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        text:  `Этот светлый, изысканный и компактный<br>
                        номер обладает всем необходимым<br>
                        для полного расслабления после<br>
                        увлекательно проведённого дня<br>
                        в Мурманске.`,
        textMobile: `Номер Комфорт сочетает уют и пространство: здесь<br>
        можно отдохнуть после долгих прогулок, насладиться<br>
        тишиной и теплом. Интерьер продуман до мелочей,<br>
        чтобы вы чувствовали себя как дома — в сердце<br>
        северной экспедиции.`,
        image: '../image/rooms/comfort.png',
        imageMobile: '../image/rooms/comfort.png',
        alt: 'Номер комфорт'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">комфорт</span>',
        text:  `Этот светлый, изысканный и компактный<br>
                        номер обладает всем необходимым<br>
                        для полного расслабления после<br>
                        увлекательно проведённого дня<br>
                        в Мурманске.`,
        textMobile: `Номер Комфорт сочетает уют и пространство: здесь<br>
        можно отдохнуть после долгих прогулок, насладиться<br>
        тишиной и теплом. Интерьер продуман до мелочей,<br>
        чтобы вы чувствовали себя как дома — в сердце<br>
        северной экспедиции.`,
        image: '../image/rooms/comfort.png',
        imageMobile: '../image/rooms/comfort.png',
        alt: 'Номер комфорт'
      }      
    ],

    [
      {
        title: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        text: `Номер Делюкс создан для тех, кто ценит<br>
               особенное ощущение отдыха. Простор,<br>
               мягкий свет и спокойная атмосфера<br>
               позволяют восстановить силы и насладиться<br>
               каждым моментом путешествия на Севере.`,
        textMobile: `Номер Делюкс создан для тех, кто ценит особенное<br>
                     ощущение отдыха. Простор, мягкий свет и спокойная<br>
                     атмосфера позволяют восстановить силы <br>
                    и насладиться каждым моментом путешествия на<br>
                    Севере.`,
        image: '../image/rooms/deluxe.png',
        imageMobile: '../image/rooms/deluxe.png',
        alt: 'Номер делюкс'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        text: `Номер Делюкс создан для тех, кто ценит<br>
               особенное ощущение отдыха. Простор,<br>
               мягкий свет и спокойная атмосфера<br>
               позволяют восстановить силы и насладиться<br>
               каждым моментом путешествия на Севере.`,
        textMobile: `Номер Делюкс создан для тех, кто ценит особенное<br>
                     ощущение отдыха. Простор, мягкий свет и спокойная<br>
                     атмосфера позволяют восстановить силы <br>
                    и насладиться каждым моментом путешествия на<br>
                    Севере.`,
        image: '../image/rooms/deluxe.png',
        imageMobile: '../image/rooms/deluxe.png',
        alt: 'Номер делюкс'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        text: `Номер Делюкс создан для тех, кто ценит<br>
               особенное ощущение отдыха. Простор,<br>
               мягкий свет и спокойная атмосфера<br>
               позволяют восстановить силы и насладиться<br>
               каждым моментом путешествия на Севере.`,
        textMobile: `Номер Делюкс создан для тех, кто ценит особенное<br>
                     ощущение отдыха. Простор, мягкий свет и спокойная<br>
                     атмосфера позволяют восстановить силы <br>
                    и насладиться каждым моментом путешествия на<br>
                    Севере.`,
        image: '../image/rooms/deluxe.png',
        imageMobile: '../image/rooms/deluxe.png',
        alt: 'Номер делюкс'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        text: `Номер Делюкс создан для тех, кто ценит<br>
               особенное ощущение отдыха. Простор,<br>
               мягкий свет и спокойная атмосфера<br>
               позволяют восстановить силы и насладиться<br>
               каждым моментом путешествия на Севере.`,
        textMobile: `Номер Делюкс создан для тех, кто ценит особенное<br>
                     ощущение отдыха. Простор, мягкий свет и спокойная<br>
                     атмосфера позволяют восстановить силы <br>
                    и насладиться каждым моментом путешествия на<br>
                    Севере.`,
        image: '../image/rooms/deluxe.png',
        imageMobile: '../image/rooms/deluxe.png',
        alt: 'Номер делюкс'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        text: `Номер Делюкс создан для тех, кто ценит<br>
               особенное ощущение отдыха. Простор,<br>
               мягкий свет и спокойная атмосфера<br>
               позволяют восстановить силы и насладиться<br>
               каждым моментом путешествия на Севере.`,
        textMobile: `Номер Делюкс создан для тех, кто ценит особенное<br>
                     ощущение отдыха. Простор, мягкий свет и спокойная<br>
                     атмосфера позволяют восстановить силы <br>
                    и насладиться каждым моментом путешествия на<br>
                    Севере.`,
        image: '../image/rooms/deluxe.png',
        imageMobile: '../image/rooms/deluxe.png',
        alt: 'Номер делюкс'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        text: `Номер Делюкс создан для тех, кто ценит<br>
               особенное ощущение отдыха. Простор,<br>
               мягкий свет и спокойная атмосфера<br>
               позволяют восстановить силы и насладиться<br>
               каждым моментом путешествия на Севере.`,
        textMobile: `Номер Делюкс создан для тех, кто ценит особенное<br>
                     ощущение отдыха. Простор, мягкий свет и спокойная<br>
                     атмосфера позволяют восстановить силы <br>
                    и насладиться каждым моментом путешествия на<br>
                    Севере.`,
        image: '../image/rooms/deluxe.png',
        imageMobile: '../image/rooms/deluxe.png',
        alt: 'Номер делюкс'
      },
      {
        title: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        titleMobile: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
        text: `Номер Делюкс создан для тех, кто ценит<br>
               особенное ощущение отдыха. Простор,<br>
               мягкий свет и спокойная атмосфера<br>
               позволяют восстановить силы и насладиться<br>
               каждым моментом путешествия на Севере.`,
        textMobile: `Номер Делюкс создан для тех, кто ценит особенное<br>
                     ощущение отдыха. Простор, мягкий свет и спокойная<br>
                     атмосфера позволяют восстановить силы <br>
                    и насладиться каждым моментом путешествия на<br>
                    Севере.`,
        image: '../image/rooms/deluxe.png',
        imageMobile: '../image/rooms/deluxe.png',
        alt: 'Номер делюкс'
      }      
    ]
  ];

  roomPreviews.forEach((roomPreview, sectionIndex) => {
    const prevButtons = roomPreview.querySelectorAll('[data-prev]');
    const nextButtons = roomPreview.querySelectorAll('[data-next]');

    const titleEl = roomPreview.querySelector('[data-title]');
    const textEl = roomPreview.querySelector('[data-text]');
    const imageEl = roomPreview.querySelector('[data-image]');
    const frameEl = roomPreview.querySelector('.room-preview__inner .room-preview__frame');

    const titleMobileEl = roomPreview.querySelector('[data-title-mobile]');
    const textMobileEl = roomPreview.querySelector('[data-text-mobile]');
    const imageMobileEl = roomPreview.querySelector('[data-image-mobile]');
    const frameMobileEl = roomPreview.querySelector('.room-preview__inner-mobile .room-preview__frame');

    const rooms = roomGroups[sectionIndex];

    if (!rooms || !rooms.length) return;

    let currentIndex = 0;
    let isAnimating = false;
    const animationDuration = 450;

    const paginationLinesDesktop = roomPreview.querySelectorAll('.room-preview__pagination-line');
    const paginationLinesMobile = roomPreview.querySelectorAll('.room-preview__pagination-line-mobile');

    function hideContent() {
      titleEl?.classList.add('is-hidden');
      textEl?.classList.add('is-hidden');
      imageEl?.classList.add('is-hidden');
      frameEl?.classList.add('is-hidden');

      titleMobileEl?.classList.add('is-hidden');
      textMobileEl?.classList.add('is-hidden');
      imageMobileEl?.classList.add('is-hidden');
      frameMobileEl?.classList.add('is-hidden');
    }

    function showContent() {
      titleEl?.classList.remove('is-hidden');
      textEl?.classList.remove('is-hidden');
      imageEl?.classList.remove('is-hidden');
      frameEl?.classList.remove('is-hidden');

      titleMobileEl?.classList.remove('is-hidden');
      textMobileEl?.classList.remove('is-hidden');
      imageMobileEl?.classList.remove('is-hidden');
      frameMobileEl?.classList.remove('is-hidden');
    }

    function updateContent(index) {
      const room = rooms[index];

      if (titleEl) titleEl.innerHTML = room.title;
      if (textEl) textEl.innerHTML = room.text;
      if (imageEl) {
        imageEl.src = room.image;
        imageEl.alt = room.alt;
      }

      if (titleMobileEl) titleMobileEl.innerHTML = room.titleMobile || room.title;
      if (textMobileEl) textMobileEl.innerHTML = room.textMobile || room.text;
      if (imageMobileEl) {
        imageMobileEl.src = room.imageMobile || room.image;
        imageMobileEl.alt = room.alt;
      }
    }

    function updatePagination(index) {
      paginationLinesDesktop.forEach((line, i) => {
        line.classList.toggle('is-active', i === index);
      });

      paginationLinesMobile.forEach((line, i) => {
        line.classList.toggle('is-active', i === index);
      });
    }

    function animateChange(newIndex) {
      if (isAnimating || newIndex === currentIndex) return;

      isAnimating = true;
      hideContent();

      setTimeout(() => {
        updateContent(newIndex);
        currentIndex = newIndex;
        updatePagination(currentIndex);
        showContent();

        setTimeout(() => {
          isAnimating = false;
        }, animationDuration);
      }, animationDuration);
    }

    function showNext() {
      const nextIndex = (currentIndex + 1) % rooms.length;
      animateChange(nextIndex);
    }

    function showPrev() {
      const prevIndex = (currentIndex - 1 + rooms.length) % rooms.length;
      animateChange(prevIndex);
    }

    nextButtons.forEach((button) => {
      button.addEventListener('click', showNext);
    });

    prevButtons.forEach((button) => {
      button.addEventListener('click', showPrev);
    });

    updateContent(currentIndex);
    updatePagination(currentIndex);
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