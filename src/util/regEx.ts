const RegExp = {
  emailType: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  pwType: /^([a-zA-Z0-9]{8,20})$/,
};

export const isEmailCorrect = (e: string | null): boolean => {
  if (!e) {
    return false;
  }

  if (!RegExp.emailType.test(e)) {
    return false;
  }

  return true;
};

export const isPwCorrect = (e: string | null): boolean => {
  if (!e) {
    return false;
  }

  return true;
};
