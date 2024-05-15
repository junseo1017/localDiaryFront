const RegExp = {
  emailType: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  pwType: /^([a-zA-Z0-9]{8,20})$/,
};

export const CheckEmail = (e: string | null): string | null => {
  if (e == null) {
    return "メールアドレスを入力してください";
  }

  if (!RegExp.emailType.test(e)) {
    return "メールアドレス形式ではありません";
  }

  return null;
};

export const CheckPw = (e: string | null): string | null => {
  if (e == null) {
    return "パスワードを入力してください";
  }

  return null;
};
