import { createContext, ReactNode, useEffect, useState } from "react";
import React from "react";
import { api } from "../../services/api";

interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface iShowTecProps {
  children: ReactNode;
}

interface iShowTecProviderData {
  tech: iTechs[];
  setTech: any;
  loadTechsPrimary: () => void;
}

export const ShowTecContext = createContext<iShowTecProviderData>(
  {} as iShowTecProviderData
);

export const ShowTecProvider = ({ children }: iShowTecProps) => {
  const [tech, setTech] = useState<iTechs[]>([]);

  const loadTechsPrimary = async () => {
    const token = localStorage.getItem("@hub:token");
    if (token) {
      try {
        const { data } = await api.get("/profile");
        setTech(data.techs);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    loadTechsPrimary();
  }, [tech]);

  return (
    <ShowTecContext.Provider value={{ tech, setTech, loadTechsPrimary }}>
      {children}
    </ShowTecContext.Provider>
  );
};
