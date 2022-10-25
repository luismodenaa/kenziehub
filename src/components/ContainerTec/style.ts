import styled from "styled-components";
import { BsTrash, BsPencil } from "react-icons/bs";

export const Container = styled.div`
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey--1)" : "var(--color-grey-3)"};
  width: 75%;
  margin-top: 2rem;
  padding: 2rem 1rem;
  border-radius: 4px;

  .notfound {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: var(--color-grey-1);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    max-height: 30rem;
  }
`;

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey--2)" : "var(--color-grey-4)"};
  padding: 1rem;
  border-radius: 4px;
  transition: 0.4s;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "var(--color-grey-1)" : "var(--color-grey-2)"};
  }

  h3 {
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      font-size: 13px;
      color: ${({ theme }) =>
        theme === "light" ? "var(--color-grey-4)" : "var(--color-grey-1)"};
    }
  }
`;

export const EditIcon = styled(BsPencil)`
  color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey-4)" : "var(--color-grey-1)"};
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: var(--color-primary);
  }
`;

export const DelIcon = styled(BsTrash)`
  color: ${({ theme }) =>
    theme === "light" ? "var(--color-grey-4)" : "var(--color-grey-1)"};
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: var(--color-primary);
  }
`;
