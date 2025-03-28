let octagon = document.getElementById('octagon');


let isMouseDown = false;
let lastX, lastY;


let rotationY = 0;
let rotationX = 0;

document.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    let deltaX = e.clientX - lastX;
    let deltaY = e.clientY - lastY;

   
    rotationY += deltaX * 0.1; 
    rotationX += deltaY * 0.0; 

   
    octagon.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;

    
    lastX = e.clientX;
    lastY = e.clientY;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});
