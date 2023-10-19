export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="abrir"]')
  const buttonClose = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="container"]')

  if (buttonOpen && buttonClose && containerModal) {
    function toggleModal(event) {
      event.preventDefault()
      containerModal.classList.toggle("ativo")
    }
    function clickOutsideModal(event) {
      if (event.target === this) toggleModal(event)
    }

    buttonOpen.addEventListener("click", toggleModal)
    buttonClose.addEventListener("click", toggleModal)
    containerModal.addEventListener("click", clickOutsideModal)
  }
}
