function accordionTaste() {
  const tasteItem = document.querySelectorAll('.taste__item');
  const tasteList = document.querySelector('.taste__list');

  tasteList.addEventListener('click', function(e) {
    let button = e.target.parentNode;
    let description = button.nextElementSibling;
    let item = button.parentNode;

    let close = item.querySelector('.taste__close').addEventListener('click', e=> {
      e.preventDefault();
      closeAcco();
    })

    const buttonWidth = button.clientWidth;
    const windowWidth = document.documentElement.clientWidth;
    const breakpointPhone = 480;

    if(e.target.classList.contains('taste__title')) {
      slideAcco();
    } 
      button = e.target;
      description = button.nextElementSibling;
      item = button.parentNode;
        
    if (button.classList.contains('taste__btn')) {
      slideAcco();
    }

    function closeAcco() {
      let item = document.querySelector('.taste__item.taste__item--active');
      item.classList.remove('taste__item--active');
    }
    
    if (e.target.classList.contains('taste__close')) {
      e.preventDefault();
      item.classList.remove('taste__item--active');
    }

    function slideAcco() {
      for (const iterator of tasteItem) {
        if (iterator != item) {
          iterator.classList.remove('taste__item--active');
          tasteList.style.transform = 'translateX(0)';
        }
      }

      if (item.classList.contains('taste__item--active')) {
        item.classList.remove('taste__item--active');
      } else {
        item.classList.add('taste__item--active');

        if (windowWidth <= breakpointPhone) {
          let num;
          for (let i = 0; i < tasteItem.length; i++) {
            if (tasteItem[i] === item) {
              num = tasteItem.length - (i + 1);
            }
          }
          tasteList.style.transform = `translateX(${buttonWidth * num}px)`;
          description.style.width = windowWidth - buttonWidth + 'px';
        }
      }

      
    }
  })

  //closeAcco.addEventListener('click', function(e) {
    //e.preventDefault();
    //tasteItem.classList.remove('taste__item--active');
  //})
}

accordionTaste();