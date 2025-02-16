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
  let botao = document.createElement("button");

  card.classList.add("produto");

  img.src = prod.img;
  titulo.textContent = prod.nome;
  preco.textContent = prod.preco;
  botao.textContent = "Vendedores";

  banner.appendChild(titulo);
  banner.appendChild(preco);
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
