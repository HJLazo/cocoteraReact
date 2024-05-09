class Product {
  static currentId = 0;

  constructor(name, description, url, category) {
      this.id = ++Product.currentId;
      this.name = name;
      this.description = description;
      this.url = url;
      this.category = category;
      this.price = 10;
      this.discount = this.hastDiscount();
      this.discountPrice = this.discount ? this.price - (this.price * 0.15) : this.price;
  }

  hastDiscount() {
    return Math.random() >= 0.7;
    }
}

export default Product;