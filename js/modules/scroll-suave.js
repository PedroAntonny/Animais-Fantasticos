export default function initScrollSuave() {
  const linksInternal = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // })
  }

  linksInternal.forEach((link) => {
    link.addEventListener("click", scrollToSection)
  })
}