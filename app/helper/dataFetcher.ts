import axios from "axios";

export interface FetcherResponse {
  model_make_id: string;
  model_name: string;
}
export interface Car {
  Models: FetcherResponse[];
}

export const dataFetcher = async (page: number = 1) => {
  try {
    const { data } = await axios.get<Car>(
      "https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=bmw"
    );
    // const res = await axios.get<Car>("https://carapi.app/api/models/v2");

    // return data.data.filter((item) => model.includes(item.make));
    // console.log(res);
    console.log(data);
    return data.Models;
  } catch (error) {
    // console.log(error);
  }
};
