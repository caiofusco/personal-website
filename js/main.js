// adicionando as variaveis
const btnMenuHome = document.getElementById("home");
const btnMenuSobre = document.getElementById("sobre");
const btnMenuProjetos = document.getElementById("projetos");
const btnMenuAcademico = document.getElementById("academico");
const btnMenuContato = document.getElementById("contato");

const rightContent = document.querySelector(".right-content");
const rightContentSobre = document.querySelector(".right-content-sobre");
const rightContentProjetos = document.querySelector(".right-content-projetos");
const rightContentAcademico = document.querySelector(".right-content-academico");
const rightContentContato = document.querySelector(".right-content-contato");

// adicionando os eventos de clique

btnMenuHome.addEventListener("click", openHome = () => {
  rightContent.style.display = "block";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "none";
});

btnMenuSobre.addEventListener("click", openSobre = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "block";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "none";
});

rightContentProjetos.addEventListener("click", openProjetos = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "block";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "none";
});

rightContentAcademico.addEventListener("click", openAcademico = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "block";
  rightContentContato.style.display = "none";
});

rightContentContato.addEventListener("click", openContato = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "block";
});
