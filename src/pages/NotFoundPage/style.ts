import styled from "styled-components";
import { TbError404 } from "react-icons/tb";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div {
    text-align: center;
  }

  h1 {
    font-size: 5em;
    font-weight: 600;
  }

  h4 {
    font-size: 1.3em;
    color: var(--color-negative);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 2em;
    font-weight: 500;
  }
`;

export const IconError = styled(TbError404)`
  font-size: 18em;
  color: var(--color-negative);
  margin-top: -3rem;
  margin-bottom: -4rem;
`;
