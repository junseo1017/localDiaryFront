const RegExp = {
  emailType: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  pwType: /^([a-zA-Z0-9]{8,20})$/,
};

export const isEmailError = (e: string | null): boolean => {
  if (!e) {
    return true;
  }

  console.log(!RegExp.emailType.test(e));

  if (!RegExp.emailType.test(e)) {
    return true;
  }

  return false;
};

export const isPwError = (e: string | null): boolean => {
  if (!e) {
    return true;
  }

  return false;
};
