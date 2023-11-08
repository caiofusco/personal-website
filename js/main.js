
const nome = prompt('digite seu nome')
let myButton = document.getElementById("btn-download-cv");
let myHeading = document.getElementById("text-right-content");

function setUserName() {
    localStorage.setItem("name", nome);
    myHeading.textContent = `Mozilla é legal, ${nome}`;
  }
  
myButton.addEventListener("click", () => {
    setUserName()
})
