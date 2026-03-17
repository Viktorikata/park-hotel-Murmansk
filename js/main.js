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

/* ________________________showcase-card____________________________________ */
 
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('[data-showcase-slider]');
  if (!slider) return;

  const showcaseCard = slider.closest('.showcase-card');

  const currentImage = slider.querySelector('[data-showcase-current-image]');
  const nextImage = slider.querySelector('[data-showcase-next-image]');
  const currentLayer = slider.querySelector('.showcase-card__image-layer--current');

  const numberCurrent = slider.querySelector('[data-showcase-number-current]');
  const captionCurrent = slider.querySelector('[data-showcase-caption-current]');
  const titleCurrent = slider.querySelector('[data-showcase-title-current]');
  const textCurrent = slider.querySelector('[data-showcase-text-current-body]');

  const prevButtons = showcaseCard.querySelectorAll('[data-showcase-prev]');
  const nextButtons = showcaseCard.querySelectorAll('[data-showcase-next]');

  const mobileImage = showcaseCard.querySelector('[data-showcase-current-image-mobile]');
  const mobileCaption = showcaseCard.querySelector('[data-showcase-caption-mobile]');
  const mobileTitle = showcaseCard.querySelector('[data-showcase-title-mobile]');
  const mobileText = showcaseCard.querySelector('[data-showcase-text-mobile]');

  const slides = [
  {
    number: '01',
    image: '../image/main/room-preview-background1.png',
    imageMobile: '../image/main/mobile/main-mobile-showcase-card-background.png',
    alt: 'Интерьер номера с двумя кроватями',
    caption: 'Отель с характером',
    title: 'Продумали<br>всё до мелочей',
    titleMobile: 'Продумали<br>всё до мелочей',
    text: `
      Мы позаботились о том, чтобы<br>
      в номере можно было по-настоящему<br>
      отдохнуть. современная удобная<br>
      мебель, температура +25 и всё под<br>
      рукой: розетки у кровати, свет,<br>
      продуманная планировка. беспокоится<br>
      не о чем — только комфорт и тепло.
    `,
    textMobile: `
      Мы позаботились о том, чтобы<br>
      в номере можно было по-настоящему отдохнуть.<br>
      современная удобная мебель, температура<br>
      +25 и всё под рукой: розетки у кровати, свет,<br>
      продуманная планировка. беспокоится не о чем —<br>
      только комфорт и тепло.
    `,
  },
    {
      number: '02',
      image: '../image/main/room-preview-background2.png',
      imageMobile: '../image/main/mobile/main-mobile-showcase-card-background2.png',
      alt: 'Столик с декором и предметами интерьера',
      caption: 'Важен каждый штрих',
      title: 'Север в каждой<br>детали интерьера',
      titleMobile: 'Север в каждой<br>детали интерьера',
      text: `
        Интерьеры «Экспедиции»<br>
        разрабатывались специально для этого<br>
        проекта. Натуральные фактуры, мебель<br>
        аутентичные детали и световые<br>
        решения создают ощущение, что вы<br>
        находитесь не в обычном отеле,<br>
        а в месте, где продолжается<br>
        история путешествий.
      `,
      textMobile: `
        Интерьеры «Экспедиции»<br>
        разрабатывались специально для этого<br>
        проекта. Натуральные фактуры, мебель<br>
        аутентичные детали и световые<br>
        решения создают ощущение, что вы<br>
        находитесь не в обычном отеле,<br>
        а в месте, где продолжается<br>
        история путешествий.
    `,
    },
    {
      number: '03',
      image: '../image/main/room-preview-background3.png',
      imageMobile: '../image/main/mobile/main-mobile-showcase-card-background.png',
      alt: 'Гостиная зона интерьера',
      caption: 'Следы путешествий',
      title: 'Интерьер, который<br>хранит истории',
      titleMobile: 'Интерьер, который<br>хранит истории',
      text: `
        В «Экспедиции» каждая деталь связана<br>
        с духом открытий: постеры полярных<br>
        маршрутов, архивные фотографии,<br>
        предметы, напоминающие о великих<br>
        путешественниках. Интерьер<br>
        превращается в продолжение<br>
        экспедиционного дневника.
      `,
      textMobile: `
        В «Экспедиции» каждая деталь связана<br>
        с духом открытий: постеры полярных<br>
        маршрутов, архивные фотографии,<br>
        предметы, напоминающие о великих<br>
        путешественниках. Интерьер<br>
        превращается в продолжение<br>
        экспедиционного дневника.
    `,
    },
    {
      number: '04',
      image: '../image/main/room-preview-background4.png',
      imageMobile: '../image/main/mobile/main-mobile-showcase-card-background.png',
      alt: 'Интерьер бара',
      caption: 'Зимовка в экспедиции',
      title: 'Северная кухня<br>и легендарный виски',
      titleMobile: 'Северная кухня<br>и легендарный виски',
      text: `
        В «Зимовке» каждая деталь работает<br>
        на ощущение привала после дороги:<br>
        приглушенный свет, акценты<br>
        с историей. В меню — гребешок,<br>
        оленина и рыбные блюда, в бокале —<br>
        настойки на ягодах и легендарный<br>
        виски полярников.
      `,
      textMobile: `
      В «Зимовке» каждая деталь работает<br>
        на ощущение привала после дороги:<br>
        приглушенный свет, акценты<br>
        с историей. В меню — гребешок,<br>
        оленина и рыбные блюда, в бокале —<br>
        настойки на ягодах и легендарный<br>
        виски полярников.
    `,
    },
  ];

  const IMAGE_DURATION = 1400;
  const TEXT_HIDE_DURATION = 200;

  let currentIndex = 0;
  let isAnimating = false;

  function getLoopedIndex(index) {
    if (index < 0) return slides.length - 1;
    if (index >= slides.length) return 0;
    return index;
  }

  function getNextIndex(index) {
    return getLoopedIndex(index + 1);
  }

  function getPrevIndex(index) {
    return getLoopedIndex(index - 1);
  }

  function renderText(slide) {
    numberCurrent.textContent = slide.number;
    captionCurrent.textContent = slide.caption;
    titleCurrent.innerHTML = slide.title;
    textCurrent.innerHTML = slide.text;
  }

  function renderMobile(slide) {
  if (mobileImage) {
    mobileImage.src = slide.imageMobile || slide.image;
    mobileImage.alt = slide.alt;
  }

  if (mobileCaption) {
    mobileCaption.textContent = slide.caption;
  }

  if (mobileTitle) {
    mobileTitle.innerHTML = slide.titleMobile || slide.title;
  }

  if (mobileText) {
    mobileText.innerHTML = slide.textMobile || slide.text;
  }
}

  function renderImages(currentSlide, underSlide) {
    currentImage.src = currentSlide.image;
    currentImage.alt = currentSlide.alt;
    nextImage.src = underSlide.image;
    nextImage.alt = '';
  }

  function renderInitial() {
    const currentSlide = slides[currentIndex];
    const underSlide = slides[getNextIndex(currentIndex)];

    renderImages(currentSlide, underSlide);
    renderText(currentSlide);
    renderMobile(currentSlide);
  }

  function hideText() {
    showcaseCard.classList.remove('is-text-preparing', 'is-text-showing');
    showcaseCard.classList.add('is-text-hiding');
  }

  function prepareTextBelow() {
    showcaseCard.classList.remove('is-text-hiding', 'is-text-showing');
    showcaseCard.classList.add('is-text-preparing');
  }

  function showText() {
    showcaseCard.classList.remove('is-text-hiding', 'is-text-preparing');
    showcaseCard.classList.add('is-text-showing');
  }

  function hideMobile() {
    showcaseCard.classList.remove('is-mobile-showing');
    showcaseCard.classList.add('is-mobile-hiding');
  }

  function showMobile() {
    showcaseCard.classList.remove('is-mobile-hiding');
    showcaseCard.classList.add('is-mobile-showing');
  }

  function animateImageDown() {
    return currentLayer.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(110%)' }
      ],
      {
        duration: IMAGE_DURATION,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'forwards'
      }
    );
  }

  function resetImageLayer() {
    currentLayer.getAnimations().forEach((animation) => animation.cancel());
    currentLayer.style.transform = 'translateY(0)';
  }

  function animateTo(targetIndex) {
    if (isAnimating) return;
    isAnimating = true;

    const targetSlide = slides[targetIndex];
    const underSlideAfter = slides[getNextIndex(targetIndex)];

    nextImage.src = targetSlide.image;
    nextImage.alt = '';

    hideText();
    hideMobile();

    window.setTimeout(() => {
      prepareTextBelow();
      renderText(targetSlide);
      renderMobile(targetSlide);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          showText();
          showMobile();
        });
      });
    }, TEXT_HIDE_DURATION);

    const imageAnimation = animateImageDown();

    imageAnimation.onfinish = () => {
      currentIndex = targetIndex;
      renderImages(targetSlide, underSlideAfter);
      resetImageLayer();
      isAnimating = false;
    };
  }

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      animateTo(getNextIndex(currentIndex));
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      animateTo(getPrevIndex(currentIndex));
    });
  });

  renderInitial();
  showText();
  showMobile();
});


/* ________________________room-preview____________________________________ */
document.addEventListener('DOMContentLoaded', () => {
  const roomPreview = document.querySelector('[data-room-preview]');

  if (!roomPreview) return;

  const prevButtons = roomPreview.querySelectorAll('[data-prev]');
  const nextButtons = roomPreview.querySelectorAll('[data-next]');

  const titleEl = roomPreview.querySelector('[data-title]');
  const textEl = roomPreview.querySelector('[data-text]');
  const imageEl = roomPreview.querySelector('[data-image]');
  const frameEl = roomPreview.querySelector('.room-preview__inner .room-preview__frame');

  const titleMobileEl = roomPreview.querySelector('[data-title-mobile]');
  const textMobileEl = roomPreview.querySelector('[data-text-mobile]');
  const imageMobileEl = roomPreview.querySelector('[data-image-mobile]');
  const frameMobileEl = roomPreview.querySelector('.room-preview__frame--mobile');

  const rooms = [
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
      image: '../image/main/main-room-preview1.png',
      imageMobile: '../image/main/mobile/main-room-preview-image.png',
      alt: 'Номер стандарт'
    },
    {
      title: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
      titleMobile: 'номер<br><span class="room-preview__title-offset">делюкс</span>',
      text: `Этот светлый, изысканный и компактный<br>
             номер обладает всем необходимым<br>
             для полного расслабления после<br>
             увлекательно проведённого дня<br>
             в Мурманске.`,
      textMobile: `Этот светлый, изысканный и компактный номер<br>
                   обладает всем необходимым для полного расслабления<br>
                   после увлекательно проведённого дня в Мурманске.`,
      image: '../image/main/main-room-preview2.png',
      imageMobile: '../image/main/mobile/main-room-preview-image2.png',
      alt: 'Номер делюкс'
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

  const paginationLinesDesktop = roomPreview.querySelectorAll('.room-preview__pagination-line');
  const paginationLinesMobile = roomPreview.querySelectorAll('.room-preview__pagination-line-mobile');

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

  updatePagination(currentIndex);
});

/* ________________________special-offer____________________________________ */
document.addEventListener('DOMContentLoaded', () => {
  const specialOffer = document.querySelector('[data-special-offer]');

  if (!specialOffer) return;

  const prevButtons = specialOffer.querySelectorAll('[data-offer-prev]');
  const nextButtons = specialOffer.querySelectorAll('[data-offer-next]');

  const numberEl = specialOffer.querySelector('[data-offer-number]');
  const numberMobileEl = specialOffer.querySelector('[data-offer-number-mobile]');
  const titleEl = specialOffer.querySelector('[data-offer-title]');
  const textEl = specialOffer.querySelector('[data-offer-text]');
  const textMobileEl = specialOffer.querySelector('[data-offer-text-mobile]');
  const imageEl = specialOffer.querySelector('[data-offer-image]');

  const offers = [
    {
      number: '01',
      title: 'Полярное<br><span class="special-offer__title-offset">Рождество</span>',
      text: `Погрузитесь в атмосферу<br>
             настоящей арктической сказки.<br>
             Праздничные дни в «Экспедиции» —<br>
             это уютные вечера с горячим<br>
             глинтвейном, ужины в баре<br>
             «Зимовка» и выезд в поисках<br>
             северного сияния.`,
      textMobile: `Погрузитесь в атмосферу настоящей арктической<br>
                   сказки.<br>
                   Праздничные дни в «Экспедиции» — это уютные вечера<br>
                   с горячим глинтвейном, ужины в баре «Зимовка»<br>
                   и выезд в поисках северного сияния.`,
      image: '../image/main/main-special-offer__image.png',
      alt: 'Северное сияние и зимний лагерь'
    },
    {
      number: '02',
      title: 'Авто<br><span class="special-offer__title-offset">кемпинг</span>',
      text: `Представляет собой освещенную,<br>
             благоустроенную площадку для<br>
             размещения палаток с доступом <br>
             к электричеству и системой<br>
             видеонаблюдения. А также у<br>
             большую парковочную зону<br>
             с сантехническим модулем.`,
      textMobile: `Представляет собой освещенную, благоустроенную<br>
                   площадку для размещения палаток с доступом<br>
                   к электричеству и системой видеонаблюдения.<br>
                   А также большую парковочную зону<br>
                   с сантехническим модулем.`,
      image: '../image/main/main-special-offer__image-2.png',
      alt: 'Авто кемпинг'
    },
    {
      number: '03',
      title: 'Спа<br><span class="special-offer__title-offset">услуги</span>',
      text: `Для гостей экспедиции<br>
             предлагается свободное<br>
             посещение сауны, расположенной<br>
             в спа-зоне, а также возможность<br>
             зарезервировать за<br>
              дополнительную плату сеансы<br>
              массажей.`,
      textMobile: `Для гостей экспедиции предлагается свободное<br>
                   посещение сауны, расположенной в спа-зоне,<br>
                   а также возможность зарезервировать<br>
                   за дополнительную плату сеансы массажей.`,
      image: '../image/main/main-special-offer__image-3.png',
      alt: 'Спа услуги'
    }
  ];

  let currentIndex = 0;
  let isAnimating = false;
  const animationDuration = 550;

  function addHiddenState() {
    numberEl.classList.add('is-hidden');
    titleEl.classList.add('is-hidden');
    textEl.classList.add('is-hidden');
    imageEl.classList.add('is-hidden');

    if (numberMobileEl) numberMobileEl.classList.add('is-hidden');
    if (textMobileEl) textMobileEl.classList.add('is-hidden');
  }

  function removeHiddenState() {
    numberEl.classList.remove('is-hidden');
    titleEl.classList.remove('is-hidden');
    textEl.classList.remove('is-hidden');
    imageEl.classList.remove('is-hidden');

    if (numberMobileEl) numberMobileEl.classList.remove('is-hidden');
    if (textMobileEl) textMobileEl.classList.remove('is-hidden');
  }

  function updateContent(index) {
    const offer = offers[index];

    numberEl.textContent = offer.number;
    if (numberMobileEl) numberMobileEl.textContent = offer.number;

    titleEl.innerHTML = offer.title;
    textEl.innerHTML = offer.text;

    if (textMobileEl) {
      textMobileEl.innerHTML = offer.textMobile;
    }

    imageEl.src = offer.image;
    imageEl.alt = offer.alt;
  }

  function animateChange(newIndex) {
    if (isAnimating || newIndex === currentIndex) return;

    isAnimating = true;
    addHiddenState();

    setTimeout(() => {
      updateContent(newIndex);
      currentIndex = newIndex;
      removeHiddenState();

      setTimeout(() => {
        isAnimating = false;
      }, animationDuration);
    }, animationDuration);
  }

  function showNext() {
    const newIndex = (currentIndex + 1) % offers.length;
    animateChange(newIndex);
  }

  function showPrev() {
    const newIndex = (currentIndex - 1 + offers.length) % offers.length;
    animateChange(newIndex);
  }

  nextButtons.forEach((button) => {
    button.addEventListener('click', showNext);
  });

  prevButtons.forEach((button) => {
    button.addEventListener('click', showPrev);
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