let slideIndex = 1;
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);

  // Optional: autoplay every 3s
  // setInterval(() => plusSlides(1), 3000);

  fetch('https://randomuser.me/api/?results=42')
    .then(response => response.json())
    .then(data => {
      const users = data.results;
      const grid = document.getElementById('userGrid');

      if (!grid) {
        console.error("No element with id='userGrid' found in HTML.");
        return;
      }

      users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card user-img';

        card.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}">
        `;

        grid.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching users:', error));
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (!slides.length) return; // Prevent error if no slides exist

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  Array.from(slides).forEach(slide => slide.style.display = "none");

  slides[slideIndex - 1].style.display = "block";
}