import { useContext } from "react";
import { OpenModalEditContext } from "../../context/OpenModalEdit/OpenModalEdit";
import {
  ButtonSubmit,
  FormStyled,
  IconClose,
  ModalStyled,
  SelectStatus,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";

interface iEditTech {
  status: string;
}

export const EditTec = ({ theme }) => {
  const { modalEditIsOpen, closeModal, editTech } =
    useContext(OpenModalEditContext);
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
    status: yup
      .string()
      .oneOf(status, "Selecione um status")
      .required("Selecione um status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditTech>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalStyled
      isOpen={modalEditIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      theme={theme}
      closeTimeoutMS={300}
    >
      <div>
        <h3>Editar Tecnologia</h3>
        <IconClose onClick={closeModal} />
      </div>
      <FormStyled onSubmit={handleSubmit(editTech)}>
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
        <ButtonSubmit>Editar Tecnologia</ButtonSubmit>
      </FormStyled>
    </ModalStyled>
  );
};
