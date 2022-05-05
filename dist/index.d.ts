import { Did, ISsoService, UserInfo } from './ISsoService';
export declare class SsoService implements ISsoService {
    private sdk;
    constructor(ssoServiceUrl?: string);
    attemptClientLogin(clientDid: Did, signature: string): Promise<Did>;
    requestClientLogin(clientDidOrRefreshToken: Did): Promise<Did>;
    validateUserSession(clientSessionDid: Did, userSessionDid: Did): Promise<void>;
    getCurrentUserInfo(clientSessionDid: Did, userSessionDid: Did): Promise<UserInfo>;
}
