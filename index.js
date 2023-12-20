let x = 0;
let y = 0;

const cube = document.querySelector('.cube')

document.addEventListener('mousemove', (e) => {
    x = e.clientX
    y = e.clientY
    // x = e.layerX
    // y = e.layerY

    cube.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
})

