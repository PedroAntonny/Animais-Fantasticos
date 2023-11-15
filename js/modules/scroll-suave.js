export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternal = document.querySelectorAll(links)
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" }
    } else {
      this.options = options
    }

    this.scrollToSection = this.scrollToSection.bind(this)
  }

  scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView(this.options)

    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // })
  }

  addLinkEvent() {
    this.linksInternal.forEach((link) => {
      link.addEventListener("click", this.scrollToSection)
    })
  }

  init() {
    if (this.linksInternal.length) {
      this.addLinkEvent()
    }
    return this
  }
}
