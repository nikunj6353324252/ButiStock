import {WORKER} from '../action/Types';

const initialState = {
  worker: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WORKER:
      return {
        ...state,
        worker: action.payload,
      };
    default:
      return state;
  }
};
