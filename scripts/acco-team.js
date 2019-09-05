const team = document.querySelectorAll('.team__item');
const teamAcco = document.querySelector('.team__list');

function accordionTeam() {
  teamAcco.addEventListener('click', function(e) {
    e.preventDefault();
     const link = e.target;

     if (link.classList.contains('team__link')) {
       const teamItem = link.parentNode.parentNode;

       for (const iterator of team) {
         if (iterator != teamItem) {
           iterator.classList.remove('team__item--active');
         }
       }

       if (teamItem.classList.contains('team__item--active')) {
         teamItem.classList.remove('team__item--active');
       } else {
         teamItem.classList.add('team__item--active');
       }
     }
  })
}

accordionTeam();
