"use client";

import styles from "@/elements/styles/searchResult/route.module.css";
import { FetcherResponse } from "@/helper/interface/dataFetcher/interface";
import { useRouter } from "next/navigation";

interface SearchProps {
  data: FetcherResponse[];
}
const SearchResult = ({ data }: SearchProps) => {
  const slicedData = data.slice(0, 3);

  const router = useRouter();
  type ClickHandler = (model_make_id: string, model_name: string) => void;
  const clickHandler: ClickHandler = (model_make_id, model_name) => {
    router.push(`/show-room/detail/${model_make_id}/${model_name}`);
  };

  return (
    <ul className={styles.search__list}>
      {slicedData.map((item, index) => (
        <li
          onClick={() => clickHandler(item.model_make_id, item.model_name)}
          key={index}
        >
          {item.model_make_id} {item.model_name}
        </li>
      ))}
    </ul>
  );
};

export default SearchResult;
