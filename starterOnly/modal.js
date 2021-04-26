function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

modalClose.addEventListener('click', function() {
    modalbg.style.display = "none";
});

// formulaire si erreur



// conditions validité form

const formulaire = document.getElementById('formulaire');
const firstInput = document.getElementById('first');
const nameInput = document.getElementById('last');
const mailInput = document.getElementById('email');
const dateInput = document.getElementById('birthdate');
const quantityInput = document.getElementById('quantity');
const radio1 = document.getElementById('location1');

firstInput.addEventListener("input", function(e) {
  let value = e.target.value;
  if (value.length >= 2) {
    isValid = true;
  }
  else {
    isValid = false;
  }
});


