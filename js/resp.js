burger = document.querySelector('.burger')

navBar = document.querySelector('.navbar')

navList = document.querySelector('.navlist')

navRigtt = document.querySelector('#navRight')

burger.addEventListener('click', ()=>{

    navBar.classList.toggle('h-class-resp')

    navList.classList.toggle('v-class-resp')

    navRigtt.classList.toggle('v-class-resp')

})
