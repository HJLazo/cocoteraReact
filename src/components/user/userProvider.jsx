import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const usePerson = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => {
      const userExists = prevUsers.find(person => person.email === user.email);
      if (userExists) {
        return prevUsers;
      } else {
        user.logIn();
        setCurrentUser(user);
        return [...prevUsers, user];
      }
    });
  };
  

  const signIn = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
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
    <UserContext.Provider value={{ users, addUser, signIn, logOut, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
