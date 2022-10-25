import styled from "styled-components";
import Modal from "react-modal";
import { CgClose } from "react-icons/cg";

export const ModalStyled = styled(Modal)`
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey-0)" : "var(--color-grey-3)"};
  padding: 1rem;
  border-radius: 4px;
  width: 17rem;
  outline: none;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 1rem;

    h3 {
      font-weight: 500;
      font-size: 17px;
    }
  }
`;

export const IconClose = styled(CgClose)`
  font-size: 17px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: var(--color-negative);
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputName = styled.input`
  padding: 0.5rem;
  outline: none;
  border-radius: 4px;
  border-style: none;
  border: 1px solid var(--color-grey-1);
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey-0)" : "var(--color-grey-2)"};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};

  &:hover,
  &:focus,
  &:valid {
    border: 1px solid var(--color-primary);
  }
`;

export const SelectStatus = styled.select`
  padding: 0.5rem;
  outline: none;
  border-radius: 4px;
  border-style: none;
  border: 1px solid var(--color-grey-1);
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey-0)" : "var(--color-grey-2)"};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  &:hover,
  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

export const ButtonSubmit = styled.button`
  border-style: none;
  background-color: var(--color-primary);
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 4px;
  color: var(--color-grey-0);
  transition: 0.4s;
  font-size: 15px;
  font-weight: 500;
  &:hover {
    background-color: var(--color-primary-Negative);
  }
`;
