let cartCount = 0;

// Grab cart badge span
const cartCountElement = document.getElementById('cart-count');

// Grab all buttons with class "add-to-cart"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event to all buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});

// BACK TO TOP FUNCTIONALITY
const topBtn = document.getElementById('top-btn');

// Step 1: Show the button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.remove('hidden');
  } else {
    topBtn.classList.add('hidden');
  }
});

// Step 2: Scroll to top when button is clicked
topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



// Get the "View All Artworks" button
const viewAllBtn = document.querySelector('.view-all-btn button');

// Get all cards with class 'extra-art-hidden'
const hiddenCards = document.querySelectorAll('.extra-art-hidden');

if (viewAllBtn) {
  viewAllBtn.addEventListener('click', () => {
    // Show all hidden cards
    hiddenCards.forEach(card => {
      card.classList.remove('extra-art-hidden'); // remove hiding class
    });

    // Optionally hide the button after clicked
    viewAllBtn.style.display = 'none';
  });
}

