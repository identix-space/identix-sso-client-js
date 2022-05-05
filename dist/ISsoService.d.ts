export declare type Did = string;
export interface UserInfo {
    did: string;
}
export interface ISsoService {
    requestClientLogin(clientDidOrRefreshToken: Did): Promise<Did>;
    attemptClientLogin(clientDid: Did, signature: string): Promise<Did>;
    validateUserSession(clientSessionDid: Did, userSessionDid: Did): Promise<void>;
    getCurrentUserInfo(clientSessionDid: Did, userSessionDid: Did): Promise<UserInfo>;
}
