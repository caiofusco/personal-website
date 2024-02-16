import {
    rightContent,
    rightContentSobre,
    rightContentProjetos,
    rightContentAcademico,
    rightContentContato,
    btnCloseMenuHamburguer,
    menuHamburguer
} from "./constants.js";

export function openSection (section) {
    hideAllSections();
    section.style.display = "block";
    closeMenuHamburguer();
}

export function hideAllSections () {
    rightContent.style.display = "none";
    rightContentSobre.style.display = "none";
    rightContentProjetos.style.display = "none";
    rightContentAcademico.style.display = "none";
    rightContentContato.style.display = "none";
}

export function openMenuHamburguer () {
    menuHamburguer.style.display = "block";
    btnCloseMenuHamburguer.style.display = "block";
}

export function closeMenuHamburguer () {
    menuHamburguer.style.display = "none";
    btnCloseMenuHamburguer.style.display = "none";
}