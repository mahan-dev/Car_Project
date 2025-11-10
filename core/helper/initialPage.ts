import React, { SetStateAction } from "react";

type SetPage = React.Dispatch<SetStateAction<number>>;
export const initialPage = (page: number, setPage: SetPage) => {
  console.log(page)
  const url = new URL(window.location.href);
  const getParams = url.searchParams.get("page");
  if (!getParams) {
    url.searchParams.set("page", page.toString());
    window.history.pushState({}, "", url.toString());
  }
  setPage(+getParams);
};
