var pessoas = [
  {
    nome: "Daniel",
    desc: "",
    img: "../images/vendedores/daniel.jpg",
    num: "83994128864",
  },
  {
    nome: "Edlucia",
    desc: "",
    img: "../images/vendedores/lu.jpg",
    num: "8391740725",
  },
  {
    nome: "Joalison",
    desc: "",
    img: "../images/vendedores/jojo.jpg",
    num: "8391096977",
  },
  {
    nome: "José Marcos",
    desc: "",
    img: "../images/vendedores/marcos.jpg",
    num: "8391788070",
  },
  {
    nome: "Luzinete",
    desc: "",
    img: "../images/vendedores/luzinete.jpg",
    num: "93994128867",
  },
  {
    nome: "Marcelo",
    desc: "",
    img: "../images/vendedores/marcelo.png",
    num: "8391476875",
  },
  {
    nome: "Matheus ",
    desc: "",
    img: "../images/vendedores/matheus.jpg",
    num: "8393118915",
  },
  {
    nome: "Roberto",
    desc: "",
    img: "../images/vendedores/roberto.jpg",
    num: "8393760279",
  },
];

const cardSession = document.getElementById("cardsSession");

function criarCard(nome, desc, img, whatsNum) {
  let card = document.createElement("div");
  let imageCard = document.createElement("div");
  let textCard = document.createElement("div");
  let image = document.createElement("img");
  let h2 = document.createElement("h2");
  let parag = document.createElement("p");
  let whatsapp = document.createElement("a");

  card.classList.add("card");
  imageCard.classList.add("img");
  textCard.classList.add("info");

  image.src = img;

  h2.textContent = nome;

  parag.textContent = desc;

  whatsapp.href = "https://api.whatsApp.com/send?1=pt_BR&phone=55" + whatsNum;

  whatsapp.target = "_blank";

  whatsapp.textContent = "WhatsApp";

  imageCard.appendChild(image);
  textCard.appendChild(h2);
  textCard.appendChild(parag);
  textCard.appendChild(whatsapp);

  card.appendChild(imageCard);
  card.appendChild(textCard);

  cardSession.appendChild(card);
}

function addCards(pes) {
  for (var nP in pes) {
    criarCard(pes[nP].nome, pes[nP].desc, pes[nP].img, pes[nP].num);
  }
}

addCards(pessoas);
