import { device } from "./../../styles/devices";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerTest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;

  .img-landing {
    width: 100%;
  }

  .logo-landing {
    width: 15rem;
    margin-bottom: 1rem;
  }

  .container-kenziehub {
    text-align: center;
    margin-bottom: 5rem;

    & {
      font-size: 18px;
    }
  }

  .btn-redirect {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  @media ${device.laptop} {
    flex-direction: row;

    .logo-landing {
      width: 16rem;
    }

    .container-kenziehub {
      & {
        font-size: 20px;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-grey-0);
  background-color: var(--color-primary-Focus);
  padding: 0.9rem;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  font-weight: 500;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-Negative);
  }
`;
