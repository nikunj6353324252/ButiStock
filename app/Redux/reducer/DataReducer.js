import {
  PROCESS,
  WORKER,
  PRODUCT,
  STATUS,
  FILTER,
  QR_DATA,
} from '../action/Types';

const initialState = {
  process: [],
  worker: [],
  product: [],
  status: [],
  filter: [],
  QrData: [],
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
    case QR_DATA:
      return {
        ...state,
        QrData: action.payload,
      };
    default:
      return state;
  }
};
