import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import React from "react";

interface iRegisterProps {
  children: ReactNode;
}

export interface iUserData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface iRegisterProviderData {
  registerUser: (data: iUserData) => void;
}

export const RegisterContext = createContext<iRegisterProviderData>(
  {} as iRegisterProviderData
);

export const RegisterProvider = ({ children }: iRegisterProps) => {
  const navigate = useNavigate();

  async function registerUser(data: iUserData) {
    const loadingRequest = toast.loading("Carregando...");

    try {
      const response = await api.post("/users", data);
      toast.update(loadingRequest, {
        render: "Cadastro realizado com sucesso",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      navigate("/login");
    } catch (error) {
      toast.update(loadingRequest, {
        render: "Opss... Ocorreu um problema, tente novamente",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      const errMessage = error.response.data.message;
      if (errMessage === "Email already exists") {
        toast.update(loadingRequest, {
          render: "Email já registrado",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    }
  }

  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};
