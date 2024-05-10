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
    this.cart = cart;
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
}

export default User;