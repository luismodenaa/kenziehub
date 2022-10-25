import { Header } from "../../components/Header";
import {
  ButtonSubmit,
  Container,
  FormStyled,
  InputBox,
  InputStyled,
  SelectStyled,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { RegisterContext } from "../../context/Register/Register";
import React from "react";

interface iUserRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bio: string;
  contact: string;
  course_module: string;
}

export const RegisterPage = ({ themeToggler, theme }) => {
  const modules = [
    "Primeiro módulo",
    "Segundo módulo",
    "Terceiro módulo",
    "Quarto módulo",
    "Quinto módulo",
  ];

  const formSchema = yup.object().shape({
    name: yup.string().required("Coloque seu nome"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Digite seu e-mail"),
    password: yup
      .string()
      .required("Digite sua senha")
      .matches(/[A-Z]/, "Deve conter uma letra maiúscula")
      .matches(/([a-z])/, "Deve conter uma letra minúscula")
      .matches(/(\d)/, "Deve conter um número")
      .matches(/(\W)|_/, "Deve conter um caracter especial")
      .matches(/.{4,}/, "Deve conter um caracter especial"),
    passwordConfirm: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "As senhas não correspondem"),
    bio: yup.string().required("Coloque sua biografia"),
    contact: yup.string().required("Coloque seu contato"),
    course_module: yup
      .string()
      .oneOf(modules, "Selecione seu módulo atual")
      .required("Selecione seu módulo atual"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(formSchema),
  });

  const { registerUser } = useContext(RegisterContext);

  const [hiddenPassword, setHiddenPassword] = useState("password");

  const showPassword = () => {
    if (hiddenPassword === "password") {
      setHiddenPassword("text");
    } else {
      setHiddenPassword("password");
    }
  };

  const modulesOption = modules.map((module, index) => (
    <option value={module} key={index}>
      {module}
    </option>
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header themeToggler={themeToggler} btnBack={true} theme={theme} />
      <Container>
        <FormStyled onSubmit={handleSubmit(registerUser)}>
          <h3>Crie sua conta</h3>
          <h4>Rápido e grátis, vamos nessa!</h4>
          <InputBox>
            <InputStyled required type="text" {...register("name")} />
            <span>Nome</span>
            <p className="error-message">{errors.name?.message}</p>
          </InputBox>
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
          <InputBox>
            <InputStyled
              required
              type={hiddenPassword}
              {...register("passwordConfirm")}
            />
            <span>Confirmar Senha</span>
            <p className="error-message">{errors.passwordConfirm?.message}</p>
          </InputBox>
          <InputBox>
            <InputStyled required type="text" {...register("bio")} />
            <span>Bio</span>
            <p className="error-message">{errors.bio?.message}</p>
          </InputBox>
          <InputBox>
            <InputStyled required type="text" {...register("contact")} />
            <span>Contato (Linkedin)</span>
            <p className="error-message">{errors.contact?.message}</p>
          </InputBox>
          <SelectStyled
            defaultValue={"default"}
            required
            {...register("course_module")}
          >
            <option disabled value="default">
              Selecione o modulo
            </option>
            {modulesOption}
          </SelectStyled>
          <p className="error-message-module">
            {errors.course_module?.message}
          </p>
          <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
        </FormStyled>
      </Container>
    </motion.div>
  );
};
