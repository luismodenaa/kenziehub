import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px -20px 40px var(--color-primary-Focus);

  img {
    width: 10rem;
  }

  .sun-lightmode {
    cursor: pointer;
    font-size: 20px;
    transition: 0.5s;
  }

  .sun-lightmode:hover {
    color: var(--color-primary-Focus);
  }

  .div-darklight {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: var(--color-grey-3);
  padding: 0.6rem;
  border-radius: 4px;
  color: var(--color-grey-0);
  font-size: 14px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: var(--color-grey-1);
  }
`;
