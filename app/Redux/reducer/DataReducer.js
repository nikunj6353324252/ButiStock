import {PROCESS, WORKER} from '../action/Types';

const initialState = {
  process: [],
  worker: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROCESS:
      return {
        ...state,
        process: action.payload,
      };
    case WORKER:
      return {
        ...state,
        worker: action.payload,
      };
    default:
      return state;
  }
};
