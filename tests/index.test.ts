import {SsoService} from '../src';
import {ED25519Signer} from '../src/ED25519-signer';
import * as ed from '@noble/ed25519';

describe('General tests', () => {
    test('Main', async () => {

        const ssoService = new SsoService('https://sso-api-dev.identix.space/graphql');
        const clientDid = 'did:ever:123456';
        const otcDid = await ssoService.requestClientLogin(clientDid);
        const signedOtcDid = `signed_${otcDid}`;
        const sessionTokenDid = await ssoService.attemptClientLogin(clientDid, signedOtcDid);
        console.log(sessionTokenDid);

    });

    test('Sign / verify ED25519', async () => {
        const message = 'Hello World';
        const privateKey: string = ED25519Signer.Uint8ArrayToHex(ed.utils.randomPrivateKey());
        const publicKey: string = ED25519Signer.Uint8ArrayToHex(await ed.getPublicKey(privateKey));

        const signature = await ED25519Signer.signMessage({
            message,
            privateKey
        });
        console.log({signature});
        const isValid = await ED25519Signer.verifyMessage({
            message,
            signature,
            publicKey
        });
        console.log({isValid});
        expect(isValid).toBe(true);
    });
});
