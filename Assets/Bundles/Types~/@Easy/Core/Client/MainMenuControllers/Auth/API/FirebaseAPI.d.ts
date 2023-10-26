export interface FirebaseSignUpResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}
export interface FirebaseTokenResponse {
    expires_in: string;
    token_type: string;
    refresh_token: string;
    id_token: string;
    user_id: string;
    project_id: string;
}
