import styled from "styled-components";
import { device } from "../../styles/devices";

export const NavBar = styled.nav`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: ${({ theme }) =>
    theme === "light"
      ? "1px solid var(--color-grey--1)"
      : "1px solid var(--color-grey-3)"};

  img {
    width: 9rem;
  }

  .sun-lightmode {
    cursor: pointer;
    font-size: 20px;
    transition: 0.5s;
  }

  .sun-lightmode:hover {
    color: var(--color-primary-Focus);
  }

  .div-logout-theme {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export const ButtonLogout = styled.button`
  text-decoration: none;

  padding: 0.5rem 1rem;
  border-radius: 4px;

  font-size: 14px;
  cursor: pointer;
  transition: 0.5s;
  border-style: none;
  color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey-2)" : "var(--color-grey-0)"};
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey--1)" : "var(--color-grey-3)"};

  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "var(--color-grey--2)" : "var(--color-grey-2)"};
    color: var(--color-primary);
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1.8rem;
  border-bottom: ${(props) =>
    props.theme === "light"
      ? "1px solid var(--color-grey--1)"
      : "1px solid var(--color-grey-3)"};
  align-items: flex-start;

  .user-name {
    font-size: 16px;
    font-weight: 600;
  }

  .user-module {
    font-size: 12px;
    color: var(--color-grey-1);
  }

  @media ${device.mobileL} {
    align-items: center;
    padding: 1.8rem 7rem;
    flex-direction: row;
    justify-content: space-around;

    .user-name {
      font-size: 18px;
      font-weight: 600;
    }

    .user-module {
      font-size: 13px;
      color: var(--color-grey-1);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin-top: 1rem;
`;
