import {
  PROCESS,
  WORKER,
  PRODUCT,
  STATUS,
  FILTER,
  QR_DATA,
  AUTH_LOADING,
} from '../action/Types';

const initialState = {
  authLoading: false,
  process: [],
  worker: [],
  product: [],
  status: [],
  filter: [],
  QrData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
      };
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
