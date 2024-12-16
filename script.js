// Seleccionar el personaje
const player = document.getElementById("player");

// Coordenadas iniciales
let positionX = window.innerWidth / 2; // Posición horizontal inicial
let positionY = window.innerHeight / 2; // Posición vertical inicial
const step = 10; // Tamaño del movimiento por paso

// Función para mover al personaje
function movePlayer(direction) {
    switch (direction) {
        case "up":
            positionY = Math.max(0, positionY - step); // No salirse por arriba
            player.src = "base personajes/atraz.png";
            break;
        case "down":
            positionY = Math.min(window.innerHeight - player.clientHeight, positionY + step); // No salirse por abajo
            player.src = "base personajes/frente.png";
            break;
        case "left":
            positionX = Math.max(0, positionX - step); // No salirse por la izquierda
            player.src = "base personajes/izquierda.png";
            break;
        case "right":
            positionX = Math.min(window.innerWidth - player.clientWidth, positionX + step); // No salirse por la derecha
            player.src = "base personajes/derecha.png";
            break;
    }

    // Actualizar la posición del personaje
    player.style.left = `${positionX}px`;
    player.style.top = `${positionY}px`;
}

// Detectar teclas para el movimiento
window.addEventListener("keydown", (e) => {
    if (e.key === "w" || e.key === "W") movePlayer("up");
    if (e.key === "s" || e.key === "S") movePlayer("down");
    if (e.key === "a" || e.key === "A") movePlayer("left");
    if (e.key === "d" || e.key === "D") movePlayer("right");
});
