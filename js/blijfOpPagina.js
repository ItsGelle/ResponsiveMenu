//als een link met een submenu geklikt wordt,
//moet ik niet naar de koppeling gaan

let heeftSub = document.querySelectorAll('.heeft-submenu > a');

for(let i=0; i<heeftSub.length; i++) {
    heeftSub[i].addEventListener('click', (e)=> e.preventDefault())
}