import { Dayjs } from "dayjs";

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
  addDate: Dayjs;
}
export interface Car {
  Models: FetcherResponse[];
}

export interface CarDetail {
  Trims: Array<{ [key: string]: string }>;
}
