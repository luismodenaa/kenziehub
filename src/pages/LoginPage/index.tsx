import { Header } from "../../components/Header";
import {
  ButtonSubmit,
  Container,
  FormStyled,
  InputBox,
  InputStyled,
  LinkToRegister,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/Auth/Auth";
import React from "react";

interface iUserLogin {
  email: string;
  password: string;
}

export const LoginPage = ({ themeToggler, theme }) => {
  const { loginUser } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Digite seu e-mail"),
    password: yup.string().required("Digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({ resolver: yupResolver(formSchema) });

  const [hiddenPassword, setHiddenPassword] = useState("password");

  const showPassword = () => {
    if (hiddenPassword === "password") {
      setHiddenPassword("text");
    } else {
      setHiddenPassword("password");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header themeToggler={themeToggler} btnBack={true} theme={theme} />
      <Container>
        <FormStyled onSubmit={handleSubmit(loginUser)}>
          <h3>Login</h3>
          <InputBox>
            <InputStyled required type="text" {...register("email")} />
            <span>E-mail</span>
            <p className="error-message">{errors.email?.message}</p>
          </InputBox>
          <InputBox>
            <InputStyled
              required
              type={hiddenPassword}
              {...register("password")}
            />
            <span>Senha</span>
            {hiddenPassword === "password" ? (
              <AiFillEyeInvisible
                onClick={showPassword}
                className="eye-password"
              />
            ) : (
              <AiFillEye onClick={showPassword} className="eye-password" />
            )}

            <p className="error-message">{errors.password?.message}</p>
          </InputBox>
          <ButtonSubmit type="submit">Entrar</ButtonSubmit>
          <p className="not-register">Ainda não possui uma conta?</p>
          <LinkToRegister to={"/cadastro"}>Cadastre-se</LinkToRegister>
        </FormStyled>
      </Container>
    </motion.div>
  );
};
