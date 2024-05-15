import axios from "axios";

const getUserInfo: () => Promise<string> = async () => {
  try {
    const res = await axios.get(`/user/main`);
    return res.data;
  } catch (error) {
    throw new Error("通信に失敗しました。");
  }
};

export default getUserInfo;
