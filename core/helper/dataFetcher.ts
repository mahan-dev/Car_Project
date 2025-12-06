import { Car, CarDetail } from "@/helper/interface/dataFetcher/interface";

const Base_Url = "https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=";

const revalidate = 604800;

export const dataFetcher = async () => {
  try {
    const [bmwData, audiData]: Car[] = await Promise.all([
      fetch(`${Base_Url}bmw`, { next: { revalidate } }).then((res) =>
        res.json()
      ),
      fetch(`${Base_Url}audi`, { next: { revalidate } }).then((res) =>
        res.json()
      ),
    ]);

    const data = [...(bmwData.Models || []), ...(audiData.Models || [])];

    return {
      data: data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const carDetail = async (make: string, model: string) => {
  try {
    const res = await fetch(
      `https://www.carqueryapi.com/api/0.3/?&cmd=getTrims&make=${make}&model=${model}`,
      {
        cache: "no-store",
      }
    );
    const data: CarDetail = await res.json();
    return data.Trims[0];
  } catch (error) {
    console.log(error);
  }
};
