document.addEventListener("DOMContentLoaded", () => {
  
  // Function to match main-box height to aside-box
  function matchCardHeights() {
    const asideBox = document.querySelector('.aside-box');
    const mainBox = document.querySelector('.main-box');
    
    if (asideBox && mainBox) {
      // Wait for images to load
      setTimeout(() => {
        const asideHeight = asideBox.offsetHeight;
        document.documentElement.style.setProperty('--aside-height', `${asideHeight}px`);
        mainBox.style.maxHeight = `${asideHeight}px`;
      }, 100);
    }
  }
  
  // Match heights on load
  matchCardHeights();
  
  // Re-match heights on window resize
  window.addEventListener('resize', matchCardHeights);
  
  // Re-match heights when images load
  const asideImage = document.querySelector('.aside-box img');
  if (asideImage) {
    asideImage.addEventListener('load', matchCardHeights);
  }

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