import React, {useReducer} from "react";

import {CandidateContext} from "./hook/useCandidateContext";
import reducer, {initialState} from "./redux/reducer";
const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <CandidateContext.Provider value={{state: state, dispatch}}>
      {children}
    </CandidateContext.Provider>
  );
};

export default ContextProvider;
