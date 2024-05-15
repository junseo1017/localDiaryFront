import { AxiosResponse } from "axios";
import axios from "axios";

const getMainPage: () => Promise<string> = async () => {
  try {
    const res = await axios.get(`/user/main`);
    return res.data;
  } catch (error) {
    throw new Error("通信に失敗しました。");
  }
};

export default getMainPage;
