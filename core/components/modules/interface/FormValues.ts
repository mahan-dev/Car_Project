export interface FormValues {
  email: string;
  password: string;
  rePassword?: string;
}

export interface AddForm {
  year: string;
  gearbox: string;
  engine: string;
  cylinder: number;
  description: string;
  addDate: Date;
}
