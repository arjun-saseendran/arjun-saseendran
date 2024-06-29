const handleHome = document.getElementById("home");
const handleAbout = document.getElementById("about");
const handlePortfolio = document.getElementById("portfolio");
const handleServices = document.getElementById("services");
const handleContact = document.getElementById("contact");
const paraValue = document.getElementById("para-value");
const boxValue = document.getElementById("box-row");
const headingValue = document.getElementById("heading");
const oldParaValue = paraValue.innerHTML;
const oldBoxValue = boxValue.innerHTML;
const oldHeadingValue = headingValue.innerHTML


handleHome.addEventListener("click", () => {
  headingValue.innerHTML = oldHeadingValue;
  boxValue.innerHTML = oldBoxValue;
  paraValue.innerHTML = oldParaValue;
});

handleAbout.addEventListener("click", () => {
  headingValue.innerHTML = "About Me";
  boxValue.innerHTML = "";
  paraValue.innerHTML = paraAbout;
});

handlePortfolio.addEventListener("click", () => {
  headingValue.innerHTML= "Portfolio";
  boxValue.innerHTML = '';
  
  paraValue.innerHTML = portfolioContent;
})

handleServices.addEventListener("click",()=>{
    headingValue.innerHTML = "Services";
    paraValue.innerHTML = paraServices;
    boxValue.innerHTML = oldBoxValue;
})
handleContact.addEventListener("click",()=>{
    headingValue.innerHTML = "Contact";
    paraValue.innerHTML = contactContent;
    boxValue.innerHTML = '';

})

let toggleLogo = document.querySelector(".toggle-logo");
let menu = document.querySelector(".menu");

toggleLogo.addEventListener("click", () => {
  menu.classList.toggle("is-active");
});



  

  