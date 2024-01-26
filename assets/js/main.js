const btnMenuHome = document.querySelector(".home");
const btnMenuSobre = document.querySelector(".sobre");
const btnMenuProjetos = document.querySelector(".projetos");
const btnMenuAcademico = document.querySelector(".academico");
const btnMenuContato = document.querySelector(".contato");

const btnMenuHamburguerHome = document.querySelector(".menu-hamburguer__home");
const btnMenuHamburguerSobre = document.querySelector(".menu-hamburguer__sobre");
const btnMenuHamburguerProjetos = document.querySelector(".menu-hamburguer__projetos");
const btnMenuHamburguerAcademico = document.querySelector(".menu-hamburguer__academico");
const btnMenuHamburguerContato = document.querySelector(".menu-hamburguer__contato");

const rightContent = document.querySelector(".right-content");
const rightContentSobre = document.querySelector(".right-content-sobre");
const rightContentProjetos = document.querySelector(".right-content-projetos");
const rightContentAcademico = document.querySelector(".right-content-academico");
const rightContentContato = document.querySelector(".right-content-contato");

const btnMenuHamburguer = document.querySelector(".btn-menu-hamburguer");
const btnCloseMenuHamburguer = document.querySelector(".btn-close-menu-hamburguer");
const menuHamburguer = document.querySelector(".menu-hamburguer");

btnMenuHamburguer.addEventListener("click", openMenuHamburguer = () => {
  menuHamburguer.style.display = "block";
  btnCloseMenuHamburguer.style.display = "block";
})

btnCloseMenuHamburguer.addEventListener("click", closeMenuHamburguer = () => {
  menuHamburguer.style.display = "none";
  btnCloseMenuHamburguer.style.display = "none";
  btnMenuHamburguer.style.display = "block";
})

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

// aqui

btnMenuHamburguerHome.addEventListener("click", openHome = () => {
  rightContent.style.display = "block";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "none";

  menuHamburguer.style.display = "none";

});

btnMenuHamburguerSobre.addEventListener("click", openSobre = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "block";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "none";

  menuHamburguer.style.display = "none";

});

btnMenuHamburguerProjetos.addEventListener("click", openProjetos = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "block";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "none";

  menuHamburguer.style.display = "none";

});

btnMenuHamburguerAcademico.addEventListener("click", openAcademico = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "block";
  rightContentContato.style.display = "none";

  menuHamburguer.style.display = "none";

});

btnMenuHamburguerContato.addEventListener("click", openContato = () => {
  rightContent.style.display = "none";
  rightContentSobre.style.display = "none";
  rightContentProjetos.style.display = "none";
  rightContentAcademico.style.display = "none";
  rightContentContato.style.display = "block";

  menuHamburguer.style.display = "none";

});