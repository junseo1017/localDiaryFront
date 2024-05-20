import axios from "axios";
import { LoginFormType } from "../model";

const getUserInfo: (user: LoginFormType) => Promise<string> = async (user) => {
  try {
    const res = await axios.post(`/user/signin`, user);
    console.log(user.email);
    return res.data;
  } catch (error) {
    throw new Error("通信に失敗しました。");
  }
};

export default getUserInfo;
