import React, { useState } from "react";
import { useInformation } from '../parent_information/infoProvider';
import User from "../../utils/user";
import validateFormData from "../../utils/validationFormData";

const AuthForm = () => {
  const { cartItems, addUser, signIn } = useInformation();
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData, isSignUp);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (isSignUp) {
      const newUser = new User(formData.name, formData.email, formData.password, formData.confirmPassword);
      addUser(newUser, cartItems);
    } else {
      signIn(formData.email, formData.password, cartItems)
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const toggleMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="auth-form-container">
      <h2>{isSignUp ? "Registrate" : "Logeate"}</h2>
      <form 
      className="p-2"
      onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
           {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {isSignUp && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
             {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-2">
          {isSignUp ? "Registrate" : "Logeate"}
        </button>
      </form>
      <button onClick={toggleMode} className="btn btn-link">
        {isSignUp ? "Tienes una cuenta? Logeate" : "No tienes cuenta? Registrate"}
      </button>
    </div>
  );
};

export default AuthForm;
