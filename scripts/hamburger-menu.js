let hamburger = document.querySelector('.hamburger');
    let hamburgerMenu = document.querySelector('.hamburger-menu');
    let close = document.querySelector('.hamburger-menu__close');
    let body = document.querySelector('body');
    
    let links = document.querySelectorAll('.hamburger-menu__link');

    function toggleMenu() {
      hamburger.classList.toggle('hamburger--active');
      hamburgerMenu.classList.toggle('hamburger-menu--active');
      close.classList.toggle('hamburger-menu__close--active');
      body.classList.toggle('body--active-menu');
    };

    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      toggleMenu();
    });

    close.addEventListener('click', function(e) {
      e.preventDefault();
      toggleMenu();
    });

    links.forEach(function(element) {
      element.addEventListener('click', toggleMenu);
    })