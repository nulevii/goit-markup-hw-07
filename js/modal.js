(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    if (refs.modal.classList.contains("is-hidden")) {
      setTimeout(() => {
        refs.modal.classList.toggle("is-hidden");
      }, 25);
      refs.modal.classList.toggle("display-none");
    }

    if (!refs.modal.classList.contains("is-hidden")) {
      setTimeout(() => {
        refs.modal.classList.toggle("display-none");
      }, 250);
      refs.modal.classList.toggle("is-hidden");
    }
  }
})();
