import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ShowTecContext } from "../ShowTec/ShowTec";
import React from "react";

interface iEditTechProps {
  children: ReactNode;
}

export interface iTechsData {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface iEditTech {
  status: string;
}

interface iEditProviderData {
  modalEditIsOpen: boolean;
  openModalEdit: (selectedTech: iTechsData) => void;
  closeModal: () => void;
  editTech: (data: iEditTech) => void;
  idEdit: string;
}

export const OpenModalEditContext = createContext<iEditProviderData>(
  {} as iEditProviderData
);

export const OpenModalEditProvider = ({ children }: iEditTechProps) => {
  const [modalEditIsOpen, setEditIsOpen] = useState(false);
  const [idEdit, setidEdit] = useState("");
  const { loadTechsPrimary } = useContext(ShowTecContext);

  const openModalEdit = (selectedTech: iTechsData) => {
    setEditIsOpen(true);
    setidEdit(selectedTech.id);
  };

  const closeModal = () => {
    setEditIsOpen(false);
  };

  const editTech = async (data: iEditTech) => {
    const loadingRequest = toast.loading("Carregando...");

    const response = await api.put(`/users/techs/${idEdit}`, data);
    loadTechsPrimary();
    closeModal();
    toast.update(loadingRequest, {
      render: "Tecnologia editada",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  };

  return (
    <OpenModalEditContext.Provider
      value={{ modalEditIsOpen, openModalEdit, closeModal, editTech, idEdit }}
    >
      {children}
    </OpenModalEditContext.Provider>
  );
};
