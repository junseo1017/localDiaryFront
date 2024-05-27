import axios, { AxiosError } from "axios";
import { LoginFormType, LoginFormError } from "../model";

const signin: (user: LoginFormType) => Promise<string> = async (user) => {
  try {
    const res = await axios.post(`/user/signin`, user);
    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new AxiosError(e.response?.data);
    }
  }
};

export default signin;
