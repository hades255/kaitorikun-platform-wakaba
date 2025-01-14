const Validate = (value) => {
    const errors = {};
    if (!value.email) {
      errors.email = "メールアドレスまたはログインIDは必須です";
    }
    if (!value.password) {
      errors.password = "パスワードは必須です";
    }
    return errors;
  };
  
  export default Validate;
  