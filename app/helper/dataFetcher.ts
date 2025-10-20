import axios from "axios";

export interface FetcherResponse {
  model_make_id: string;
  model_name: string;
}
export interface Car {
  Models: FetcherResponse[];
}

export interface CarDetail {
  Trims: Array<{ [key: string]: string }>;
}

export const dataFetcher = async () => {
  try {
    const { data: bmwData } = await axios.get<Car>(
      "https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=bmw"
    );
    const { data: audiData } = await axios.get<Car>(
      "https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=audi"
    );

    const data = bmwData.Models.concat(audiData.Models);
    return {
      data: data || [],
    };
  } catch (error) {
    console.log(error);
  }
};

export const carDetail = async (make: string, model: string) => {
  try {
    const { data } = await axios.get<CarDetail>(
      `https://www.carqueryapi.com/api/0.3/?&cmd=getTrims&make=${make}&model=${model}`
    );
    console.log(data.Trims[0]);
    return data.Trims[0];
  } catch (error) {
    console.log(error);
  }
};
