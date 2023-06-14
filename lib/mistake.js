class Definer {
  /* general errors */
  static gereral_err1 = "att: something went wrong!";
  static gereral_err2 = "att: there is no data with that params!";
  static gereral_err3 = "att: file upload error!";
  /* member auth related errors */
  static auth_err1 = "att: mongodb validation failed!";
  static auth_err3 = "att: no member with that mb_nick!";
  static auth_err4 = "att: your credentials do not match!";
  /* productes related errors */
  static product_err1 = "att: product creation failed!";
}

module.exports = Definer;
