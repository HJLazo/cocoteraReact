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
      this.discount = this.hastDiscount();
      this.discountPrice = this.discount ? this.price - (this.price * 0.15) : this.price;
      this.quantity = 0;
  }

  hastDiscount() {
    return Math.random() >= 0.7;
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
  
  randomDescription() {
    return faker.lorem.words(Product.numberWords[Math.floor(Math.random() * Product.numberWords.length)]);
  }
}

export default Product;