document.addEventListener("DOMContentLoaded", () => {

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
