const reviewContent = document.querySelectorAll('.reviews__content');
const reviewList = document.querySelector('.reviews__list');
const reviewItem = document.querySelectorAll('.reviews__item');

reviewList.addEventListener('click', function(e) {
  e.preventDefault();
  const currentReview = e.target.parentNode;
  const currentReviewId = currentReview.parentNode.id;
  
  if (currentReview.classList.contains('reviews__link')) {
    for (const iterator of reviewItem) {
      if (iterator !== currentReview) { 
        iterator.classList.remove('reviews__item--active');
      }
      console.log(iterator);
    }

    if (!currentReview.parentNode.classList.contains('reviews__item--active')) {
      currentReview.parentNode.classList.add('reviews__item--active');
    }
    console.log(currentReview)
    reviewContent.forEach(function(content) {
      if (currentReviewId == content.id) {
        content.classList.add('reviews__content--active');
      } else {
        content.classList.remove('reviews__content--active');
      }
    })
  }
})