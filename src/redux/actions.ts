import { AppState } from '@interfaces/state/appState'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const selectAccessToken = (state: AppState) => state.auth.accessToken;

export const login = (accessToken: string) => ({
  type: LOGIN,
  payload: accessToken,
});

export const logout = () => ({
  type: LOGOUT,
});