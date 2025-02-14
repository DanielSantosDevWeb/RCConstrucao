function animationAnunc() {
  let anunciantesImg = document.querySelector("#anuncImg");

  anunciantesImg.style.transition = "5s";

  anunciantesImg.style.left = "-200%";

  console.log(anunciantesImg.style);
}

let btnHamb = document.querySelector("#menuH");

btnHamb.addEventListener("click", () => {
  let navBar = document.getElementsByClassName("navBar");

  let navLeft = navBar[0].style.left;

  if (navLeft == "-300%") {
    navBar[0].style.left = "0%";
  } else {
    navBar[0].style.left = "-300%";
  }
});
