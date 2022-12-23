import {PROCESS, WORKER, PRODUCT, STATUS} from '../action/Types';

const initialState = {
  process: [],
  worker: [],
  product: [],
  status: [],
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
    case PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
