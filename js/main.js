let elMenuBtn = document.querySelector(".site-menu");
let elNavList = document.querySelector(".nav__list");
let elMenuBtnCha = document.querySelector(".site-menu__btn");

elMenuBtn.addEventListener("click", ()=>{
  elNavList.classList.toggle("close");
});

elMenuBtn.addEventListener("click", ()=>{
  elMenuBtnCha.classList.toggle("exit");
});


var typed = new Typed('.hero__animate', {
  strings:['Olimjon', 'Student', 'Developer' , 'Designer'],
  typeSpeed:70,
  backSpeed:50,
  loop:true
});
