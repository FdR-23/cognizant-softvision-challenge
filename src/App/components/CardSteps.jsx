import React, {useState} from "react";

import {TYPE} from "../redux/actions.js";
import style from "../Styles/CardSteps.module.scss";
import useCandidateContext from "../hook/useCandidateContext";

const ENTREVISTA_INICIAL = "Entrevista inicial";

import CreateCandidate from "./CreateCandidate";
const CardSteps = ({candidate, name}) => {
  const {dispatch} = useCandidateContext();
  const [isOpen, setOpen] = useState(false);

  const moveRight = (id) =>
    dispatch({
      type: TYPE.MOVE_RIGHT_CANDIDATE,
      payload: id,
    });

  const moveLeft = (id) =>
    dispatch({
      type: TYPE.MOVE_LEFT_CANDIDATE,
      payload: id,
    });

  const handleDelete = (id) =>
    dispatch({
      type: TYPE.DELETE_CANDIDATE,
      payload: id,
    });

  return (
    <section className={style.principal}>
      <div className={style.containerTitle}>
        <h2 className={style.title}>{name}</h2>
      </div>
      {Boolean(candidate.length) ? (
        candidate.map((element) => (
          <div key={element.id}>
            <div>
              <label>Nombre:</label>
              <p>{element.name}</p>
              <label>Comentario</label>
              <p>{element.coments}</p>
            </div>
            <div>
              <button onClick={() => moveRight(element.id)}>{">"}</button>
              <button onClick={() => moveLeft(element.id)}>{"<"}</button>
            </div>
            <div>
              <button>Editar</button>
              <button onClick={() => handleDelete(element.id)}>Elimnar</button>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className={style.noElement}>
            <p>NO HAY ELEMENTOS</p>
          </div>
        </>
      )}
      {name === ENTREVISTA_INICIAL && (
        <button onClick={() => setOpen((prev) => !prev)}> Agregar Candidato</button>
      )}
      {isOpen && <CreateCandidate setOpen={setOpen} />}
    </section>
  );
};

export default CardSteps;
