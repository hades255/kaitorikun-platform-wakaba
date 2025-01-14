const Validate = (value) => {
    const errors = {};
    if (!value.email) {
      errors.email = "メールアドレスは必須です";
    }
    return errors;
  };
  
  export default Validate;
  