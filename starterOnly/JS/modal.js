// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById('formulaire');
const modalClose = document.querySelector(".close");
const formulaire = document.getElementById('formulaire');
const firstInput = document.getElementById('first');
const nameInput = document.getElementById('last');
const mailInput = document.getElementById('email');
const dateInput = document.getElementById('birthdate');
const quantityInput = document.getElementById('quantity');
const radioInput = document.querySelector('radio');
const submitBtn = document.querySelector('.btn-submit');
const radios =  document.querySelectorAll('[name=location]');
const conditionCheck = document.getElementById('checkbox1');



// modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener('click', hideModal);

// error form
firstInput.addEventListener('input', function() {
  hideError(firstInput);
  if (!isFirstNameValid())
  {
    showError(firstInput);
  }
  isFormValid();
});

nameInput.addEventListener('input', function() {
  hideError(nameInput);
  if (!isNameValid())
  {
    showError(nameInput);
  }
  isFormValid();
});

mailInput.addEventListener('input', function() {
  hideError(mailInput);
  if (!isEmailValid())
  {
    showError(mailInput);
  }
  isFormValid();
});

quantityInput.addEventListener('input', function(){
  hideError(quantityInput);
  if (!isQuantityValid())
  {
    showError(quantityInput);
  }
  isFormValid();
});

conditionCheck.addEventListener('click', function() {
  hideError(conditionCheck);
  if (!isConditionValid())
  {
    showError(conditionCheck);
  }
  isFormValid();
});

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('success').style.display = 'block';
  form.style.display = "none";
});

for (let radio of radios) {
  radio.addEventListener('click', function() {
    isFormValid();
    return 0;
  });
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function launchModal() {
  modalbg.style.display = "block";
  disableSubmitBtn();
}

function hideModal() {
  modalbg.style.display = "none";
}

function showError(field) {
  let parent = field.closest('div');
  parent.setAttribute('data-error-visible', true);
}

function hideError(field) {
  let parent = field.closest('div');
  parent.setAttribute('data-error-visible', false);
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

function isFirstNameValid() {

  if (firstInput.value.length <= 2 || firstInput.value.length > 40)
  {
    return false;
  }
  if (hasNumber(firstInput.value))
  {
    return false;
  }
  return true;
}

function isNameValid()
{

  if (nameInput.value.length <= 2 || nameInput.value.length > 40)
  {
    return false;
  }
  if (hasNumber(nameInput.value))
  {
    return false;
  }
  return true;
}

function isEmailValid () {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailInput.value);
}

function isQuantityValid() {
  return (quantityInput.value.length > 0 && quantityInput.value >= 0);
}

function isConditionValid() {
  if (conditionCheck.checked)
  {
    return true;
  }
  return false;
}

function isCityValid() {
  for (let radio of radios)
  {
    if (radio.checked)
    {
      return true;
    }
  }
  return false;
}

function isFormValid() {
  disableSubmitBtn();
  let isValid = (isCityValid()
  && isNameValid()
  && isEmailValid()
  && isFirstNameValid()
  && isConditionValid());

  if (isValid)
  {
    enableSubmitBtn();
  }
  return isValid;
}

function enableSubmitBtn() {
  {
    submitBtn.disabled = false;
    submitBtn.style.opacity = 1;
    submitBtn.style.cursor = 'pointer';
  }
}

function disableSubmitBtn() {
  {
    submitBtn.disabled = true;
    submitBtn.style.opacity = 0.5;
    submitBtn.style.cursor = 'not-allowed';
  }
}