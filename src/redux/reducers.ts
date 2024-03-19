import { AppState } from '@interfaces/state/appState'
import { LOGIN, LOGOUT } from '@redux/actions';

const initialState: AppState = {
  auth: {
    accessToken: localStorage.getItem('accessToken') || null,
  }
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('accessToken', action.payload);
      return { ...state, accessToken: action.payload };
    case LOGOUT:
      localStorage.removeItem('accessToken');
      return { ...state, accessToken: null };
    default:
      return state;
  }
};

export default rootReducer;