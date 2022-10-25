import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iTechsData } from "../OpenModalEdit/OpenModalEdit";
import { ShowTecContext } from "../ShowTec/ShowTec";
import React from "react";

interface iModalDelProps {
  children: ReactNode;
}

interface iDeleteProviderData {
  modalDeleteIsOpen: boolean;
  openModal: (selectedTech: iTechsData) => void;
  closeModal: () => void;
  deleteTech: () => void;
}

export const OpenModalDeleteContext = createContext<iDeleteProviderData>(
  {} as iDeleteProviderData
);

export const OpenModalDeleteProvider = ({ children }: iModalDelProps) => {
  const [modalDeleteIsOpen, setDeleteModalIsOpen] = useState(false);
  const [idDel, setIdDel] = useState("");
  const { loadTechsPrimary } = useContext(ShowTecContext);

  const openModal = (selectedTech: iTechsData) => {
    setDeleteModalIsOpen(true);

    setIdDel(selectedTech.id);
  };

  const closeModal = () => {
    setDeleteModalIsOpen(false);
  };

  const deleteTech = async () => {
    const loadingRequest = toast.loading("Carregando...");
    const response = await api.delete(`/users/techs/${idDel}`);
    loadTechsPrimary();
    closeModal();
    toast.update(loadingRequest, {
      render: "Tecnologia removida",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  };

  return (
    <OpenModalDeleteContext.Provider
      value={{ modalDeleteIsOpen, openModal, closeModal, deleteTech }}
    >
      {children}
    </OpenModalDeleteContext.Provider>
  );
};
