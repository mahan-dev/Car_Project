import { FetcherResponse } from "@/helper/dataFetcher";
import { Dispatch, SetStateAction } from "react";

interface WhishListProps {
  whishList: FetcherResponse[];
  setWhishList: Dispatch<SetStateAction<FetcherResponse[]>>;
  click?: boolean;
  setClick?: Dispatch<SetStateAction<boolean>>;
}
export const whishListHandler = (
  cardData: FetcherResponse,
  { whishList, setWhishList, click }: WhishListProps
) => {
  console.log(click)
  if (!click) return;
  const whishListDb: FetcherResponse[] =
    JSON.parse(localStorage.getItem("whishList")) || [];

  const { model_make_id, model_name } = cardData;

  const exists = whishList.some(
    (item) =>
      item.model_make_id === model_make_id && item.model_name === model_name
  );

  let updateWhish = [];
  if (exists) {
    updateWhish = whishListDb.filter(
      (item) =>
        item.model_make_id !== model_make_id || item.model_name !== model_name
    );
  } else {
    updateWhish = [...whishListDb, cardData];
  }
  setWhishList(updateWhish);
  localStorage.setItem("whishList", JSON.stringify(updateWhish));
};
