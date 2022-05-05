![](https://i.imgur.com/zWpiqag.png)

Identix SSO Client JS. Typescript supported.

## License

This code licensed under MIT license.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Installation

Install client with npm

```bash
npm install identix-sso-client-js
```

## Usage/Examples

### Client authentication

```javascript
import {SsoService} from "identix-sso-client-js";

const ssoService = new SsoService('https://sso-api-dev.identix.space/graphql');
const clientDid = 'did:ever:123456';
const otcDid = await ssoService.requestClientLogin(clientDid)
const signedOtcDid = 'signed_' + otcDid;
const sessionTokenDid = await ssoService.attemptClientLogin(clientDid, signedOtcDid);
console.log(sessionTokenDid);
```

### User authentication

```javascript
try {
    await ssoService.validateUserSession(sessionTokenDid, userSessionDid);
} catch (e) {
    console.log(e); // User session is invalid
}
const user = await ssoService.getCurrentUserInfo(sessionTokenDid, userSessionDid);
console.log(user);
```

### Sign / verify data

```javascript

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
```
