const formOrder = document.querySelector('.form');
const sendOrder = document.querySelector('.send');

sendOrder.addEventListener('click', function(e) {
  e.preventDefault();
  // const data = {
  //     name: formOrder.elements.name.value,
  //     phone: formOrder.elements.phone.value,
  //     comment: formOrder.elements.comment.value,
  // };
  const formData = new FormData(formOrder);
  formData.append("name", formOrder.elements.name.value);
  formData.append("phone", formOrder.elements.phone.value);
  formData.append("comment", formOrder.elements.comment.value);
  formData.append("to", "mail@mail.com");
  console.log(formData);
  
  if (validateForm(formOrder)) {
    console.log('форма норм');
    
    const xhr = new XMLHttpRequest();
    
    // xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    // xhr.send(formData);
    // xhr.responseType = "json";
    // xhr.addEventListener('load', () => {
    //   console.log(xhr.response);
    // })
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
