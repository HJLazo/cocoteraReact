class User {
  static currentId = 0;

  constructor(name, email, password, passwordConfirm) {
      this.id = ++User.currentId;
      this.name = name;
      this.email = email;
      this.password = password;
      this.passwordConfirm = passwordConfirm;
      this.cart = [];
  }

  addCart(newCart) {
    if (this.cart.length === 0) {
      this.cart = [...newCart];
    } else {
      newCart.forEach(newItem => {
        const existingItemIndex = this.cart.findIndex(item => item.id === newItem.id);
        if (existingItemIndex >= 0) {
          this.cart[existingItemIndex].quantity = newItem.quantity;
        } else {
          this.cart.push(newItem);
        }
      });
    }
  }
  
  addAllCart(newCart) {
    this.cart = [...newCart];
  }

  removeCart() {
    this.cart = [];
  }

  getCart() {
    return this.cart;
  }
  
}

export default User;