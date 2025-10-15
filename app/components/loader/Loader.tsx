import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#0B42F4"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: "auto" }}
    />
  );
};

export default Loader;
