// Storing data in sessionStorage
sessionStorage.setItem('cartItems', '5');

// Retrieving data from sessionStorage
const cartItems = sessionStorage.getItem('cartItems');
console.log(cartItems);

// Removing a specific item from sessionStorage
sessionStorage.removeItem('cartItems');

// Clearing all data from sessionStorage
sessionStorage.clear();
