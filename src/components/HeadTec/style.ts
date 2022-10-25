import styled from "styled-components";
import { RiAddFill } from "react-icons/ri";

export const ContainerHeadTec = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  width: 78%;

  h3 {
    font-weight: 500;
  }
`;

export const ButtonNewTec = styled.button`
  border-style: none;
  color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey-2)" : "var(--color-grey-0)"};
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey--1)" : "var(--color-grey-3)"};
  font-size: 18px;
  padding: 6px;
  text-align: center;
  border-radius: 4px;

  cursor: pointer;
  border-style: none;

  display: flex;
  align-items: center;

  transition: 0.4s;

  &:hover {
    color: var(--color-primary);
    background-color: ${({ theme }) =>
      theme === "light" ? "var(--color-grey--2)" : "var(--color-grey-2)"};
  }
`;

export const IconNewTec = styled(RiAddFill)`
  font-weight: 700;
`;
