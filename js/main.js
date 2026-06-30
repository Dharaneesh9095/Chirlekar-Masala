// Search button alert
const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

if(searchBtn){
  searchBtn.addEventListener("click", () => {
    if(searchInput.value.trim() === ""){
      alert("Please enter product name");
    } else {
      alert("Searching for: " + searchInput.value);
    }
  });
}

// Add to cart buttons
const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Product added to cart successfully!");
  });
});