// document.addEventListener("DOMContentLoaded", () => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartContainer = document.querySelector(".cartItems");
  
//     if (cartItems.length === 0) {
//       cartContainer.innerHTML = "<p>Your cart is empty.</p>";
//     } else {
//       cartItems.forEach(item => {
//         const itemElement = document.createElement("div");
//         itemElement.classList.add("cartItem");
//         itemElement.innerHTML = `<p>${item}</p>`;
//         cartContainer.appendChild(itemElement);
//       });
//     }
  
//     document.querySelector(".clearCartBtn").addEventListener("click", () => {
//       localStorage.removeItem("cart");
//       alert("Cart cleared!");
//       location.reload();
//     });
//   });
  
//   console.log(localStorage.getItem("cart"));


// document.addEventListener('DOMContentLoaded', () => {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.querySelector('.cartItems');
  
//     if (cartItems.length === 0) {
//       cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//     } else {
//       cartItems.forEach(item => {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('cartItem');
//         itemElement.innerHTML = `<p>${item}</p>`;
//         cartContainer.appendChild(itemElement);
//       });
//     }
  
//     document.querySelector('.clearCartBtn').addEventListener('click', () => {
//       localStorage.removeItem('cart');
//       alert('Cart cleared!');
//       location.reload();  // Refresh to show empty cart
//     });
//   });

// document.addEventListener('DOMContentLoaded', () => {
//   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//   const cartContainer = document.querySelector('.cartItems');

//   if (cartItems.length === 0) {
//     cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//   } else {
//     cartItems.forEach((item, index) => {
//       const itemElement = document.createElement('div');
//       itemElement.classList.add('cartItem');
//       itemElement.innerHTML = `
//         <div class="cartItemImage">
//           <img src="${item.image}" alt="${item.name}" width="50">
//         </div>
//         <div class="cartItemName">
//           <p>${item.name}</p>
//         </div>
//         <button class="removeBtn" data-index="${index}">Remove</button>
//       `;
//       cartContainer.appendChild(itemElement);
//     });
//   }

//   // Clear cart functionality
//   document.querySelector('.clearCartBtn').addEventListener('click', () => {
//     localStorage.removeItem('cart');
//     alert('Cart cleared!');
//     location.reload();  // Refresh to show empty cart
//   });

//   // Individual remove button functionality
//   document.querySelectorAll('.removeBtn').forEach(button => {
//     button.addEventListener('click', (e) => {
//       const index = e.target.getAttribute('data-index');
//       cartItems.splice(index, 1); // Remove the item from the array
//       localStorage.setItem('cart', JSON.stringify(cartItems));
//       location.reload();  // Refresh to reflect changes
//     });
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.querySelector('.cartItems');

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItems.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cartItem');
      itemElement.innerHTML = `
        <div class="cartItemImage">
          <img src="${item.image}" alt="${item.name}" width="50">
        </div>
        <div class="cartItemName">
          <p>${item.name}</p>
        </div>
        <button class="removeBtn" data-index="${index}">Remove</button>
      `;
      cartContainer.appendChild(itemElement);
    });
  }

  // Clear cart functionality
  document.querySelector('.clearCartBtn').addEventListener('click', () => {
    localStorage.removeItem('cart');
    alert('Cart cleared!');
    location.reload();  // Refresh to show empty cart
  });

  // Individual remove button functionality
  document.querySelectorAll('.removeBtn').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      cartItems.splice(index, 1); // Remove the item from the array
      localStorage.setItem('cart', JSON.stringify(cartItems));
      location.reload();  // Refresh to reflect changes
    });
  });
});


  
