export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  export const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };
  