import { useContext } from "react";
import { OpenModalDeleteContext } from "../../context/OpenModalDelete";
import { IconClose, ModalStyled } from "./style";
import React from "react";

export const DeleteTec = ({ theme }) => {
  const { closeModal, modalDeleteIsOpen, deleteTech } = useContext(
    OpenModalDeleteContext
  );

  const customStyles = {
    overlay: {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(17, 17, 17, 0.7)",
    },
  };

  return (
    <ModalStyled
      isOpen={modalDeleteIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      theme={theme}
      closeTimeoutMS={300}
    >
      <div>
        <h3>Deletar Tecnologia</h3>
        <IconClose onClick={closeModal} />
      </div>
      <h4>Deseja mesmo deletar está tecnologia?</h4>
      <button onClick={deleteTech}>Deletar</button>
    </ModalStyled>
  );
};
