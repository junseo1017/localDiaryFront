import { AxiosResponse } from "axios";

export const getSpotByPosition = (axios:, data) => {
  return axios
    .get(`/map/find`, {
      params: {
        kilometer,
        mapX: lng,
        mapY: lat,
        scale,
      },
    })
    .then((res:AxiosResponse) => res.data.data);
};
