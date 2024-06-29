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
const oldHeadingValue = headingValue.innerHTML;






handleHome.addEventListener("click", () => {
    handleHome.style.color = '#ACD793'
    handleAbout.style.color = "#B2C8BA";
    handlePortfolio.style.color = "#B2C8BA";
    handleServices.style.color = "#B2C8BA";
    handleContact.style.color = "#B2C8BA";
  headingValue.innerHTML = oldHeadingValue;
  boxValue.innerHTML = oldBoxValue;
  paraValue.innerHTML = oldParaValue;
});

handleAbout.addEventListener("click", () => {
    handleHome.style.color = '#B2C8BA'
    handleAbout.style.color = "#ACD793";
    handlePortfolio.style.color = "#B2C8BA";
    handleServices.style.color = "#B2C8BA";
    handleContact.style.color = "#B2C8BA";
  headingValue.innerHTML = "About Me";
  boxValue.innerHTML = "";
  paraValue.innerHTML = paraAbout;
});

handlePortfolio.addEventListener("click", () => {
    handleHome.style.color = '#B2C8BA'
    handleAbout.style.color = "#B2C8BA";
    handlePortfolio.style.color = "#ACD793";
    handleServices.style.color = "#B2C8BA";
    handleContact.style.color = "#B2C8BA";
  headingValue.innerHTML= "Portfolio";
  boxValue.innerHTML = '';
  
  paraValue.innerHTML = portfolioContent;
})

handleServices.addEventListener("click",()=>{
    handleHome.style.color = '#B2C8BA'
    handleAbout.style.color = "#B2C8BA";
    handlePortfolio.style.color = "#B2C8BA";
    handleServices.style.color = "#ACD793";
    handleContact.style.color = "#B2C8BA";
    headingValue.innerHTML = "Services";
    paraValue.innerHTML = paraServices;
    boxValue.innerHTML = oldBoxValue;
})
handleContact.addEventListener("click",()=>{
    handleHome.style.color = '#B2C8BA'
    handleAbout.style.color = "#B2C8BA";
    handlePortfolio.style.color = "#B2C8BA";
    handleServices.style.color = "#B2C8BA";
    handleContact.style.color = "#ACD793";
    headingValue.innerHTML = "Contact";
    paraValue.innerHTML = contactContent;
    boxValue.innerHTML = '';

})

let toggleLogo = document.querySelector(".toggle-logo");
let menu = document.querySelector(".menu");

toggleLogo.addEventListener("click", () => {
  menu.classList.toggle("is-active");
});



  

  