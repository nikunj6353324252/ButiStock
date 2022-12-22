import {PROCESS_NAME} from '../action/Types';

const initialState = {
  ProcessValue: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROCESS_NAME:
      return {
        ...state,
        ProcessValue: action.payload,
      };
    default:
      return state;
  }
};
