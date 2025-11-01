export interface FormValues {
  email: string;
  password: string;
  rePassword?: string;
}

export interface AddForm {
  year: string;
  gearbox: string;
  engine: string;
  cylinder: string;
  description: string;
  imageUrl: string | null;
  category: string;
  addDate: Date;
}
