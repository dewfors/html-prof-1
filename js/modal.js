const buttonSearchHotel = document.querySelector('.button-search-hotel')
const formModal = document.querySelector('.form')
const dateArrival =document.querySelector('#date-arrival')
const dateDeparture =document.querySelector('#date-departure')
const adults =document.querySelector('#adults')
const children =document.querySelector('#children')

let isStorageSupport = true;
let storageAdults = "";
let storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

formModal.classList.add('form-hide')

buttonSearchHotel.addEventListener('click', function (evt) {
  evt.preventDefault()
  formModal.classList.toggle('fadeInDown')
  dateArrival.focus()
  if (storageAdults){
    adults.value = storageAdults
  }
  if (storageChildren){
    children.value = storageChildren
  }
})

formModal.addEventListener("submit", function (evt) {
  if (!dateArrival.value || !dateDeparture.value || !adults.value || !children.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля формы");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formModal.classList.contains("fadeInDown")) {
      evt.preventDefault();
      formModal.classList.remove("fadeInDown");
    }
  }
})
