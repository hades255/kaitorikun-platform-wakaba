const Validate = (value) => {
    const errors = {};
    if (!value.staff_id) {
      errors.staff_id = "スタッフIDは必須です";
    }
    if (!value.email) {
      errors.email = "メールアドレスは必須です";
    }
    if (!value.password) {
      errors.password = "パスワードは必須です";
    }
    if (!value.shop_name) {
      errors.shop_name = "店舗名は必須です";
    }
    if (!value.name) {
      errors.name = "お名前は必須です";
    }
    if (!value.name_kana) {
      errors.name_kana = "カタカナ名は必須です";
    }
    return errors;
  };
  
  export default Validate;
  