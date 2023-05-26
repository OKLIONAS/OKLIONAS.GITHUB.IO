function changeColor() {
    var square = document.getElementById("square");
    square.style.backgroundColor = "blue";
  

  document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      event.preventDefault(); // Prevent arrow keys from scrolling the page
      document.getElementById('changeColor').click(); // Trigger the button click event
    }
  });

}