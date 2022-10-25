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

  h4 {
    font-size: 19px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    border-style: none;
    background-color: var(--color-negative);
    cursor: pointer;
    padding: 0.8rem 7rem;
    border-radius: 4px;
    color: var(--color-grey-0);
    transition: 0.4s;
    font-size: 15px;
    font-weight: 500;
    &:hover {
      background-color: var(--color-primary-Negative);
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
