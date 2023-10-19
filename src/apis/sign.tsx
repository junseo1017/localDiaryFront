import { AxiosResponse } from "axios";
import axios from "axios";

type LoginData = {
  id: string;
  password: string;
};

export const getLoginRequest = (data: LoginData) => {
  return axios
    .get(`/login/acountAccess`, {
      params: {
        id: data.id,
        pw: data.password,
      },
    })
    .then((res: AxiosResponse) => res.data.data);
};
