/* eslint-disable */
// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Account = Node & {
  __typename?: 'Account';
  createdAt: Scalars['Date'];
  did: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  isClient: Scalars['Boolean'];
  sessions?: Maybe<Array<AccountSession>>;
  status: AccountStatus;
  updatedAt: Scalars['Date'];
};

export type AccountSession = Node & {
  __typename?: 'AccountSession';
  account: Account;
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  expiresAt: Scalars['Date'];
  id: Scalars['Int'];
  ipAddr: Scalars['String'];
  updatedAt: Scalars['Date'];
  userAgent?: Maybe<UserAgent>;
};

export enum AccountStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED'
}

export type AuthResult = {
  __typename?: 'AuthResult';
  account: Account;
  token: Scalars['String'];
};

export type CostComplexity = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};

export type GenerateEmailCodeResult = {
  __typename?: 'GenerateEmailCodeResult';
  expiresAt: Scalars['Date'];
  result: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Access token of SSO user */
  accessToken: AuthResult;
  echo: Scalars['String'];
  /** Generate oAuth2-like code for Client's site. */
  generateAuthCode: Scalars['String'];
  /** Login with DID. Returns string to sign with client's DID. */
  generateDidOtc: Scalars['String'];
  /** Generate and send email code for any account type. */
  generateEmailCode: GenerateEmailCodeResult;
  generateEverWalletCode: Scalars['String'];
  /** Login with DID */
  loginViaDID: AuthResult;
  /** Login via email and one time code. */
  loginViaEmail: AuthResult;
  loginViaEverWallet: AuthResult;
  loginViaFacebook: AuthResult;
  loginViaGoogle: AuthResult;
};


export type MutationAccessTokenArgs = {
  authCode: Scalars['String'];
};


export type MutationEchoArgs = {
  text: Scalars['String'];
};


export type MutationGenerateDidOtcArgs = {
  did: Scalars['String'];
};


export type MutationGenerateEmailCodeArgs = {
  email: Scalars['String'];
};


export type MutationGenerateEverWalletCodeArgs = {
  publicKey: Scalars['String'];
};


export type MutationLoginViaDidArgs = {
  did: Scalars['String'];
  otcSignatureHex: Scalars['String'];
};


export type MutationLoginViaEmailArgs = {
  email: Scalars['String'];
  emailCode: Scalars['String'];
};


export type MutationLoginViaEverWalletArgs = {
  codeSignatureHex: Scalars['String'];
  publicKey: Scalars['String'];
};


export type MutationLoginViaFacebookArgs = {
  code: Scalars['String'];
};


export type MutationLoginViaGoogleArgs = {
  code: Scalars['String'];
};

export type Node = {
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  updatedAt: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  currentSession: AccountSession;
  echo: Scalars['String'];
  error?: Maybe<Scalars['Int']>;
  whoami: Account;
};


export type QueryEchoArgs = {
  text: Scalars['String'];
};

export type UserAgent = {
  __typename?: 'UserAgent';
  browser?: Maybe<UserAgentBrowser>;
  cpu?: Maybe<UserAgentCpu>;
  engine?: Maybe<UserAgentEngine>;
  os?: Maybe<UserAgentOs>;
  ua?: Maybe<Scalars['String']>;
};

export type UserAgentBrowser = {
  __typename?: 'UserAgentBrowser';
  major?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UserAgentCpu = {
  __typename?: 'UserAgentCpu';
  architecture?: Maybe<Scalars['String']>;
};

export type UserAgentEngine = {
  __typename?: 'UserAgentEngine';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UserAgentOs = {
  __typename?: 'UserAgentOs';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EchoQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type EchoQuery = { __typename?: 'Query', echo: string };

export type GenerateDidOtcMutationVariables = Exact<{
  did: Scalars['String'];
}>;


export type GenerateDidOtcMutation = { __typename?: 'Mutation', generateDidOtc: string };

export type LoginViaDidMutationVariables = Exact<{
  did: Scalars['String'];
  otcSignatureHex: Scalars['String'];
}>;


export type LoginViaDidMutation = { __typename?: 'Mutation', loginViaDID: { __typename?: 'AuthResult', token: string, account: { __typename?: 'Account', id: number, did: string, email: string, status: AccountStatus, isClient: boolean, sessions?: Array<{ __typename?: 'AccountSession', id: number, createdAt: any, ipAddr: string, expiresAt: any, userAgent?: { __typename?: 'UserAgent', ua?: string | null } | null }> | null } } };

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'Query', whoami: { __typename?: 'Account', did: string } };


export const EchoDocument = gql`
    query Echo($text: String!) {
  echo(text: $text)
}
    `;
export const GenerateDidOtcDocument = gql`
    mutation GenerateDidOtc($did: String!) {
  generateDidOtc(did: $did)
}
    `;
export const LoginViaDidDocument = gql`
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
export const WhoAmIDocument = gql`
    query WhoAmI {
  whoami {
    did
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Echo(variables: EchoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EchoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EchoQuery>(EchoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Echo', 'query');
    },
    GenerateDidOtc(variables: GenerateDidOtcMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GenerateDidOtcMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GenerateDidOtcMutation>(GenerateDidOtcDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GenerateDidOtc', 'mutation');
    },
    LoginViaDid(variables: LoginViaDidMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginViaDidMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginViaDidMutation>(LoginViaDidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LoginViaDid', 'mutation');
    },
    WhoAmI(variables?: WhoAmIQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<WhoAmIQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WhoAmIQuery>(WhoAmIDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'WhoAmI', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;