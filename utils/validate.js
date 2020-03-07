export const validateEmail = (email = "") => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validatePassword = (password = "") => {
  return password.length > 5;
};

export const validateRoll = roll => {
  return roll.toString().length === 11;
};

export const validatePhone = phone => {
  return phone.toString().length === 10;
};

export const validateBranch = branch => {
  return branch && branch !== "0";
};

export const validateYear = year => {
  return year && year !== "0";
};
