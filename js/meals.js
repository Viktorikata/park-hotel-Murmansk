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

  if (!roomPreviews.length) return;

  roomPreviews.forEach((roomPreview) => {
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

    const paginationLinesDesktop = roomPreview.querySelectorAll('.room-preview__pagination-line');
    const paginationLinesMobile = roomPreview.querySelectorAll('.room-preview__pagination-line-mobile');

    const isReverse = roomPreview.classList.contains('room-preview--reverse');

    const slides = isReverse
      ? [
          {
            title: 'комплексные<br><span class="room-preview__title-offset">обеды и ужины</span>',
            titleMobile: 'комплексные<br>обеды<br>и ужины',
            text: `Каждый день гостей ждут комплексные обеды<br>
                   и ужины с продуманным меню: сытные супы,<br>
                   горячие блюда из мяса, рыбы или овощей,<br>
                   свежие салаты и гарниры, домашние напитки<br>
                   и выпечка дополняют трапезу.<br>
                   Обеды подаются с 13:00 до 15:00,<br>
                   ужины — с 18:00 до 20:00.`,
            textMobile: `Каждый день гостей ждут комплексные обеды и ужины<br>
                        с продуманным меню: сытные супы, горячие блюда из<br>
                        мяса, рыбы или овощей, свежие салаты и гарниры.<br>
                        Домашние напитки и выпечка дополняют трапезу.<br>
                        Обеды подаются с 13:00 до 15:00, ужины — с 18:00<br>
                        до 20:00.`,
            image: '../image/meals/buffet2.png',
            alt: 'Комплексные обеды и ужины'
          },
          {
            title: 'комплексные<br><span class="room-preview__title-offset">обеды и ужины</span>',
            text: `Каждый день гостей ждут комплексные обеды<br>
                   и ужины с продуманным меню: сытные супы,<br>
                   горячие блюда из мяса, рыбы или овощей,<br>
                   свежие салаты и гарниры, домашние напитки<br>
                   и выпечка дополняют трапезу.<br>
                   Обеды подаются с 13:00 до 15:00,<br>
                   ужины — с 18:00 до 20:00.`,
            image: '../image/meals/buffet2.png',
            alt: 'Комплексные обеды и ужины'
          },
          {
            title: 'комплексные<br><span class="room-preview__title-offset">обеды и ужины</span>',
            text: `Каждый день гостей ждут комплексные обеды<br>
                   и ужины с продуманным меню: сытные супы,<br>
                   горячие блюда из мяса, рыбы или овощей,<br>
                   свежие салаты и гарниры, домашние напитки<br>
                   и выпечка дополняют трапезу.<br>
                   Обеды подаются с 13:00 до 15:00,<br>
                   ужины — с 18:00 до 20:00.`,
            image: '../image/meals/buffet2.png',
            alt: 'Комплексные обеды и ужины'
          },
          {
            title: 'комплексные<br><span class="room-preview__title-offset">обеды и ужины</span>',
            text: `Каждый день гостей ждут комплексные обеды<br>
                   и ужины с продуманным меню: сытные супы,<br>
                   горячие блюда из мяса, рыбы или овощей,<br>
                   свежие салаты и гарниры, домашние напитки<br>
                   и выпечка дополняют трапезу.<br>
                   Обеды подаются с 13:00 до 15:00,<br>
                   ужины — с 18:00 до 20:00.`,
            image: '../image/meals/buffet2.png',
            alt: 'Комплексные обеды и ужины'
          },
          {
            title: 'комплексные<br><span class="room-preview__title-offset">обеды и ужины</span>',
            text: `Каждый день гостей ждут комплексные обеды<br>
                   и ужины с продуманным меню: сытные супы,<br>
                   горячие блюда из мяса, рыбы или овощей,<br>
                   свежие салаты и гарниры, домашние напитки<br>
                   и выпечка дополняют трапезу.<br>
                   Обеды подаются с 13:00 до 15:00,<br>
                   ужины — с 18:00 до 20:00.`,
            image: '../image/meals/buffet2.png',
            alt: 'Комплексные обеды и ужины'
          },
          {
            title: 'комплексные<br><span class="room-preview__title-offset">обеды и ужины</span>',
            text: `Каждый день гостей ждут комплексные обеды<br>
                   и ужины с продуманным меню: сытные супы,<br>
                   горячие блюда из мяса, рыбы или овощей,<br>
                   свежие салаты и гарниры, домашние напитки<br>
                   и выпечка дополняют трапезу.<br>
                   Обеды подаются с 13:00 до 15:00,<br>
                   ужины — с 18:00 до 20:00.`,
            image: '../image/meals/buffet2.png',
            alt: 'Комплексные обеды и ужины'
          },
          {
            title: 'комплексные<br><span class="room-preview__title-offset">обеды и ужины</span>',
            text: `Каждый день гостей ждут комплексные обеды<br>
                   и ужины с продуманным меню: сытные супы,<br>
                   горячие блюда из мяса, рыбы или овощей,<br>
                   свежие салаты и гарниры, домашние напитки<br>
                   и выпечка дополняют трапезу.<br>
                   Обеды подаются с 13:00 до 15:00,<br>
                   ужины — с 18:00 до 20:00.`,
            image: '../image/meals/buffet2.png',
            alt: 'Комплексные обеды и ужины'
          }
        ]
      : [
          {
            title: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            titleMobile: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            text: `Каждое утро гостей ждёт шведский стол<br>
                   с разнообразием блюд: свежая выпечка,<br>
                   каши, фрукты, блюда из яиц, мясные<br>
                   и овощные закуски. Горячие<br>
                   и холодные напитки — к вашему вкусу.<br>
                   Завтраки подаются с 7:30 до 10:30.`,
            textMobile: `Каждое утро гостей ждёт шведский стол c<br>
                   разнообразием блюд: свежая выпечка, каши, фрукты,<br>
                    блюда из яиц, мясные и овощные закуски. Горячие<br>
                    и холодные напитки — к вашему вкусу. Завтраки<br>
                   подаются с 7:30 до 10:30.`,
            image: '../image/meals/buffet.png',
            imageMobile: '../image/meals/buffet.png',
            alt: 'Шведский стол'
          },
          {
            title: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            titleMobile: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            text: `Каждое утро гостей ждёт шведский стол<br>
                   с разнообразием блюд: свежая выпечка,<br>
                   каши, фрукты, блюда из яиц, мясные<br>
                   и овощные закуски. Горячие<br>
                   и холодные напитки — к вашему вкусу.<br>
                   Завтраки подаются с 7:30 до 10:30.`,
            textMobile: `Каждое утро гостей ждёт шведский стол c<br>
                   разнообразием блюд: свежая выпечка, каши, фрукты,<br>
                    блюда из яиц, мясные и овощные закуски. Горячие<br>
                    и холодные напитки — к вашему вкусу. Завтраки<br>
                   подаются с 7:30 до 10:30.`,
            image: '../image/meals/buffet.png',
            imageMobile: '../image/meals/buffet.png',
            alt: 'Шведский стол'
          },
          {
            title: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            titleMobile: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            text: `Каждое утро гостей ждёт шведский стол<br>
                   с разнообразием блюд: свежая выпечка,<br>
                   каши, фрукты, блюда из яиц, мясные<br>
                   и овощные закуски. Горячие<br>
                   и холодные напитки — к вашему вкусу.<br>
                   Завтраки подаются с 7:30 до 10:30.`,
            textMobile: `Каждое утро гостей ждёт шведский стол c<br>
                   разнообразием блюд: свежая выпечка, каши, фрукты,<br>
                    блюда из яиц, мясные и овощные закуски. Горячие<br>
                    и холодные напитки — к вашему вкусу. Завтраки<br>
                   подаются с 7:30 до 10:30.`,
            image: '../image/meals/buffet.png',
            imageMobile: '../image/meals/buffet.png',
            alt: 'Шведский стол'
          },
          {
            title: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            titleMobile: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            text: `Каждое утро гостей ждёт шведский стол<br>
                   с разнообразием блюд: свежая выпечка,<br>
                   каши, фрукты, блюда из яиц, мясные<br>
                   и овощные закуски. Горячие<br>
                   и холодные напитки — к вашему вкусу.<br>
                   Завтраки подаются с 7:30 до 10:30.`,
            textMobile: `Каждое утро гостей ждёт шведский стол c<br>
                   разнообразием блюд: свежая выпечка, каши, фрукты,<br>
                    блюда из яиц, мясные и овощные закуски. Горячие<br>
                    и холодные напитки — к вашему вкусу. Завтраки<br>
                   подаются с 7:30 до 10:30.`,
            image: '../image/meals/buffet.png',
            imageMobile: '../image/meals/buffet.png',
            alt: 'Шведский стол'
          },
          {
            title: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            titleMobile: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            text: `Каждое утро гостей ждёт шведский стол<br>
                   с разнообразием блюд: свежая выпечка,<br>
                   каши, фрукты, блюда из яиц, мясные<br>
                   и овощные закуски. Горячие<br>
                   и холодные напитки — к вашему вкусу.<br>
                   Завтраки подаются с 7:30 до 10:30.`,
            textMobile: `Каждое утро гостей ждёт шведский стол c<br>
                   разнообразием блюд: свежая выпечка, каши, фрукты,<br>
                    блюда из яиц, мясные и овощные закуски. Горячие<br>
                    и холодные напитки — к вашему вкусу. Завтраки<br>
                   подаются с 7:30 до 10:30.`,
            image: '../image/meals/buffet.png',
            imageMobile: '../image/meals/buffet.png',
            alt: 'Шведский стол'
          },
          {
            title: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            titleMobile: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            text: `Каждое утро гостей ждёт шведский стол<br>
                   с разнообразием блюд: свежая выпечка,<br>
                   каши, фрукты, блюда из яиц, мясные<br>
                   и овощные закуски. Горячие<br>
                   и холодные напитки — к вашему вкусу.<br>
                   Завтраки подаются с 7:30 до 10:30.`,
            textMobile: `Каждое утро гостей ждёт шведский стол c<br>
                   разнообразием блюд: свежая выпечка, каши, фрукты,<br>
                    блюда из яиц, мясные и овощные закуски. Горячие<br>
                    и холодные напитки — к вашему вкусу. Завтраки<br>
                   подаются с 7:30 до 10:30.`,
            image: '../image/meals/buffet.png',
            imageMobile: '../image/meals/buffet.png',
            alt: 'Шведский стол'
          },
          {
            title: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            titleMobile: 'шведский<br><span class="room-preview__title-offset">стол</span>',
            text: `Каждое утро гостей ждёт шведский стол<br>
                   с разнообразием блюд: свежая выпечка,<br>
                   каши, фрукты, блюда из яиц, мясные<br>
                   и овощные закуски. Горячие<br>
                   и холодные напитки — к вашему вкусу.<br>
                   Завтраки подаются с 7:30 до 10:30.`,
            textMobile: `Каждое утро гостей ждёт шведский стол c<br>
                   разнообразием блюд: свежая выпечка, каши, фрукты,<br>
                    блюда из яиц, мясные и овощные закуски. Горячие<br>
                    и холодные напитки — к вашему вкусу. Завтраки<br>
                   подаются с 7:30 до 10:30.`,
            image: '../image/meals/buffet.png',
            imageMobile: '../image/meals/buffet.png',
            alt: 'Шведский стол'
          }
        ];

    let currentIndex = 0;
    let isAnimating = false;
    const animationDuration = 450;

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
      const slide = slides[index];

      if (titleEl) titleEl.innerHTML = slide.title;
      if (textEl) textEl.innerHTML = slide.text;

      if (imageEl) {
        imageEl.src = slide.image;
        imageEl.alt = slide.alt;
      }

      if (titleMobileEl) titleMobileEl.innerHTML = slide.titleMobile || slide.title;
      if (textMobileEl) textMobileEl.innerHTML = slide.textMobile || slide.text;

      if (imageMobileEl) {
        imageMobileEl.src = slide.imageMobile || slide.image;
        imageMobileEl.alt = slide.alt;
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
      const nextIndex = (currentIndex + 1) % slides.length;
      animateChange(nextIndex);
    }

    function showPrev() {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
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