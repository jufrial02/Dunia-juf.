console.log("Dunia Juf dimulai...");

const player = document.getElementById("player");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

document.addEventListener("click", () => {
    x += 20;
    player.style.left = x + "px";
});
const player = document.getElementById("player");

document.addEventListener("click", (e) => {
    player.style.left = e.clientX + "px";
    player.style.top = e.clientY + "px";
});

document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];

    player.style.left = touch.clientX + "px";
    player.style.top = touch.clientY + "px";
});
