var link = document.querySelector(".booking-search");
var popup =  document.querySelector(".hotel-search-wrapper");

if (link) {
  if (popup) {
    popup.classList.add("modal-hide");
  };

  link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.toggle("modal-hide");
    popup.classList.toggle("modal-show");
  });
};
