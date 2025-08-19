let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex - 1].style.display = "block";
}

fetch('https://randomuser.me/api/?results=42')
      .then(response => response.json())
      .then(data => {
        const users = data.results;
        const grid = document.getElementById('userGrid');

        users.forEach(user => {
          const card = document.createElement('div');
          card.className = 'card user-img';

          card.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
          `;

          grid.appendChild(card);
        });
      })
      .catch(error => console.error('Error:', error));