class Product {
    constructor(name, category, price, stocked) {
      this.name = name;
      this.category = category;
      this.price = price;
      this.stocked = stocked;
    }
  
    static getAllProducts() {
      return [
        new Product("Apple", "Fruits", "$1", true),
        new Product("Peas", "Vegetables", "$1", true),
        new Product("Dragonfruit", "Fruits", "$1", true),
        new Product("Passionfruit", "Fruits", "$2", false),
        new Product("Spinach", "Vegetables", "$2", true),
        new Product("Pumpkin", "Vegetables", "$4", true),
      ];
    }
  }
  
  module.exports = Product;
  