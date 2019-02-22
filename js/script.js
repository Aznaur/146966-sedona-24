var link = document.querySelector(".booking-search");
var popup =  document.querySelector(".hotel-search-wrapper");
link.addEventListener("click", function(evt) {

  evt.preventDefault();

  popup.classList.toggle("modal-show")
})
