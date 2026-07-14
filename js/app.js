document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Product Showcase Slider
  const productScrollContainer = document.querySelector('.product-scroll-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (productScrollContainer && prevBtn && nextBtn) {
    const scrollAmount = 350; // Roughly the width of one card + gap

    prevBtn.addEventListener('click', () => {
      productScrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      productScrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // Category Filtering Logic for Shop Page
  const categoryCircles = document.querySelectorAll('.category-circle-item');
  const allProductCards = document.querySelectorAll('.all-products-grid .product-card');

  if (categoryCircles.length > 0 && allProductCards.length > 0) {
    categoryCircles.forEach(circle => {
      circle.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all
        categoryCircles.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked circle
        this.classList.add('active');
        
        // Get the selected category from the href
        const filterCategory = this.getAttribute('href').substring(1).toLowerCase();
        
        // Update the dynamic heading
        const titleElement = document.getElementById('dynamic-category-title');
        if (titleElement) {
          const circleTitle = this.querySelector('.category-circle-title');
          if (circleTitle) {
            titleElement.innerText = circleTitle.innerText;
          }
        }
        
        allProductCards.forEach(card => {
          const cardCategoryElement = card.querySelector('.product-category');
          if (cardCategoryElement) {
            const cardCategory = cardCategoryElement.innerText.toLowerCase().trim();
            
            // Check for match, allow singular/plural mismatches (e.g., saree vs sarees)
            if (filterCategory === 'all' || cardCategory.includes(filterCategory) || filterCategory.includes(cardCategory)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
    
    // Set "All Collection" as active by default
    const allCircle = document.querySelector('.category-circle-item[href="#all"]');
    if (allCircle) {
      allCircle.classList.add('active');
    }
  }

  // Global: Make entire product card clickable
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', function(e) {
      // Don't redirect if clicking on a button or an existing link
      if (e.target.closest('button') || e.target.closest('a')) {
        return;
      }
      
      // Find the product link inside this specific card
      const productLink = this.querySelector('.product-name a');
      if (productLink && productLink.href) {
        window.location.href = productLink.href;
      }
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
      }
    });
  }
});
