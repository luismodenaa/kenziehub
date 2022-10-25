import { useContext } from "react";
import { OpenModalCreateContext } from "../../context/OpenModalCreate/OpenModalCreate";
import { ButtonNewTec, ContainerHeadTec, IconNewTec } from "./style";
import React from "react";

export const HeadTec = ({ theme }) => {
  const { openModal } = useContext(OpenModalCreateContext);

  return (
    <ContainerHeadTec>
      <h3>Tecnologias</h3>
      <ButtonNewTec theme={theme} onClick={openModal}>
        <IconNewTec />
      </ButtonNewTec>
    </ContainerHeadTec>
  );
};
