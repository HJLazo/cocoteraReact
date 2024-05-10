const validateFormData = (formData, isSignUp) => {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!formData.email) {
    errors.email = "Email es requerido";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Email es invalido";
  }

  if (!formData.password) {
    errors.password = "Contraseña es requerida";
  } else if (formData.password.length < 6) {
    errors.password = "Contraseña deber ser la menos de 6 caracteres";
  }

  if (isSignUp) {
    if (!formData.name) {
      errors.name = "Nombre es requerido";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Por favor confirmar el contraseña";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
  }

  return errors;
};

export default validateFormData;
