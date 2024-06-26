import { selector } from "recoil";
import { getMainPage } from "../apis";

export default selector<string>({
  key: "mainPageState",
  get: async () => {
    try {
      const response = await getMainPage();
      return response;
    } catch (e) {
      throw e;
    }
  },
});
