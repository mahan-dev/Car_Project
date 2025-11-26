import axios from "axios";

export interface FetcherResponse {
  model_make_id: string;
  model_name: string;
  image?: string;
  _id?: string;
  price: string;
  gearbox: string;
  category: string;
  year: string;
  cylinder: string;
  engine: string;
  description: string;
  imageUrl: string;
}
export interface Car {
  Models: FetcherResponse[];
}

export interface CarDetail {
  Trims: Array<{ [key: string]: string }>;
}

const Base_Url = "https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=";

export const dataFetcher = async () => {
  try {
    const [bmwData, audiData] = await Promise.all([
      axios.get<Car>(`${Base_Url}bmw`),
      axios.get<Car>(`${Base_Url}audi`),
    ]);

    const bmwRes = bmwData.data;
    const audiRes = audiData.data;
    const data = [...(bmwRes.Models || []), ...(audiRes.Models || [])];

    return {
      data: data,
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
    return data.Trims[0];
  } catch (error) {
    console.log(error);
  }
};
