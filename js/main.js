// adicionando as variaveis
const btnMenuHome = document.getElementById("home");
const btnMenuSobre = document.getElementById("sobre");
const btnMenuProjetos = document.getElementById("projetos");
const btnMenuAcademico = document.getElementById("academico");
const btnMenuContato = document.getElementById("contato");

const rightContent = document.querySelector(".right-content");
const rightContentSobre = document.querySelector(".right-content-sobre");


// adicionando os eventos de clique

btnMenuHome.addEventListener("click", openHome = () => {
  rightContent.style.display = "block";
  rightContentSobre.style.display = "none";
});

btnMenuSobre.addEventListener("click", openSobre = () => {
  rightContentSobre.style.display = "block";
  rightContent.style.display = "none";
});
