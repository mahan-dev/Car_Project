import { FetcherResponse } from "@/helper/interface/dataFetcher/interface";
import dayjs from "dayjs";
const inputProps = [
  {
    name: "year",
    title: "Car year",
  },
  {
    name: "model_name",
    title: "Model",
  },
  {
    name: "model_make_id",
    title: "Make",
  },
  {
    name: "price",
    title: "Price",
  },

  {
    name: "gearbox",
    title: "Gear box",
  },
  {
    name: "engine",
    title: "Engine volume",
  },
  {
    name: "cylinder",
    title: "Motor cylinder",
  },
  {
    name: "description",
    title: "Description",
  },
];

const categoryName = [
  "suv",
  "sedan",
  "coupe",
  "hatchback",
  "convertible",
  "sport",
];

const defaultHandler = (profile?: FetcherResponse) => ({
  model_make_id: profile?.model_make_id ?? "",
  model_name: profile?.model_name ?? "",
  year: profile?.model_name ?? "",
  cylinder: profile?.cylinder ?? "",
  price: profile?.price ?? "",
  gearbox: profile?.gearbox ?? "",
  category: profile?.category ?? "",
  engine: profile?.engine ?? "",
  description: profile?.description ?? "",
  imageUrl: profile?.image ?? "",
  _id: profile?._id ?? "",
  addDate: dayjs(),
});

export { inputProps, categoryName, defaultHandler };
