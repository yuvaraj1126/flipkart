// document.addEventListener("DOMContentLoaded", () => {
//     const cart = [];
//     const cartBox = document.querySelector(".cartBox");
  
//     document.querySelectorAll(".addToCartBtn").forEach(button => {
//       button.addEventListener("click", () => {
//         const itemDescription = button.closest(".item").querySelector(".itemDescription").textContent;
//         cart.push(itemDescription);
//         alert(`${itemDescription} added to cart!`);
//         cartBox.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cart.length})`;
//       });
//     });
//   });
  

  // document.addEventListener("DOMContentLoaded", () => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   const cartBox = document.querySelector(".cartBox");
  
  //   document.querySelectorAll(".addToCartBtn").forEach(button => {
  //     button.addEventListener("click", () => {
  //       const itemDescription = button.closest(".item").querySelector(".itemDescription").textContent;
  //       cart.push(itemDescription);
  //       localStorage.setItem("cart", JSON.stringify(cart));
  //       alert(`${itemDescription} added to cart!`);
  //       cartBox.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cart.length})`;
  //     });
  //   });
  
  //   if (cartBox) {
  //     cartBox.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cart.length})`;
  //   }
  // });

  document.addEventListener("DOMContentLoaded", () => {
    const cartBox = document.querySelector(".cartBox");
    if (cartBox) {
      cartBox.addEventListener("click", () => {
        window.location.href = "cart.html"; // Redirect to the cart page
      });
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartBox = document.querySelector(".cartBox");
  
    document.querySelectorAll(".addToCartBtn").forEach(button => {
      button.addEventListener("click", () => {
        const itemDescription = button.closest(".item").querySelector(".itemDescription").textContent;
        const itemImage = button.closest(".item").querySelector("img").src;  // Get the image source
        const cartItem = { name: itemDescription, image: itemImage };
  
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));
  
        alert(`${itemDescription} added to cart!`);
        cartBox.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cart.length})`;
      });
    });
  
    if (cartBox) {
      cartBox.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cart.length})`;
    }
  });
  
  
  