import {useContext, createContext} from "react";

export const CandidateContext = createContext();

const useCandidateContext = () => {
  return useContext(CandidateContext);
};

export default useCandidateContext;
