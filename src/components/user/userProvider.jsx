import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const usePerson = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

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
    console.log(currentUser);
    currentUser.logOut();
    setCurrentUser(null);
  }

  const attachCartToUser = (cart) => {
    if (currentUser) {
      currentUser.addCart(cart)
      setCurrentUser({ ...currentUser });
    }
  }


  return (
    <UserContext.Provider value={{ users, addUser, signIn, logOut, currentUser, attachCartToUser }}>
      {children}
    </UserContext.Provider>
  );
};
