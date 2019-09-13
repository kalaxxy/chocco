// let onePageScroll = () => {
//   const content = $('.main');
//   const pages = $('.section');
//   const points = $('.pagination__item');
//   const dataScrollTo = $('[data-scroll-to]');

//   let inScroll = false;

//   addNavigation();
//   wheel();
//   keyPush();

//   function addNavigation() {
//     for(const point of dataScrollTo) {
//       $(point).on('click' , e => {
//         e.preventDefault();
//         doTransition(point.dataset.scrollTo);
//       });
//     };
//   };
  
//   function doTransition(pageNumber) {
//     const position  = `${pageNumber * (-100)}%`;
    
//     if(inScroll) return;
//     inScroll = true;
    
//     addClass(pages);
    
//     content.css('transform', `translateY(${position})`);
    
//     setTimeout(() => {
//       inScroll = false;
//       addClass(points);
//     }, 1000);
    
//     function addClass(arr) {
//       $(arr[pageNumber]).addClass('active');
      
//       for(const item of arr) {
//         if(item != $(arr[pageNumber])) {
//           $(item).removeClass('active');
//         };
//       };
//     };
//   };

//   function wheel() {
//     $(document).on('wheel', e => {
//       const direct = e.deltaY > 0 ? 'up' : 'down';
//       scrollToPage(direct);
//     });
//   };

//   function keyPush() {
//     $(document).on('keydown', e => {
//       switch (e.keyCode) {
//         case 40:
//         scrollToPage('up');
//           break;
//         case 38:
//         scrollToPage('down');
//           break;
//         default:
//           break;
//       };
//     });
//   };

//   function definePage(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let iter = arr[i];
//       if ($(iter).hasClass('active')) {
//         return {
//           iterIndex: i,
//           iterActive: iter,
//           iterNext: iter.nextElementSibling,
//           iterPrev: iter.previousElementSibling
//         };
//       };
//     };
//   };

//   function scrollToPage(direct) {
//     let page = definePage(pages);
    
//     if (direct === 'up' && page.iterNext) {
//       let numPage = page.iterIndex + 1;
      
//       doTransition(numPage);
//     };

//     if (direct === 'down' && page.iterPrev) {
//       let numPage = page.iterIndex - 1;
//       doTransition(numPage);
//     };
//   };
// };

// onePageScroll();

let onePageScroll = () =>{
  const content = document.querySelector('.main');
  const pages = content.querySelectorAll('.section');
  const points = document.querySelectorAll('.pagination__item');
  const dataScrollto = document.querySelectorAll('[data-scroll-to]');
  
  let inScroll = false;
  
  addNavigation();
  wheel();
  keyPush();
  
  //   функция прокрутки к нужной странице
  function doTransition(pageNumber){
    const position  = `${pageNumber * (-100)}%`;
    
    if(inScroll) return;
    
    inScroll = true;
    
    addClass(pages);
    
    content.style.transform = `translateY(${position})`;
    
    setTimeout(() => {
      inScroll = false;
      addClass(points);
    }, 1000); //transition + 300(инерция скролла)
    
    function addClass(arr){
      arr[pageNumber].classList.add('active');
      
      for(const item of arr){
        if(item != arr[pageNumber]){
          item.classList.remove('active');
        }
      }
    }
  }
 
  // функция навигации по клику data-scroll
  function addNavigation(){
    for(const point of dataScrollto){
      point.addEventListener('click' , e=>{
        e.preventDefault();
        doTransition(point.dataset.scrollTo);
      })
    }
  }
  
  // функция работы с колесиком мышки
  function wheel() {
    document.addEventListener('wheel', e => {
      const direct = e.deltaY > 0 ? 'up' : 'down';
      
      scrollToPage(direct);
    })
  }
  
  // функция отработки нажатия стрелочек на клавиатуре
  function keyPush() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 40:
        scrollToPage('up');
          break;
        case 38:
        scrollToPage('down');
          break;
        default:
          break;
      }
    })
  }
  
  // функция определения нужной страницы нам и навешивает класс активный
  function definePage(arr){
    for (let i = 0; i < arr.length; i++) {
      let iter = arr[i];
      if (iter.classList.contains('active')){
        return {
          iterIndex: i,
          iterActive: iter,
          iterNext: iter.nextElementSibling,
          iterPrev: iter.previousElementSibling
        }
      }   
    }
  }
  
  // функция определяет куда скроли полльзователь и вызывает doTransition
  function scrollToPage(direct){
    let page = definePage(pages);
    
    if (direct === 'up' && page.iterNext) {
      let numPage = page.iterIndex + 1;
      
      doTransition(numPage);
    }

    if (direct === 'down' && page.iterPrev) {
      let numPage = page.iterIndex - 1;
      doTransition(numPage);
    }
  }
}

onePageScroll();
