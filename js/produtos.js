const cardsCer = document.querySelector("#ceramicas");
const cardsTint = document.querySelector("#tintas");
const cardsIlum = document.querySelector("#iluminacao");
const cardsConst = document.querySelector("#construcao");

function addCard(prod, tipo) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let banner = document.createElement("div");
  let titulo = document.createElement("h3");
  let preco = document.createElement("p");
  let dinPix = document.createElement("span");
  let botao = document.createElement("a");

  card.classList.add("produto");

  img.src = prod.img;
  img.draggable = "false";
  titulo.textContent = prod.nome;
  preco.textContent = "R$ " + prod.preco;
  dinPix.textContent = "Dinheiro ou Pix";
  botao.href = "vendedores.html";
  botao.textContent = "Vendedores";

  banner.appendChild(titulo);
  banner.appendChild(preco);
  banner.appendChild(dinPix);
  banner.appendChild(botao);

  card.appendChild(img);
  card.appendChild(banner);

  if (tipo == "ceramica") {
    cardsCer.appendChild(card);
  }

  if (tipo == "tintas") {
    cardsTint.appendChild(card);
  }

  if (tipo == "iluminacao") {
    cardsIlum.appendChild(card);
  }

  if (tipo == "construcao") {
    cardsConst.appendChild(card);
  }
}

function criarCardCeramica(prod) {
  for (var np in prod) {
    addCard(prod[np], "ceramica");
  }
}

function criarCardTintas(prod) {
  for (var np in prod) {
    addCard(prod[np], "tintas");
  }
}

function criarCardIluminacao(prod) {
  for (var np in prod) {
    addCard(prod[np], "iluminacao");
  }
}

function criarCardConstrucao(prod) {
  for (var np in prod) {
    addCard(prod[np], "construcao");
  }
}

fetch("../js/json/produtos.json").then((response) => {
  response.json().then((produtos) => {
    criarCardCeramica(produtos.ceramicas);
    criarCardTintas(produtos.tintas);
    criarCardIluminacao(produtos.iluminacao);
    criarCardConstrucao(produtos.construcao);
  });
});

//SISTEMA DE MOVIMENTO DA DIV DAS CERAMICAS

const container = document.querySelector("#ceramicasDiv");

let estaTocando = false;
let startX, scrollLeft;

container.addEventListener("mousedown", (e) => {
  estaTocando = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mousemove", (e) => {
  if (estaTocando) {
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walkX = (x - startX) * 1;
    container.scrollLeft = scrollLeft - walkX;
  }
});

container.addEventListener("mouseup", (e) => {
  estaTocando = false;
  container.style.cursor = "pointer";
});

container.addEventListener("mouseleave", (e) => {
  estaTocando = false;
});

//SISTEMA DE MOVIMENTO DA DIV DAS TINTAS

const container1 = document.querySelector("#tintasDiv");

container1.addEventListener("mousedown", (e) => {
  estaTocando = true;
  startX = e.pageX - container1.offsetLeft;
  scrollLeft = container1.scrollLeft;
  container1.style.cursor = "grabbing";
});

container1.addEventListener("mousemove", (e) => {
  if (estaTocando) {
    e.preventDefault();
    const x = e.pageX - container1.offsetLeft;
    const walkX = (x - startX) * 1;
    container1.scrollLeft = scrollLeft - walkX;
  }
});

container1.addEventListener("mouseup", (e) => {
  estaTocando = false;
  container1.style.cursor = "pointer";
});

container1.addEventListener("mouseleave", (e) => {
  estaTocando = false;
});

//SISTEMA DE MOVIMENTO DA DIV DAS TINTAS

const container2 = document.querySelector("#iluminacaoDiv");

container2.addEventListener("mousedown", (e) => {
  estaTocando = true;
  startX = e.pageX - container2.offsetLeft;
  scrollLeft = container2.scrollLeft;
  container2.style.cursor = "grabbing";
});

container2.addEventListener("mousemove", (e) => {
  if (estaTocando) {
    e.preventDefault();
    const x = e.pageX - container2.offsetLeft;
    const walkX = (x - startX) * 1;
    container2.scrollLeft = scrollLeft - walkX;
  }
});

container2.addEventListener("mouseup", (e) => {
  estaTocando = false;
  container2.style.cursor = "pointer";
});

container2.addEventListener("mouseleave", (e) => {
  estaTocando = false;
});

//SISTEMA DE MOVIMENTO DA DIV DAS TINTAS

const container3 = document.querySelector("#construcaoDiv");

container3.addEventListener("mousedown", (e) => {
  estaTocando = true;
  startX = e.pageX - container3.offsetLeft;
  scrollLeft = container3.scrollLeft;
  container3.style.cursor = "grabbing";
});

container3.addEventListener("mousemove", (e) => {
  if (estaTocando) {
    e.preventDefault();
    const x = e.pageX - container3.offsetLeft;
    const walkX = (x - startX) * 1;
    container3.scrollLeft = scrollLeft - walkX;
  }
});

container3.addEventListener("mouseup", (e) => {
  estaTocando = false;
  container3.style.cursor = "pointer";
});

container3.addEventListener("mouseleave", (e) => {
  estaTocando = false;
});
