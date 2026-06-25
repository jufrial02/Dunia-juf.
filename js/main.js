console.log("Dunia Juf dimulai...");

const player = document.getElementById("player");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

document.addEventListener("click", () => {
    x += 20;
    player.style.left = x + "px";
});
