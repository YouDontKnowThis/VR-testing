const button = document.getElementById("btn");
const scene = document.querySelector("a-scene");

button.addEventListener("click", (e) => {
  scene.enterVR();
});
