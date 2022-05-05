import {getSdk, Sdk} from './generated/gql';
import {GraphQLClient} from 'graphql-request';
import {Did, ISsoService, UserInfo} from './ISsoService';

export class SsoService implements ISsoService {
    private sdk: Sdk;

    constructor(ssoServiceUrl = 'https://sso-api-dev.identix.space/graphql') {
        this.sdk = getSdk(new GraphQLClient(ssoServiceUrl));
    }

    async attemptClientLogin(clientDid: Did, signature: string): Promise<Did> {
        const res = await this.sdk.LoginViaDid({did: clientDid, otcSignatureHex: signature});
        return res.loginViaDID.token;
    }

    async requestClientLogin(clientDidOrRefreshToken: Did): Promise<Did> {
        const res = await this.sdk.GenerateDidOtc({did: clientDidOrRefreshToken});
        return res.generateDidOtc;
    }

    async validateUserSession(clientSessionDid: Did, userSessionDid: Did): Promise<void> {
        const res = await this.sdk.WhoAmI(undefined, {
            authorization: userSessionDid,
            'authorization-client': clientSessionDid
        });
        if (!res.whoami.did) {
            throw new Error('Invalid client session');
        }
    }

    async getCurrentUserInfo(clientSessionDid: Did, userSessionDid: Did): Promise<UserInfo> {
        const res = await this.sdk.WhoAmI(undefined, {
            authorization: userSessionDid,
            'authorization-client': clientSessionDid
        });
        return {
            did: res.whoami.did
        };
    }
}
