// Steps
// 1. Create an interface Product with the following fields:
// name : string
// price: number
// category: "food" | "clothes" | "electronics"
// 2. Create a type Category with the possible categories (food, clothes, electronics)
// 3. Create an interface Customer with the following fields:
// name : string;
// email: string
// cart: Product[] - an array containing the products in the customers's cart
// 4. Create two example products (e.g., an apple and a T-shirt).
// 5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product {
    name: string;
    price: number;
    category: Category;
}

interface Customer {
    name: string;
    email: string;
    cart: Product[];
}

const apple: Product = {
    name: "apple",
    price: 5,
    category: "food"
}

const tShirt: Product = {
    name: "T-Shirt",
    price: 27,
    category: "clothes",
}
// add more products


const products: Product[] = [apple, tShirt];


const firstCustomer: Customer = {
    name: "Mladen Ivanov",
    email: "mlivanov@abv.bg",
    cart: products
}
// add second customer
// add function displayCart - displays cart customer name and products
// add function filterByCategory - receive products and category as parameters and filter the products by given category
// add function calculateTotalPrice - receive customer data and combine all products price (customer.cart[0].price)


// HOMEWORK MiNI online shop


//adding more products
const laptop: Product = {
    name: "Laptop",
    price: 1700,
    category: "electronics"
};

const mixer: Product = {
    name: "Mixer",
    price: 53,
    category: "electronics"
}


const phone: Product = {
    name: "Samsung",
    price: 430,
    category: "electronics"
}

const coat: Product = {
    name: "Coat",
    price: 350,
    category: "clothes"
};

const pants: Product = {
    name: "Pants",
    price: 55,
    category: "clothes"
};

const chips: Product = {
    name: "Chips",
    price: 4.50,
    category: "food"
}

const choco: Product = {
    name: "Chocolate",
    price: 3.5,
    category: "food"
}


// adding new customer
const secondCustomer: Customer = {
    name: "Kaloyan Iliev",
    email: "iliev@email.bg",
    cart: [],
}

// declare function which adds products in cart
function addProduct(client: Customer, product: Product) {
    client.cart.push(product);
}


// declare function which removes products from cart
function removeProduct(client: Customer, product: Product) {
    client.cart = client.cart.filter(element => element !== product);
}

console.log(secondCustomer.cart);
addProduct(secondCustomer, apple);
addProduct(secondCustomer, chips);
console.log(secondCustomer.cart);
removeProduct(secondCustomer, chips);
console.log(secondCustomer.cart);
removeProduct(secondCustomer, apple);
console.log(secondCustomer.cart);

//// declare display cart function - displays cart customer name and products
function displayCart(client: Customer) {
    return `This is customer ${client.name} whose cart contains ${client.cart.map((product: Product) => product.name)}`
}

console.log(displayCart(firstCustomer));

addProduct(secondCustomer, tShirt);
addProduct(secondCustomer, chips);
addProduct(secondCustomer, mixer);
addProduct(secondCustomer, pants);
console.log(displayCart(secondCustomer))

//// add function filterByCategory - receive products and category as parameters and filter the products by given category

// declare an array of products[] 
const productCatalog: Product[] = [apple, tShirt, mixer, pants, chips, choco, phone, laptop]



function filterByCategory(products: Product[], category: Category) {
    return products.filter((product) => product.category == category)
}



console.log("Products of category electronics: ", filterByCategory(productCatalog, "electronics"));
console.log("Products of category food: ", filterByCategory(productCatalog, "food"));
console.log("Products of category clothes: ", filterByCategory(productCatalog, "clothes"));


//// declare function calculateTotalPrice - receive customer data and combine all products price
function calculateTotalPrice(client: Customer) {
    // declare variable which holds total price of products in customer's cart
let total: number = 0;
    client.cart.map((product: Product) => { total = total + product.price })
    return total;
}

console.log(`Total price of products in cart is ${calculateTotalPrice(firstCustomer)}$`);
console.log(`Total price of products in cart is ${calculateTotalPrice(secondCustomer)}$`);