import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const usePerson = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers(setUsers => {
      const userExists = setUsers.find(item => item.email === user.email);
      if (userExists) {
        return userExists;
      }
      return [...setUsers, user];
    });
  };

  const signIn = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      return user;
    }
    return null;
  }


  return (
    <UserContext.Provider value={{ users, addUser, signIn }}>
      {children}
    </UserContext.Provider>
  );
};
