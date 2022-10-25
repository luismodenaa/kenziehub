import { ButtonLogout, Container, NavBar, StyledHeader } from "./style";
import logo from "../../assets/logo.png";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/Auth";
import { motion } from "framer-motion";
import { HeadTec } from "../../components/HeadTec";
import { ContainerTec } from "../../components/ContainerTec";
import { OpenModalCreateProvider } from "../../context/OpenModalCreate/OpenModalCreate";
import { CreateTecModal } from "../../components/CreateTec";
import { CreateProvider } from "../../context/Create/Create";
import { ShowTecProvider } from "../../context/ShowTec/ShowTec";
import { OpenModalDeleteProvider } from "../../context/OpenModalDelete";
import { DeleteTec } from "../../components/DeleteTec";
import { EditTec } from "../../components/EditTec";
import { OpenModalEditProvider } from "../../context/OpenModalEdit/OpenModalEdit";
import React from "react";

export const Dashboard = ({ themeToggler, theme }) => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { name, course_module } = user;

  const logout = () => {
    toast.info("Usuário desconectado");
    localStorage.removeItem("@hub:token");
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ShowTecProvider>
        <OpenModalDeleteProvider>
          <OpenModalCreateProvider>
            <OpenModalEditProvider>
              <>
                <NavBar theme={theme}>
                  <img src={logo} alt="" />
                  <div className="div-logout-theme">
                    <ButtonLogout onClick={logout} theme={theme}>
                      Sair
                    </ButtonLogout>
                    {theme === "light" ? (
                      <BsFillMoonFill
                        onClick={themeToggler}
                        className="sun-lightmode "
                      />
                    ) : (
                      <BsFillSunFill
                        onClick={themeToggler}
                        className="sun-lightmode "
                      />
                    )}
                  </div>
                </NavBar>
                <StyledHeader theme={theme}>
                  <h3 className="user-name">Olá, {name}</h3>
                  <p className="user-module">{course_module}</p>
                </StyledHeader>
              </>

              <Container>
                <HeadTec theme={theme} />
                <ShowTecProvider>
                  <ContainerTec theme={theme} />
                </ShowTecProvider>
              </Container>

              <CreateProvider>
                <CreateTecModal theme={theme} />
              </CreateProvider>
              <DeleteTec theme={theme} />
              <EditTec theme={theme} />
            </OpenModalEditProvider>
          </OpenModalCreateProvider>
        </OpenModalDeleteProvider>
      </ShowTecProvider>
    </motion.div>
  );
};
