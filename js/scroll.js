window.addEventListener("scroll", function(){
    let header = document.getElementById("header");
    let section = document.getElementById("section")
    console.log(header, "aziza");
    header.classList.toggle("sticky", window.scrollY > 55)
    section.classList.toggle("first-m", window.scrollY > 55)
  })