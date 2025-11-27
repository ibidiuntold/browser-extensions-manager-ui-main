 // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const extensionCards = document.querySelectorAll('.extension-card');
    const toggleButton = document.querySelector('.button-toggle-style');

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

    // Toggle switch functionality switches active to inactive state
    const toggleSwitches = document.querySelectorAll('.switch input[type="checkbox"]');

    toggleSwitches.forEach(switchInput => {
      switchInput.addEventListener('change', () => {
        const card = switchInput.closest('.extension-card');
        if (switchInput.checked) {
          card.dataset.status = 'active';
          card.classList.add('active');
          card.classList.remove('inactive');
        } else {
          card.dataset.status = 'inactive';
          card.classList.add('inactive');
          card.classList.remove('active');
        }
      });
    });

    // Once I have toggled, the active state should be reflected in the filter buttons
    toggleSwitches.forEach(switchInput => {
      switchInput.addEventListener('change', () => {
        const activeFilterButton = document.querySelector('.filter-btn.active');
        if (activeFilterButton) {
          const filter = activeFilterButton.dataset.filter;
          extensionCards.forEach(card => {
            if (filter === 'all') {
              card.style.display = 'flex';
            } else {
              const status = card.dataset.status;
              card.style.display = status === filter ? 'flex' : 'none';
            }
          });
        }
      });
    });

// Remove button functionality
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert("Are you sure you want to remove this extension?");
        const card = button.closest('.extension-card');
        card.remove();
      });
    });
    
    


      