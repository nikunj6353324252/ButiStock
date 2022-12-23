import {PROCESS, WORKER, PRODUCT, STATUS, FILTER} from '../action/Types';

const initialState = {
  process: [],
  worker: [],
  product: [],
  status: [],
  filter: [],
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

    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
