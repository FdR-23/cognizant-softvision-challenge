import React, {useState} from "react";

import style from "../Styles/CreateCandidate.module.scss";
import {TYPE} from "../redux/actions.js";
import useCandidateContext from "../hook/useCandidateContext.jsx";
const CreateCandidate = ({setOpen}) => {
  const {dispatch} = useCandidateContext();
  const [candidate, setCandidate] = useState({
    id: "",
    name: "",
    step: "",
    comments: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setCandidate({
      ...candidate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!candidate.name) return;
    const newCandidate = {
      id: +new Date(),
      name: candidate.name,
      step: "Entrevista inicial",
      comments: candidate.comments,
    };

    dispatch({
      type: TYPE.ADD_CANDIDATE,
      payload: newCandidate,
    });
    setOpen((prev) => !prev);
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <button className={style.close} onClick={() => setOpen((prev) => !prev)}>
          X
        </button>
        <h2>Create Candia</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name</label>
          <input
            required
            name="name"
            type="text"
            value={candidate.name}
            onChange={(e) => handleChange(e)}
          />
          <label>Comentario</label>
          <input
            name="comments"
            type="text"
            value={candidate.comments}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">enviar</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCandidate;
