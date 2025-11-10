import { Dayjs } from "dayjs";

export interface FormValues {
  email: string;
  password: string;
  rePassword?: string;
}

export interface AddForm {
  model_name: string;
  model_make_id: string;
  year: string;
  gearbox: string;
  engine: string;
  cylinder: string;
  description: string;
  imageUrl: string | null;
  category: string
  addDate: Dayjs;
}
