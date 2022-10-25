import { Header } from "../../components/Header";
import { Container, ContainerTest, StyledLink } from "./style";
import imglandingpage from "../../assets/imglandingpage.svg";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import React from "react";

export const LandingPage = ({ themeToggler, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header themeToggler={themeToggler} theme={theme} btnBack={undefined} />
      <ContainerTest>
        <Container>
          <div>
            <img
              src={imglandingpage}
              className="img-landing"
              alt="apresentação kenzie hub"
            />
          </div>
          <div className="container-kenziehub">
            <img src={logo} className="logo-landing" alt="kenzie hub" />
            <h3>
              Feito para ele, você, nós, dev's. Controle seu portfólio de
              programação.
            </h3>
            <div className="btn-redirect">
              <StyledLink to={"login"}>Logar</StyledLink>
              <StyledLink to={"/cadastro"}>Cadastrar</StyledLink>
            </div>
          </div>
        </Container>
      </ContainerTest>
    </motion.div>
  );
};
