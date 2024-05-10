import { faker } from "@faker-js/faker";

class Product {
  static currentId = 0;
  static prices = [75, 45, 98, 67, 47, 65]
  static numberWords = [15, 25, 35, 45]

  constructor(name, url, category) {
      this.id = ++Product.currentId;
      this.name = name;
      this.description = this.randomDescription();
      this.url = url;
      this.category = category;
      this.price = this.randomPrice();
      this.discount = this.hasDiscount();
      this.discountPrice = this.discount > 0 ? this.price - (this.price * this.discount/100) : this.price;
      this.quantity = 0;
  }

  hasDiscount() {
    if (Math.random() >= 0.65){
      return this.randomDiscount();
    } else {
      return 0;
    }
  }

  addQuantity(quantity) {
    if (this.quantity === 0){
      this.quantity++;
    } else {
      this.quantity += quantity;
    }
  }

  removeQuantity(quantity) {
    if (this.quantity > 0) {
      this.quantity -= quantity;
      if (this.quantity < 0 ) {
        this.quantity = 0;
      }
    }
  }

  randomPrice() {
    return Product.prices[Math.floor(Math.random() * Product.prices.length)];
  }

  randomDiscount() {
    return Product.numberWords[Math.floor(Math.random() * Product.numberWords.length)];
  }
  
  randomDescription() {
    return faker.lorem.words(Product.numberWords[Math.floor(Math.random() * Product.numberWords.length)]);
  }
}

export default Product;