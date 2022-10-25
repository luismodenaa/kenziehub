import { createContext, ReactNode, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import React from "react";

interface iAuthProps {
  children: ReactNode;
}

interface iUserData {
  email: string;
  password: string;
}

interface iAuthProviderData {
  loginUser: (data: iUserData) => void;
  user: any;
  loadingUser: boolean;
}

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: iAuthProps) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@hub:token");

      if (token) {
        const loadingRequest = toast.loading("Carregando...");
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUser(data);
          toast.update(loadingRequest, {
            render: "Login realizado com sucesso",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });

          navigate("/dashboard", { replace: true });
        } catch (error) {
          console.error(error);
          toast.update(loadingRequest, {
            render: "Opss... Ocorreu um erro, entre novamente",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      }

      setLoadingUser(false);
    };

    loadUser();
  }, []);

  async function loginUser(data: iUserData) {
    const loadingRequest = toast.loading("Carregando...");

    try {
      const response = await api.post("/sessions", data);

      toast.update(loadingRequest, {
        render: "Login realizado com sucesso",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);
      localStorage.setItem("@hub:token", token);

      const toNavigate = location.state?.from?.pathname || "dashboard";

      navigate(toNavigate, { replace: true });
    } catch (error) {
      console.error(error);

      toast.update(loadingRequest, {
        render: "Opss... Ocorreu um problema, tente novamente",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      const errMessage = error.response.data.message;
      if (errMessage === "Incorrect email / password combination") {
        toast.update(loadingRequest, {
          render: "Email ou senha incorretos",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    }
  }

  return (
    <AuthContext.Provider value={{ loginUser, user, loadingUser }}>
      {children}
    </AuthContext.Provider>
  );
};
