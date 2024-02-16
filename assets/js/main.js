import {
    btnMenuHome,
    btnMenuSobre,
    btnMenuProjetos,
    btnMenuAcademico,
    btnMenuContato,
    rightContent,
    rightContentSobre,
    rightContentProjetos,
    rightContentAcademico,
    rightContentContato,
    btnMenuHamburguerHome,
    btnMenuHamburguerSobre,
    btnMenuHamburguerProjetos,
    btnMenuHamburguerAcademico,
    btnMenuHamburguerContato,
    btnMenuHamburguer,
    btnCloseMenuHamburguer
} from "./constants.js";

import {
    openSection,
    openMenuHamburguer,
    closeMenuHamburguer
} from "./functions.js";

const menuData = [
    { button: btnMenuHome, section: rightContent },
    { button: btnMenuSobre, section: rightContentSobre },
    { button: btnMenuProjetos, section: rightContentProjetos },
    { button: btnMenuAcademico, section: rightContentAcademico },
    { button: btnMenuContato, section: rightContentContato },
    { button: btnMenuHamburguerHome, section: rightContent },
    { button: btnMenuHamburguerSobre, section: rightContentSobre },
    { button: btnMenuHamburguerProjetos, section: rightContentProjetos },
    { button: btnMenuHamburguerAcademico, section: rightContentAcademico },
    { button: btnMenuHamburguerContato, section: rightContentContato }
];

menuData.forEach(({ button, section }) => {
    button.addEventListener("click", () => {
        openSection(section);
    });
});

btnMenuHamburguer.addEventListener("click", openMenuHamburguer);
btnCloseMenuHamburguer.addEventListener("click", closeMenuHamburguer);