class OnlineStore {
  constructor(name) {
    this.name = name;
    this.products = [];
    this.customers = [];
  }
  //La push()méthode ajoute des valeurs à un tableau.
  addProduct(newProduct) {
    this.products.push(newProduct);
  }
  //Trouver l'index du produit
  removeProduct(product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    //si l'index n'est pas egal à -1 la condition est vraie et le produit est trouvée
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
  // filter permet de filtrer en fonction des criteres de recherches
  searchProductsByCategory(category) {
    return this.products.filter((product) => product.category === category);
  }

  //si le prix du produit est sup ou = au prix minimun et inferieur ou egal au prix maximun, le produit est unclus
  //dans le résultat filtré
  searchByPriceRange(minPrice, maxPrice) {
    const found = this.products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    return found;
  }
  //La push()méthode ajoute des valeurs à un tableau.
  addCustomer(customer) {
    this.customers.push(customer);
  }
  // filter permet de filtrer en fonction des criteres de recherches
  searchCustomersByName(name) {
    const search = this.customers.find((customers) => customers.name === name);
    return search;
  }
  //trouver l'index du produit que l'ont veut acheter, reduire le stock, paramatre "id"
  purchaseProduct(productId, customerId) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );
    if (productIndex === -1) {
      console.log("Product not found");
      return;
    }
    const product = this.products[productIndex];
    if (product.quantity === 0) {
      console.log("Product out of stock");
      return;
    }
    this.products[productIndex].quantity = product.quantity - 1;

    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === customerId
    );
    if (customerIndex === -1) {
      console.log("Customer not found");
      return;
    }
    this.customers[customerIndex].purchaseHistory.push({
      productId: product.id,
      date: new Date(),
      name: product.name,
      price: product.price,
    });

    console.log(`Customer ${this.customers[customerIndex].name} bought ${product.name}`);
  }
}

module.exports = OnlineStore