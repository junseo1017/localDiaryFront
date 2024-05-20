import { selector } from "recoil";
import getUserInfo from "../apis/user";

export default selector<string>({
  key: "userSignIn",
  get: async () => {
    try {
      //      const response = await getUserInfo();
      return "";
    } catch (e) {
      throw e;
    }
  },
});
