import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const FormStyled = styled.form`
  width: 80%;
  padding: 1rem;
  border-radius: 4px;

  h3 {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 2rem;
  }

  .not-register {
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color: var(--color-grey-1);
    margin-bottom: 2rem;
  }

  .error-message {
    color: var(--color-negative);
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }

  @media ${device.mobileL} {
    max-width: 21rem;
  }
`;

export const InputBox = styled.div`
  position: relative;

  span {
    position: absolute;
    left: 0;
    top: 0;
    padding: 16px;
    pointer-events: none;
    font-size: 1em;
    transition: 0.5s;
    color: black;
  }

  input:valid ~ span,
  input:focus ~ span {
    color: blueviolet;
    transform: translateX(10px) translateY(-6px);
    font-size: 0.7rem;
    padding: 2px 10px;
    background-color: var(--color-primary-Focus);
    letter-spacing: 2px;
    border-radius: 4px;
    color: white;
  }

  input:valid,
  input:focus {
    border: 1px solid var(--color-primary-Focus);
  }

  .eye-password {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    padding: 15px 26px;
    cursor: pointer;
    transition: 0.2s;
    color: var(--color-primary-Negative);
    &:hover {
      color: var(--color-primary-Focus);
    }
  }
`;

export const InputStyled = styled.input`
  border-style: none;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 86%;
  border-radius: 4px;
  border: 1px solid var(--color-grey-2);
  background-color: var(--color-grey-0);
  outline: none;
  transition: 0.5s;
`;

export const ButtonSubmit = styled.button`
  border-style: none;
  background-color: var(--color-primary);
  padding: 0.8rem 40%;
  border-radius: 4px;
  font-size: 16px;
  color: var(--color-grey-0);
  font-weight: 600;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: var(--color-primary-Negative);
  }

  @media ${device.mobileL} {
    padding: 0.8rem 41%;
  }
`;

export const LinkToRegister = styled(Link)`
  border-radius: 4px;
  font-size: 16px;
  color: var(--color-grey-0);
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-decoration: none;
  padding: 0.8rem 31%;
  transition: 0.5s;
  background-color: var(--color-grey-1);
  &:hover {
    background-color: var(--color-grey-2);
  }

  @media ${device.mobileL} {
    padding: 0.8rem 33.5%;
  }
`;
