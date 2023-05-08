window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var header = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > header) {
    header.classList.add("header");
  } else {
    header.classList.remove("header");
  }
}