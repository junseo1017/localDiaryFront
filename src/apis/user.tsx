import axios, { AxiosError } from "axios";
import { LoginFormType } from "../model";

const getUserInfo: (user: LoginFormType) => Promise<string> = async (user) => {
  try {
    const res = await axios.post(`/user/signin`, user);
    console.log(res.data);
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(e.response?.data);
      // throw new Error(e);
    }

    // if (typeof e === "string") {
    //   return e.toUpperCase(); // works, `e` narrowed to string
    // } else if (e instanceof Error) {
    //   return e.message; // works, `e` narrowed to Error
    // }
    //throw new Error(e);
  }
};

export default getUserInfo;
