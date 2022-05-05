"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsoService = void 0;
const gql_1 = require("./generated/gql");
const graphql_request_1 = require("graphql-request");
class SsoService {
    constructor(ssoServiceUrl = 'https://sso-api-dev.identix.space/graphql') {
        this.sdk = (0, gql_1.getSdk)(new graphql_request_1.GraphQLClient(ssoServiceUrl));
    }
    async attemptClientLogin(clientDid, signature) {
        const res = await this.sdk.LoginViaDid({ did: clientDid, otcSignatureHex: signature });
        return res.loginViaDID.token;
    }
    async requestClientLogin(clientDidOrRefreshToken) {
        const res = await this.sdk.GenerateDidOtc({ did: clientDidOrRefreshToken });
        return res.generateDidOtc;
    }
    async validateUserSession(clientSessionDid, userSessionDid) {
        const res = await this.sdk.WhoAmI(undefined, {
            authorization: userSessionDid,
            'authorization-client': clientSessionDid
        });
        if (!res.whoami.did) {
            throw new Error('Invalid client session');
        }
    }
    async getCurrentUserInfo(clientSessionDid, userSessionDid) {
        const res = await this.sdk.WhoAmI(undefined, {
            authorization: userSessionDid,
            'authorization-client': clientSessionDid
        });
        return {
            did: res.whoami.did
        };
    }
}
exports.SsoService = SsoService;
