import loading from "../../assets/loading.svg";
import { DivLoading, ImgLoader } from "./style";
import React from "react";

export const Loading = () => {
  return (
    <DivLoading>
      <ImgLoader src={loading} />
    </DivLoading>
  );
};
