
var pessoas = [
    {
      nome : 'Jeymson', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personM.jpg', 
      num : '8393964814'
    } , 
    {
      nome : 'Matheus ', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personM.jpg',
      num : '8393118915'
    } , 
    {
      nome : 'Roberto', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personM.jpg',
      num : '8393760279'
    }, 
    {
      nome : 'Pereira', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personM.jpg',
      num : '8391025410'
    }, 
    {
      nome : 'Jose Marcos', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personM.jpg',
      num : '8391788070'
    }, 
    {
      nome: 'Joalison',
      desc: 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img: '../images/personM.jpg',
      num: '8391096977'
    }, 
    {
      nome : 'Luzinete', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personF.jpg',
      num : '93994128867'
    }, 
    {
      nome : 'Edilucia', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personF.jpg',
      num : '8391740725'
    }, 
    {
      nome : 'Geverson', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personM.jpg',
      num : '8391936047'
    }, 
    {
      nome : 'Jobson', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personM.jpg',
      num : '8391857077'
    }, 
    {
      nome : 'Dinho', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personM.jpg',
      num : '8391590269'
    }, 
    {
      nome : 'Jefferson', 
      desc : 'mas nesse caso os elementos podem aumentar para preencher o contêiner ou diminuir',
      img : '../images/personM.jpg',
      num : '8394187115'
    }

  ]




const cardSession = document.getElementById('cardsSession')


function criarCard(nome, desc, img, whatsNum) {
  
  let card = document.createElement('div')
  let imageCard = document.createElement('div')
  let textCard = document.createElement('div')
  let image = document.createElement('img')
  let h2 = document.createElement('h2')
  let parag = document.createElement('p')
  let whatsapp = document.createElement('a')
  
  card.classList.add('card')
  imageCard.classList.add('img')
  textCard.classList.add('info')
  
  image.src = img
  
  h2.textContent = nome
  
  parag.textContent = desc
  
  whatsapp.href = 'https://api.whatsApp.com/send?1=pt_BR&phone=55' + whatsNum
  
  whatsapp.textContent = 'WhatsApp'
  
  imageCard.appendChild(image)
  textCard.appendChild(h2)
  textCard.appendChild(parag)
  textCard.appendChild(whatsapp)
  
  card.appendChild(imageCard)
  card.appendChild(textCard)
  
  cardSession.appendChild(card)
  
}

  
function addCards(pes) {
  
  for (var nP in pes) {
    
    criarCard(pes[nP].nome , pes[nP].desc, pes[nP].img, pes[nP].num)
  }
}

addCards(pessoas)