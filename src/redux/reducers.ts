import { GlobalState } from '@interfaces/state/global.state'
import { SET_STATE_TOKEN, CLEAR_STATE_TOKEN } from '@redux/actions';

const initialState: GlobalState = {
  accessToken: '',
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_STATE_TOKEN:
      return { ...state, accessToken: action.payload };
    case CLEAR_STATE_TOKEN:
      return { ...state, accessToken: '' };
    default:
      return state;
  }
};

export default rootReducer;