const OnlineStore = require("./OnlineStore")
const Customers = require("./Customers")
const Product = require("./Product")

const myStore = new OnlineStore("Nike");
const airForce1 = new Product(1, "Air Force 1", "Sneakers", 100, 2);
const airMax = new Product(2, "Air Max", "Sneakers", 150);
const swoosh = new Product(3, "Swoosh", "Jogging", 25, 20);
myStore.addProduct(airForce1);
myStore.addProduct(airMax);
const cstCharles = new Customers(1, "Charles", "charles@yahoo.fr", []);
const searchResult = myStore.searchProductsByCategory("sneakers");
myStore.addCustomer(cstCharles);
myStore.searchCustomersByName("Charles");
const customerSearchResult = myStore.searchCustomersByName("Charles");
myStore.searchByPriceRange(10, 220);
const searchPrice = myStore.searchByPriceRange(10, 200);
myStore.purchaseProduct(1, 1);
myStore.purchaseProduct(1, 1);
myStore.purchaseProduct(1, 1);
console.log("Customer", cstCharles);
console.log("myStore", myStore.products);