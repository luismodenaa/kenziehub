import { useContext, useEffect } from "react";
import { OpenModalDeleteContext } from "../../context/OpenModalDelete";
import { OpenModalEditContext } from "../../context/OpenModalEdit/OpenModalEdit";
import { ShowTecContext } from "../../context/ShowTec/ShowTec";
import { Card, Container, DelIcon, EditIcon } from "./style";
import React from "react";

export const ContainerTec = ({ theme }) => {
  const { tech } = useContext(ShowTecContext);
  const { openModal } = useContext(OpenModalDeleteContext);
  const { openModalEdit } = useContext(OpenModalEditContext);

  return (
    <Container theme={theme}>
      {tech.length ? (
        <ul>
          {tech.map((tec) => (
            <Card theme={theme} key={tec.id}>
              <h3>{tec.title}</h3>
              <div>
                <p>{tec.status}</p>
                <EditIcon theme={theme} onClick={() => openModalEdit(tec)} />
                <DelIcon theme={theme} onClick={() => openModal(tec)} />
              </div>
            </Card>
          ))}
        </ul>
      ) : (
        <div className="notfound">
          <h3>Você não possui tecnologias cadastradas</h3>
        </div>
      )}
    </Container>
  );
};
