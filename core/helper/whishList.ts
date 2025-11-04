import { FetcherResponse } from "@/helper/dataFetcher";
import { Dispatch, SetStateAction } from "react";

interface WhishListProps {
  whishList: FetcherResponse[];
  setWhishList: Dispatch<SetStateAction<FetcherResponse[]>>;
}
export const whishListHandler = (
  cardData: FetcherResponse,
  { whishList, setWhishList }: WhishListProps
) => {
  const { model_make_id, model_name } = cardData;

  const exists = whishList.some(
    (item) =>
      item.model_make_id === model_make_id && item.model_name === model_name
  );

  let updateWhish = [];
  if (exists) {
    updateWhish = whishList.filter(
      (item) =>
        item.model_make_id !== model_make_id || item.model_name !== model_name
    );
  } else {
    updateWhish = [...whishList, cardData];
  }
  setWhishList(updateWhish);
  localStorage.setItem("whishList", JSON.stringify(updateWhish));
};
