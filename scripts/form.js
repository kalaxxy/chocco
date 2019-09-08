const formOrder = document.querySelector('.form');
const sendOrder = document.querySelector('.send');

sendOrder.addEventListener('click', function(e) {
  e.preventDefault();

  const formData = new FormData(formOrder);
  formData.append("name", formOrder.elements.name.value);
  formData.append("phone", formOrder.elements.phone.value);
  formData.append("comment", formOrder.elements.comment.value);
  formData.append("to", "mail@mail.com");
  console.log(formData);
  
  if (validateForm(formOrder)) {
    console.log('форма норм');
    
    const xhr = new XMLHttpRequest();
    const modal = document.querySelector(".modal-wrap").innerHTML;
    const overlay = createOverlay(modal);
    
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.responseType = "json";
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
      if (xhr.response.status) {
        overlay.open();
        overlay.setMessage('Сообщение отправлено');
        formOrder.reset();
      } else {
        overlay.open();
        overlay.setMessage('Упс. Попробуйте еще раз');
      }
    });
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateInput(form.elements.name)) {
    valid = false;
  }
  if (!validateInput(form.elements.phone)) {
    valid = false;
  }
  if (!validateInput(form.elements.comment)) {
    valid = false;
  }

  return valid;
};

function validateInput(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  field.nextElementSibling.style.color = 'red';
  return field.checkValidity;
};
