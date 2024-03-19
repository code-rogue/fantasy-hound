export interface AppState {
    auth: AuthState,
}

export interface AuthState {
    accessToken: string | null,
}