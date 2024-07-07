  // Simulated product data
  const products = [
    { id: 1, name: 'Product 1', price: 49.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 1.' },
    { id: 2, name: 'Product 2', price: 29.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 2.' },
    { id: 3, name: 'Product 3', price: 19.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 3.' },
    { id: 4, name: 'Product 4', price: 39.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 4.' },
    { id: 5, name: 'Product 5', price: 59.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 5.' },
    { id: 6, name: 'Product 6', price: 24.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 6.' },
    { id: 7, name: 'Product 7', price: 54.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 7.' },
    { id: 8, name: 'Product 8', price: 34.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 8.' },
    { id: 9, name: 'Product 9', price: 14.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 9.' },
    { id: 10, name: 'Product 10', price: 64.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 10.' },
    { id: 11, name: 'Product 11', price: 44.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 11.' },
    { id: 12, name: 'Product 12', price: 29.99, image: './assets/pexels-olly-3771110.jpg', description: 'Description of product 12.' }
];

// Function to display products
function displayProducts(productsToShow) {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = `
  <div class="product">
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <p>${product.description}</p>
  </div>
`;
        productContainer.innerHTML += productCard;
    });
}

// Load initial set of products
displayProducts(products.slice(0, 12)); // Display first 6 products initially

// Functionality for "View More" button
const viewMoreBtn = document.getElementById('viewMoreBtn');
const viewLessBtn = document.getElementById('viewLessBtn');

viewMoreBtn.addEventListener('click', () => {
    document.querySelectorAll('.product.hidden').forEach(product => {
        product.classList.remove('hidden');
    });

    viewMoreBtn.style.display = 'none';
    viewLessBtn.style.display = 'inline-block';
});

// Functionality for "View Less" button
viewLessBtn.addEventListener('click', () => {
    document.querySelectorAll('.product:nth-of-type(n+7)').forEach(product => {
        product.classList.add('hidden');
    });

    viewMoreBtn.style.display = 'inline-block';
    viewLessBtn.style.display = 'none';
});

const hamburger = document.getElementById('hamburger');
const navLinksLeft = document.querySelector('.left-links');
const navLinksRight = document.querySelector('.right-links');

hamburger.addEventListener('click', () => {
navLinksLeft.classList.toggle('show');
navLinksRight.classList.toggle('show');
});