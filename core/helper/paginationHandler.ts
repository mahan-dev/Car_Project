import React, { SetStateAction } from "react";

type SetPage = React.Dispatch<SetStateAction<number>>;
export const paginationHandler = (
  setPage: SetPage,
  value: number
) => {
  setPage(value);
  const url = new URL(window.location.href);
  url.searchParams.set("page", value.toString());
  window.history.pushState({}, "", url.toString());
};
