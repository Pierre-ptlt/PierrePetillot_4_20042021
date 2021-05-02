// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const formulaire = document.getElementById('formulaire');
const firstInput = document.getElementById('first');
const nameInput = document.getElementById('last');
const mailInput = document.getElementById('email');
const dateInput = document.getElementById('birthdate');
const quantityInput = document.getElementById('quantity');
const radioInput = document.querySelector('radio');


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
});

nameInput.addEventListener('input', function() {
  hideError(nameInput);
  if (!isNameValid())
  {
    showError(nameInput);
  }
});

mailInput.addEventListener('input', function() {
  hideError(mailInput);
  if (!emailIsValid(mailInput.value))
  {
    showError(mailInput);
  }
});

quantityInput.addEventListener('input', function(){
  hideError(quantityInput);
  if (isQuantityValid)
  {
    showError(quantityInput);
  }
});

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
  else
  {
    return true;
  }
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
  else
  {
    return true;
  }
}

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isQuantityValid() {
  if (quantityInput.value.length == 0)
  {
    return false;
  }
  else
  {
    return true;
  }
}

function atLeastOneRadio() {
  return ($('input[type=radio]:checked').size() > 0);
}

function isFormValid() {
  let verif = false;
  if (isFirstNameValid && isNameValid && emailIsValid)
  {
    verif = true;
  }
  else {
    verif = false;
  }
  return verif;
}

function displayBtn() {
  let submitBtn = document.querySelector('btn-submit');
  if (!isFormValid)
  {
    submitBtn.setAttribute('disabled', true);
    submitBtn.style.opacity = 0.5;
    submitBtn.style.cursor = 'not-allowed';
  }
}