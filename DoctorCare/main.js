window.addEventListener('scroll', onScroll)
onScroll();

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + (innerHeight/2)

    //Verificação se seção passou da linha
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //Verificar se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    //Query no ID da section
    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

    //Remover para quando sair da section
    menuElement.classList.remove('active')
    
   if (sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline){
       menuElement.classList.add('active')
   }
}


function showNavOnScroll(){
    if (scrollY > 0){
        navigation.classList.add('scroll')
    }
    else{
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll(){
    if (scrollY > 1450){
        backToTopButton.classList.add('show')
    }
    else{
        backToTopButton.classList.remove('show');
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about content`);
