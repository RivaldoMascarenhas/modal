const buttonOpenModal = document.getElementById("openModal");

const modalWrapper = document.querySelector(".modal-wrapper");

buttonOpenModal.onclick = function () {
  modalWrapper.classList.remove("invisible");
};

const modal = document.getElementById("modal");

document.addEventListener("keydown", (event) => {
  const isEscKey = event.key === "Escape";
  const isInvisible = modal.classList.contains("invisible");

  if (isEscKey && !isInvisible) {
    modalWrapper.classList.add("invisible");
  }
});