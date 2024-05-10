class User {
  static currentId = 0;

  constructor(name, email, password, passwordConfirm) {
      this.id = ++User.currentId;
      this.name = name;
      this.email = email;
      this.password = password;
      this.passwordConfirm = passwordConfirm;
      this.cart = null;
      this.signIn = false;
  }

  addCart(cart) {
    if (this.cart === null) {
      this.cart = cart;
    } else {
      cart.forEach(element => {
        element.quantity += this.cart.array.find(item => item.id === element.id).quantity;  
      });
    }
  }

  removeCart() {
    this.cart = null;
  }

  getCart() {
    return this.cart;
  }
  
  logOut() {
    this.signIn = false;
  }

  logIn() {
    this.signIn = true;
  }
}

export default User;