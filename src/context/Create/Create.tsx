import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { OpenModalCreateContext } from "../OpenModalCreate/OpenModalCreate";
import { ShowTecContext } from "../ShowTec/ShowTec";
import React from "react";

interface iCreateProps {
  children: ReactNode;
}

interface iTechData {
  title: string;
  status: string;
}

interface iCreateProviderData {
  createTec: (data: iTechData) => void;
}

export const CreateContext = createContext<iCreateProviderData>(
  {} as iCreateProviderData
);

export const CreateProvider = ({ children }: iCreateProps) => {
  const { closeModal } = useContext(OpenModalCreateContext);
  const { loadTechsPrimary } = useContext(ShowTecContext);

  const createTec = async (data: iTechData) => {
    const loadingRequest = toast.loading("Carregando...");

    closeModal();
    try {
      const response = await api.post("/users/techs", data);
      toast.update(loadingRequest, {
        render: "Tecnologia criada",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      toast.update(loadingRequest, {
        render: "Opss... Ocorreu um problema, tente novamente",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      const errMessage = error.response.data.message;
      if (
        errMessage ===
        "User Already have this technology created you can only update it"
      ) {
        toast.update(loadingRequest, {
          render: "Você já possui uma tecnologia com este nome",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    }
    loadTechsPrimary();
  };

  return (
    <CreateContext.Provider value={{ createTec }}>
      {children}
    </CreateContext.Provider>
  );
};
