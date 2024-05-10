import React, { createContext, useContext, useState } from 'react';

const InfoContext = createContext();

export const useInformation = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(currentItems => {
      const itemExists = currentItems.find(item => item.id === product.id);
      if (itemExists) {
        return currentItems.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  const addProductQuantity = (productId) => {
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeProductQuantity = (productId) => {
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  const totalProducts = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  const setNewCart = (newCart) => {
    setCartItems(newCart);
  }

  const addUser = (user, cartItems) => {
    setUsers((prevUsers) => {
      const userExists = prevUsers.find(person => person.email === user.email);
      if (userExists) {
        return prevUsers;
      } else {
        user.logIn();
        user.addCart(cartItems);
        setCurrentUser(user);
        return [...prevUsers, user];
      }
    });
  };

  const signIn = (email, password, cartItems) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      user.addCart(cartItems);
      setCurrentUser(user);
      return user;
    }
    return null;
  }

  const logOut = () => {
    currentUser.logOut();
    setCurrentUser(null);
  }

  return (
    <InfoContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      addProductQuantity, 
      removeProductQuantity,
      totalProducts, 
      setNewCart,
      addUser,
      signIn,
      currentUser,
      logOut }}>
      {children}
    </InfoContext.Provider>
  );
};
