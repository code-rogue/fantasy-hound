import { GlobalState } from '@interfaces/state/global.state'

export const SET_STATE_TOKEN = 'SET_STATE_TOKEN';
export const CLEAR_STATE_TOKEN = 'CLEAR_STATE_TOKEN';

export const selectAccessToken = (state: GlobalState) => state.accessToken;

export const setStateToken = (value: string) => ({
  type: SET_STATE_TOKEN,
  payload: value,
});

export const clearStateToken = () => ({
  type: CLEAR_STATE_TOKEN,
});