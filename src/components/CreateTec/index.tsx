import { useContext } from "react";
import { OpenModalCreateContext } from "../../context/OpenModalCreate/OpenModalCreate";
import {
  ButtonSubmit,
  FormStyled,
  IconClose,
  InputName,
  ModalStyled,
  SelectStatus,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateContext } from "../../context/Create/Create";
import React from "react";

interface iTechCreateData {
  title: string;
  status: string;
}

export const CreateTecModal = ({ theme }) => {
  const { closeModal, modalCreateIsOpen } = useContext(OpenModalCreateContext);
  const { createTec } = useContext(CreateContext);

  const customStyles = {
    overlay: {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(17, 17, 17, 0.7)",
    },
  };

  const status = ["Iniciante", "Intermediário", "Avançado"];

  const statusOption = status.map((statu, index) => (
    <option value={statu} key={index}>
      {statu}
    </option>
  ));

  const formSchema = yup.object().shape({
    title: yup.string().required("Coloque um título"),
    status: yup
      .string()
      .oneOf(status, "Selecione um status")
      .required("Selecione um status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTechCreateData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalStyled
      isOpen={modalCreateIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      theme={theme}
      closeTimeoutMS={300}
    >
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <IconClose onClick={closeModal} />
      </div>
      <FormStyled onSubmit={handleSubmit(createTec)}>
        <InputName
          type="text"
          placeholder="Nome"
          required
          theme={theme}
          {...register("title")}
        />
        <SelectStatus
          defaultValue={"default"}
          required
          theme={theme}
          {...register("status")}
        >
          <option disabled value="default">
            Selecione o status
          </option>
          {statusOption}
        </SelectStatus>
        <ButtonSubmit>Cadastrar Tecnologia</ButtonSubmit>
      </FormStyled>
    </ModalStyled>
  );
};
