const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const circle = document.querySelector('.circle');
const walk = 40;

function shadow(e){
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { clientX: x, clientY: y } = e;

    const xWalk = ( x / width * walk ) - (walk / 2);
    const yWalk = ( y / height * walk ) - (walk / 2);

    text.style.textShadow = `${xWalk * -1}px ${yWalk * -1}px 5px black`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    // text.animate(
    //     { textShadow: `${xWalk * -1}px ${yWalk * -1}px 5px black`},
    //     { duration: 300, fill:'forwards'});
    // circle.animate(
    //     { top: `${y}px`, left: `${x}px` },
    //     { duration: 300, fill: 'forwards'}
    // );
}

hero.addEventListener('mousemove', shadow);
hero.addEventListener('touchmove', (e) => {
    shadow(e.touches[0]);
});