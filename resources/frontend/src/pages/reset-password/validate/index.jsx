const Validate = (value) => {
    const errors = {};
    if (!value.newPassword) {
      errors.newPassword = "新しいパスワードは必須です";
    }
    if (!value.confirmPassword) {
      errors.confirmPassword = "確認パスワードは必須です";
    }
    return errors;
  };
  
  export default Validate;
  