let octagon = document.getElementById('octagon');


let isMouseDown = false;
let lastX, lastY;


let rotationY = 0;
let rotationX = 0;



   
    octagon.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;

    
    lastX = e.clientX;
    lastY = e.clientY;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

Bajar
document.getElementById("scrollDownBtn").addEventListener("click", function() {
    window.scrollBy({
        top: window.innerHeight * 0.8, // Baja un 80% de la pantalla
        behavior: "smooth" // Hace el desplazamiento suave
    });
});

