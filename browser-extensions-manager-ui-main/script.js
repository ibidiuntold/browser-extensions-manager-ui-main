 // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const extensionCards = document.querySelectorAll('.extension-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        
        extensionCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'flex';
          } else {
            const status = card.dataset.status;
            card.style.display = status === filter ? 'flex' : 'none';
          }
        });
      });
    });