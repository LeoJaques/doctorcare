window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showBackToTopButtonOnScroll()
  showNavOnScroll()

  activateMenuAtCurrentSetion(home)
  activateMenuAtCurrentSetion(services)
  activateMenuAtCurrentSetion(about)
  activateMenuAtCurrentSetion(contact)
}

function activateMenuAtCurrentSetion(section) {
  const targetLine = scrollY + innerHeight / 2
  
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = 
  sectionTopReachOrPassedTargetLine && sectionEndPassedTargetLine

  const sectionId = section.getAtribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
  // 2:31:00
}


function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 1500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duratio: 700
}).reveal(`
  #hom,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header
  #about content`)
