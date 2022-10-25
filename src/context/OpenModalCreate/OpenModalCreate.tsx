import { createContext, ReactNode, useState } from "react";
import React from "react";

interface iModalCreateProps {
  children: ReactNode;
}

interface iModalCreateProviderData {
  modalCreateIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const OpenModalCreateContext = createContext<iModalCreateProviderData>(
  {} as iModalCreateProviderData
);

export const OpenModalCreateProvider = ({ children }: iModalCreateProps) => {
  const [modalCreateIsOpen, setCreateModalIsOpen] = useState(false);

  const openModal = () => {
    setCreateModalIsOpen(true);
  };

  const closeModal = () => {
    setCreateModalIsOpen(false);
  };

  return (
    <OpenModalCreateContext.Provider
      value={{ modalCreateIsOpen, openModal, closeModal }}
    >
      {children}
    </OpenModalCreateContext.Provider>
  );
};
