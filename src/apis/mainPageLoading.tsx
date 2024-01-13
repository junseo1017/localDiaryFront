import { AxiosResponse } from "axios";
import axios from "axios";

const getMainPage: () => Promise<string> = async () => {
  const res = await axios.get(`/main`);
  return res.data;
};

export default getMainPage;
