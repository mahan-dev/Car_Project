import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#000000"
      radius="9"
      wrapperStyle={{ margin: "auto"}}
    />
  );
};

export default Loader;
