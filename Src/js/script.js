function abrirMenu() {
  let menu = document.getElementById("menu");
  let text = document.querySelectorAll(".text, .text-ok");
  //Fazendo a verificação e deixando a barra lateral maior
  if (menu.style.width == "5%") {
    menu.style.transition = "all 0.5s ease";
    menu.style.width = "15%";
    //para cada classe text dentro da function text ela adiciona as classes
    text.forEach(function (text) {
      text.style.transition = "all 0.5s ease";
      text.classList.remove("text");
      text.classList.add("text-ok");
    });
  } else {
    menu.style.transition = "all 0.5s ease";
    menu.style.width = "5%";
    //para cada classe text dentro da function text ela remove as classes
    text.forEach(function (text) {
      text.style.transition = "all 0.5s ease";
      text.classList.add("text");
      text.classList.remove("text-ok");
    });
  }
}