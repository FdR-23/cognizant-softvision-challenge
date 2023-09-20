/* eslint-disable no-console */
import {steps} from "../helper/Steps";

import {TYPE} from "./actions";

export const initialState = {
  steps: steps,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.ADD_CANDIDATE: {
      const findStep = state.steps.find((element) => element.value === action.payload.step);

      // findStep.candidate.push(action.payload);
      if (findStep) {
        return {
          ...state,
          steps: state.steps.map((step) =>
            step.value === action.payload.step
              ? {...step, candidate: [...step.candidate, action.payload]}
              : step,
          ),
        };
      } else {
        return {...state};
      }
    }
    case TYPE.DELETE_CANDIDATE: {
      const idCandidate = action.payload;
      const deleteCandidate = state.steps.map((step) => {
        let updateCandidates = step.candidate.filter((user) => user.id !== idCandidate);

        return {...step, candidate: updateCandidates};
      });

      return {
        ...state,
        steps: deleteCandidate,
      };
    }
    case TYPE.MOVE_RIGHT_CANDIDATE: {
      let copySteps = state.steps;
      const idCandidate = action.payload;

      const findUser = state.steps
        .map((step) => step.candidate.find((user) => user.id === idCandidate))
        .filter((user) => user !== undefined)[0];

      let indexStepOfUser = state.steps.findIndex((step) =>
        step.candidate.some((user) => user.id === idCandidate),
      );
      const stepValues = state.steps.map((step) => step.value);
      const deleteCandidate = state.steps.map((step) => {
        let updateCandidates = step.candidate.filter((user) => user.id !== idCandidate);

        return {...step, candidate: updateCandidates};
      });

      copySteps = deleteCandidate;
      if (indexStepOfUser >= 0 && indexStepOfUser < state.steps.length - 1) {
        console.log(indexStepOfUser);
        indexStepOfUser = indexStepOfUser + 1;
        findUser.step = stepValues[indexStepOfUser];
      } else {
        return {...state};
      }

      return {
        ...state,
        steps: copySteps.map((step) =>
          step.value === findUser.step ? {...step, candidate: [...step.candidate, findUser]} : step,
        ),
      };
    }
    case TYPE.MOVE_LEFT_CANDIDATE: {
      let copySteps = state.steps;
      const idCandidate = action.payload;

      const findUser = state.steps
        .map((step) => step.candidate.find((user) => user.id === idCandidate))
        .filter((user) => user !== undefined)[0];

      let indexStepOfUser = state.steps.findIndex((step) =>
        step.candidate.some((user) => user.id === idCandidate),
      );
      const stepValues = state.steps.map((step) => step.value);
      const deleteCandidate = state.steps.map((step) => {
        let updateCandidates = step.candidate.filter((user) => user.id !== idCandidate);

        return {...step, candidate: updateCandidates};
      });

      copySteps = deleteCandidate;

      if (indexStepOfUser > 0 && indexStepOfUser <= state.steps.length - 1) {
        indexStepOfUser = indexStepOfUser - 1;
        findUser.step = stepValues[indexStepOfUser];
      } else {
        return {...state};
      }

      return {
        ...state,
        steps: copySteps.map((step) =>
          step.value === findUser.step ? {...step, candidate: [...step.candidate, findUser]} : step,
        ),
      };
    }
    default:
      return state;
  }
};

export default reducer;
