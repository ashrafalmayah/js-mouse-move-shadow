const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const circle = document.querySelector('.circle');
const buttons = document.querySelectorAll('.filters button');
const walk = 40;

function shadow(e){
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { clientX: x, clientY: y } = e;

    const xWalk = ( x / width * walk ) - (walk / 2);
    const yWalk = ( y / height * walk ) - (walk / 2);

    text.style.textShadow = `${xWalk * -1}px ${yWalk * -1}px 5px black`;
    document.documentElement.style.setProperty('--circleX',`${x}px`);
    document.documentElement.style.setProperty('--circleY',`${y}px`);
    // text.animate(
    //     { textShadow: `${xWalk * -1}px ${yWalk * -1}px 5px black`},
    //     { duration: 300, fill:'forwards'});
    // circle.animate(
    //     { top: `${y}px`, left: `${x}px` },
    //     { duration: 300, fill: 'forwards'}
    // );
}

console.log(buttons);
buttons.forEach(button => button.addEventListener('click', e => {
    buttons.forEach(button => circle.classList.remove(`${button.dataset.filtername}`));
    circle.classList.add(`${e.target.dataset.filtername}`);
}));
hero.addEventListener('mousemove', shadow);
hero.addEventListener('touchmove', (e) => {
    shadow(e.touches[0]);
});