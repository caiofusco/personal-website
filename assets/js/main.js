const btnMenuHome = document.querySelector(".home");
const btnMenuSobre = document.querySelector(".sobre");
const btnMenuProjetos = document.querySelector(".projetos");
const btnMenuAcademico = document.querySelector(".academico");
const btnMenuContato = document.querySelector(".contato");

const rightContent = document.querySelector(".right-content");
const rightContentSobre = document.querySelector(".right-content-sobre");
const rightContentProjetos = document.querySelector(".right-content-projetos");
const rightContentAcademico = document.querySelector(".right-content-academico");
const rightContentContato = document.querySelector(".right-content-contato");

const btnMenuHamburguerHome = document.querySelector(".menu-hamburguer__home");
const btnMenuHamburguerSobre = document.querySelector(".menu-hamburguer__sobre");
const btnMenuHamburguerProjetos = document.querySelector(".menu-hamburguer__projetos");
const btnMenuHamburguerAcademico = document.querySelector(".menu-hamburguer__academico");
const btnMenuHamburguerContato = document.querySelector(".menu-hamburguer__contato");

const btnMenuHamburguer = document.querySelector(".btn-menu-hamburguer");
const btnCloseMenuHamburguer = document.querySelector(".btn-close-menu-hamburguer");
const menuHamburguer = document.querySelector(".menu-hamburguer");

function openSection (section) {
    rightContent.style.display = "none";
    rightContentSobre.style.display = "none";
    rightContentProjetos.style.display = "none";
    rightContentAcademico.style.display = "none";
    rightContentContato.style.display = "none";

    section.style.display = "block";
}

btnMenuHome.addEventListener("click", () => {
    openSection(rightContent);
});

btnMenuSobre.addEventListener("click", () => {
    openSection(rightContentSobre);
});

btnMenuProjetos.addEventListener("click", () => {
    openSection(rightContentProjetos);
});

btnMenuAcademico.addEventListener("click", () => {
    openSection(rightContentAcademico);
});

btnMenuContato.addEventListener("click", () => {
    openSection(rightContentContato);
});

btnMenuHamburguer.addEventListener("click", openMenuHamburguer = () => {
    menuHamburguer.style.display = "block";
    btnCloseMenuHamburguer.style.display = "block";
})
  
btnCloseMenuHamburguer.addEventListener("click", closeMenuHamburguer = () => {
    menuHamburguer.style.display = "none";
    btnCloseMenuHamburguer.style.display = "none";
    btnMenuHamburguer.style.display = "block";
})

btnMenuHamburguerHome.addEventListener("click", () => {
    openSection(rightContent);
    menuHamburguer.style.display = "none";
});

btnMenuHamburguerSobre.addEventListener("click", () => {
    openSection(rightContentSobre);
    menuHamburguer.style.display = "none";
});

btnMenuHamburguerProjetos.addEventListener("click", () => {
    openSection(rightContentProjetos);
    menuHamburguer.style.display = "none";
});

btnMenuHamburguerAcademico.addEventListener("click", () => {
    openSection(rightContentAcademico);
    menuHamburguer.style.display = "none";
});

btnMenuHamburguerContato.addEventListener("click", () => {
    openSection(rightContentContato);
    menuHamburguer.style.display = "none";
});