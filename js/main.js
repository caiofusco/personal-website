// adicionando as variaveis
const menuHome = document.getElementById("home");
const menuSobre = document.getElementById("sobre");
const menuProjetos = document.getElementById("projetos");
const menuAcademico = document.getElementById("academico");
const menuContato = document.getElementById("contato");

// Adicionar um evento de clique à tag

menuHome.addEventListener("click", function() {

  // Selecionar a tag section com a classe "right-content"
  const titleRightContent = document.getElementById("title-right-content");
  const textRightContent = document.getElementById("text-right-content");

  // Modificar as propriedades da tag conforme necessário
  titleRightContent.textContent = "Caio Fusco";
  textRightContent.textContent = "Desenvolvedor Android Nativo - Kotlin";

});

menuSobre.addEventListener("click", function() {

  // Selecionar a tag section com a classe "right-content"
  const titleRightContent = document.getElementById("title-right-content");
  const textRightContent = document.getElementById("text-right-content");

  // Modificar as propriedades da tag conforme necessário
  titleRightContent.textContent = "É isso meu brother!";
  textRightContent.textContent = "Manda salve";

});


