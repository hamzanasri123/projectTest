function Myfunction() {
  var x = document.getElementById("nav-bar");

  if (x.className === "menu") {
    x.className += "responsive";
  } else {
    x.className = "menu";
  }
}
