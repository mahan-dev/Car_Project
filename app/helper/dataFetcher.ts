import axios from "axios";

interface FetcherResponse {
  id: number;
  make_id: number;
  make: string;
  name: string;
}
export interface Car {
  data: FetcherResponse[];
}

const model = ["Audi", "BMW"];

export const dataFetcher = async (page: number = 1) => {

    try {
      const { data } = await axios.get<Car>(
        `https://carapi.app/api/models/v2?page=${page}`
      );
      const res = await axios.get<Car>("https://carapi.app/api/models/v2");
      console.log("🚉 ~ dataFetcher.ts:18 -> res: ", res);

      return data.data.filter((item) => model.includes(item.make));
      // console.log(res);

      // return data.data;
    } catch (error) {
      console.log(error);
    }
};
