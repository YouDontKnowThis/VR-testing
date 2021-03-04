const button = document.getElementById("btn");
const scene = document.querySelector("a-scene");
const move = document.querySelector("a-sky");

button.addEventListener("click", (e) => {
  scene.enterVR();
});
