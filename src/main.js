document.addEventListener("DOMContentLoaded", function(){
const topMenu = document.getElementById('ct-menu')
const toggleMenu = document.getElementById('ct-menu-toggle')

document.addEventListener('click', (e) => {
    if (toggleMenu.contains(e.target)){
        topMenu.classList.toggle('ct-topmenu')
        topMenu.classList.toggle('hidden')
    } else {
        if(topMenu.classList.contains('ct-topmenu')){
            topMenu.classList.remove('ct-topmenu')
            topMenu.classList.add('hidden')
        }
    }
})
})