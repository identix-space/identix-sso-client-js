"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.WhoAmIDocument = exports.LoginViaDidDocument = exports.GenerateDidOtcDocument = exports.EchoDocument = exports.AccountStatus = void 0;
const graphql_tag_1 = require("graphql-tag");
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["Active"] = "ACTIVE";
    AccountStatus["Disabled"] = "DISABLED";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
exports.EchoDocument = (0, graphql_tag_1.default) `
    query Echo($text: String!) {
  echo(text: $text)
}
    `;
exports.GenerateDidOtcDocument = (0, graphql_tag_1.default) `
    mutation GenerateDidOtc($did: String!) {
  generateDidOtc(did: $did)
}
    `;
exports.LoginViaDidDocument = (0, graphql_tag_1.default) `
    mutation LoginViaDid($did: String!, $otcSignatureHex: String!) {
  loginViaDID(did: $did, otcSignatureHex: $otcSignatureHex) {
    token
    account {
      id
      did
      email
      status
      isClient
      sessions {
        id
        createdAt
        ipAddr
        expiresAt
        userAgent {
          ua
        }
      }
    }
  }
}
    `;
exports.WhoAmIDocument = (0, graphql_tag_1.default) `
    query WhoAmI {
  whoami {
    did
  }
}
    `;
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        Echo(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.EchoDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'Echo', 'query');
        },
        GenerateDidOtc(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GenerateDidOtcDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GenerateDidOtc', 'mutation');
        },
        LoginViaDid(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.LoginViaDidDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'LoginViaDid', 'mutation');
        },
        WhoAmI(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.WhoAmIDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'WhoAmI', 'query');
        }
    };
}
exports.getSdk = getSdk;
