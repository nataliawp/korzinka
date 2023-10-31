window.addEventListener("scroll", function(){
    let header = document.getElementById("header");
    let section = document.getElementById("section")
    console.log(header, "aziza");
    header.classList.toggle("sticky", window.scrollY > 55)
    section.classList.toggle("first-m", window.scrollY > 55)
  })

  function menuKatalog() {
    var x = document.getElementById("menu");
    var icon = document.getElementById("btn")
    if (x.className === "menu col-lg-3 d-none") {
      x.className = "menu col-lg-3 onPos d-flex";
    } else {
      x.className = "menu col-lg-3 d-none";
    }
    if (icon.className === "iconka") {
      icon.className = "iconka close";
    } else {
      icon.className = "iconka";
    }
  }