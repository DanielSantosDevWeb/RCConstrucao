
    let btnHamb = document.querySelector('#menuH')

    
    let navBar = document.getElementsByClassName('navBar')

      navBar[0].style.left = '-300%'
    
    btnHamb.addEventListener('click', ()=> {
      
      
      let navLeft = navBar[0].style.left
      
      if( navLeft == '-300%' ) {
        
        navBar[0].style.left = '0%'
        
      } else {
        
        navBar[0].style.left = '-300%'
        
      }
      
      
    } )
    
console.log('func')