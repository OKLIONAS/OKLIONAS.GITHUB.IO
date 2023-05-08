const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove('visible');
  currentIndex = index;
  slides[currentIndex].classList.add('visible');
}

function showNextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  console.log(nextIndex);
  if (nextIndex > 10) return;  // nummret ska vara den sista sidan som inte kommer att synas
  showSlide(nextIndex);
}

function showPrevSlide() {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  console.log(prevIndex);
  if (prevIndex > 10) return;  // nummret ska vara den sista sidan som inte kommer att synas
  showSlide(prevIndex);
}

function showFirstSlide() {
  showSlide(0);
}



document.getElementById('firstBut').addEventListener('click', showFirstSlide);
document.getElementById('prevBut').addEventListener('click', showPrevSlide);
document.getElementById('nextBut').addEventListener('click', showNextSlide);

