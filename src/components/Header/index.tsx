import logo from "../../assets/logo.png";
import { HeaderStyled, StyledLink } from "./style";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import React from "react";

export const Header = ({ themeToggler, btnBack, theme }) => {
  return (
    <HeaderStyled>
      <img src={logo} alt="KenzieHub" />
      <div className="div-darklight">
        {btnBack ? <StyledLink to={"/"}>Voltar</StyledLink> : null}
        {theme === "light" ? (
          <BsFillMoonFill onClick={themeToggler} className="sun-lightmode " />
        ) : (
          <BsFillSunFill onClick={themeToggler} className="sun-lightmode " />
        )}
      </div>
    </HeaderStyled>
  );
};
