const validateName = (name: string) => {
  return name?.toString().length > 2;
};

const validateEmail = (email: string) => {
  return email
    ?.toString()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{2,}@[a-zA-Z0-9-]{2,}([.][a-zA-Z0-9-]{2,})*$/
    );
};

const validatePassword = (password: string) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length > 3;

  return hasUppercase && hasLowercase && hasNumber && hasLength;
};

const validatePasswordConfirmation = (
  password: string,
  passwordConfirmation: string
) => {
  return validatePassword(password) && password === passwordConfirmation;
};

const validateUsername = (username: string) => {
  const hasOnlyAllowedChars = /^[a-z0-9.]+$/.test(username);
  const hasLength = username?.toString().length > 3;
  return hasLength && hasOnlyAllowedChars;
}

export {
  validateName,
  validateUsername,
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
};
