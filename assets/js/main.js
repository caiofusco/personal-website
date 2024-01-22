const btnMenuHome = document.querySelector("#home");
const btnMenuSobre = document.querySelector("#sobre");
const btnMenuProjetos = document.querySelector("#projetos");
const btnMenuAcademico = document.querySelector("#academico");
const btnMenuContato = document.querySelector("#contato");

const rightContent = document.querySelector(".right-content");
const rightContentSobre = document.querySelector(".right-content-sobre");
const rightContentProjetos = document.querySelector(".right-content-projetos");
const rightContentAcademico = document.querySelector(".right-content-academico");
const rightContentContato = document.querySelector(".right-content-contato");

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

btnMenuProjetos.addEventListener("click", openProjetos = () => {
  console.log("clicou");
  rightContent.style.display = "none";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "block";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "none";
});

btnMenuAcademico.addEventListener("click", openAcademico = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "block";
  rightContentContato.style.display = "none";
});

btnMenuContato.addEventListener("click", openContato = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "block";
});
