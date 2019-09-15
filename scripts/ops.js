let onePageScroll = () => {
  const content = document.querySelector('.main');
  const pages = content.querySelectorAll('.section');
  const points = document.querySelectorAll('.pagination__item');
  const dataScrollto = document.querySelectorAll('[data-scroll-to]');
  
  let inScroll = false;
  
  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  const isMobile = mobileDetect.mobile();

  addNavigation();
  wheel();
  keyPush();
  
  function doTransition(pageNumber) {
    const position  = `${pageNumber * (-100)}%`;
    
    if(inScroll) return;
    
    inScroll = true;
    
    addClass(pages);
    
    content.style.transform = `translateY(${position})`;
    
    setTimeout(() => {
      inScroll = false;
      addClass(points);
    }, 1000); //transition + 300(инерция скролла)
    
    function addClass(arr) {
      arr[pageNumber].classList.add('active');
      
      for(const item of arr) {
        if(item != arr[pageNumber]) {
          item.classList.remove('active');
        };
      };
    };
  };
 
  function addNavigation() {
    for(const point of dataScrollto) {
      point.addEventListener('click' , e => {
        e.preventDefault();
        doTransition(point.dataset.scrollTo);
      });
    };
  };
  
  function wheel() {
    document.addEventListener('wheel', e => {
      const direct = e.deltaY > 0 ? 'up' : 'down';
      
      scrollToPage(direct);
    });
  };
  
  function keyPush() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 40:
        scrollToPage('up');
          break;
        case 38:
          ('down');
          break;
        default:
          break;
      };
    });
  };
  
  function definePage(arr) {
    for (let i = 0; i < arr.length; i++) {
      let iter = arr[i];
      if (iter.classList.contains('active')) {
        return {
          iterIndex: i,
          iterActive: iter,
          iterNext: iter.nextElementSibling,
          iterPrev: iter.previousElementSibling
        };
      };
    };
  };
  
  function scrollToPage(direct) {
    let page = definePage(pages);
    
    if (direct === 'up' && page.iterNext) {
      let numPage = page.iterIndex + 1;
      
      doTransition(numPage);
    };

    if (direct === 'down' && page.iterPrev) {
      let numPage = page.iterIndex - 1;
      doTransition(numPage);
    };
  };

  if (isMobile) {
    window.addEventListener('touchmove', e => {
      e.preventDefault();
    },
    { passive: false });

    $('body').swipe({
      swipe: (event, direct) => {
        let scrollDirection;
        if (direct === 'up') scrollDirection = 'up';
        if (direct === 'down') scrollDirection = 'down';
        scrollToPage(scrollDirection);
      }
    });
  };
};

onePageScroll();