export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen)
    this.buttonClose = document.querySelector(buttonClose)
    this.containerModal = document.querySelector(containerModal)

    // bind this ao ballback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickOutsideModal = this.clickOutsideModal.bind(this)
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo")
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  // fecha o modal ao clicar do lado de fora
  clickOutsideModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal()
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal)
    this.buttonClose.addEventListener("click", this.eventToggleModal)
    this.containerModal.addEventListener("click", this.clickOutsideModal)
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvents()
    }
    return this
  }
}
