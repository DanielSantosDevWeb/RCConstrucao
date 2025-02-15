function animationAnunc() {
  let anunciantesImg = document.querySelector("#anuncImg");

  anunciantesImg.style.transition = "5s";

  anunciantesImg.style.left = "-200%";

  console.log(anunciantesImg.style);
}

let btnHamb = document.querySelector("#menuH");

let menu = document.querySelector('.menu')

//let navBar = document.getElementsByClassName("navBar");


btnHamb.addEventListener("click", () => {
  let navBar = document.getElementsByClassName("navBar");

  let navLeft = navBar[0].style.left;
  
  console.log(menu.checked)
  
  if (menu.checked == true) {
  console.log('abriu')
  navBar[0].style.left = "0%"
}
if (menu.checked == false) {
  navBar[0].style.left = "-300%";
  console.log('fechou')
}
});
