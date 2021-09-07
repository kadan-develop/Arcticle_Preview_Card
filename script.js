const shareBtn = document.querySelector(".button-share");
const popUp = document.querySelector(".active-state");
const btnActive = document.querySelector(".btn-share-active");

shareBtn.addEventListener("click", function () {
  popUp.classList.toggle("hidden");
  btnActive.classList.toggle("hidden");
});
