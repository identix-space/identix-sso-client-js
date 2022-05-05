import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
};
export declare type Account = Node & {
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
export declare type AccountSession = Node & {
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
export declare enum AccountStatus {
    Active = "ACTIVE",
    Disabled = "DISABLED"
}
export declare type AuthResult = {
    __typename?: 'AuthResult';
    account: Account;
    token: Scalars['String'];
};
export declare type CostComplexity = {
    max?: InputMaybe<Scalars['Int']>;
    min?: InputMaybe<Scalars['Int']>;
};
export declare type GenerateEmailCodeResult = {
    __typename?: 'GenerateEmailCodeResult';
    expiresAt: Scalars['Date'];
    result: Scalars['Boolean'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    accessToken: AuthResult;
    echo: Scalars['String'];
    generateAuthCode: Scalars['String'];
    generateDidOtc: Scalars['String'];
    generateEmailCode: GenerateEmailCodeResult;
    generateEverWalletCode: Scalars['String'];
    loginViaDID: AuthResult;
    loginViaEmail: AuthResult;
    loginViaEverWallet: AuthResult;
    loginViaFacebook: AuthResult;
    loginViaGoogle: AuthResult;
};
export declare type MutationAccessTokenArgs = {
    authCode: Scalars['String'];
};
export declare type MutationEchoArgs = {
    text: Scalars['String'];
};
export declare type MutationGenerateDidOtcArgs = {
    did: Scalars['String'];
};
export declare type MutationGenerateEmailCodeArgs = {
    email: Scalars['String'];
};
export declare type MutationGenerateEverWalletCodeArgs = {
    publicKey: Scalars['String'];
};
export declare type MutationLoginViaDidArgs = {
    did: Scalars['String'];
    otcSignatureHex: Scalars['String'];
};
export declare type MutationLoginViaEmailArgs = {
    email: Scalars['String'];
    emailCode: Scalars['String'];
};
export declare type MutationLoginViaEverWalletArgs = {
    codeSignatureHex: Scalars['String'];
    publicKey: Scalars['String'];
};
export declare type MutationLoginViaFacebookArgs = {
    code: Scalars['String'];
};
export declare type MutationLoginViaGoogleArgs = {
    code: Scalars['String'];
};
export declare type Node = {
    createdAt: Scalars['Date'];
    id: Scalars['Int'];
    updatedAt: Scalars['Date'];
};
export declare type Query = {
    __typename?: 'Query';
    currentSession: AccountSession;
    echo: Scalars['String'];
    error?: Maybe<Scalars['Int']>;
    whoami: Account;
};
export declare type QueryEchoArgs = {
    text: Scalars['String'];
};
export declare type UserAgent = {
    __typename?: 'UserAgent';
    browser?: Maybe<UserAgentBrowser>;
    cpu?: Maybe<UserAgentCpu>;
    engine?: Maybe<UserAgentEngine>;
    os?: Maybe<UserAgentOs>;
    ua?: Maybe<Scalars['String']>;
};
export declare type UserAgentBrowser = {
    __typename?: 'UserAgentBrowser';
    major?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};
export declare type UserAgentCpu = {
    __typename?: 'UserAgentCpu';
    architecture?: Maybe<Scalars['String']>;
};
export declare type UserAgentEngine = {
    __typename?: 'UserAgentEngine';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};
export declare type UserAgentOs = {
    __typename?: 'UserAgentOs';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};
export declare type EchoQueryVariables = Exact<{
    text: Scalars['String'];
}>;
export declare type EchoQuery = {
    __typename?: 'Query';
    echo: string;
};
export declare type GenerateDidOtcMutationVariables = Exact<{
    did: Scalars['String'];
}>;
export declare type GenerateDidOtcMutation = {
    __typename?: 'Mutation';
    generateDidOtc: string;
};
export declare type LoginViaDidMutationVariables = Exact<{
    did: Scalars['String'];
    otcSignatureHex: Scalars['String'];
}>;
export declare type LoginViaDidMutation = {
    __typename?: 'Mutation';
    loginViaDID: {
        __typename?: 'AuthResult';
        token: string;
        account: {
            __typename?: 'Account';
            id: number;
            did: string;
            email: string;
            status: AccountStatus;
            isClient: boolean;
            sessions?: Array<{
                __typename?: 'AccountSession';
                id: number;
                createdAt: any;
                ipAddr: string;
                expiresAt: any;
                userAgent?: {
                    __typename?: 'UserAgent';
                    ua?: string | null;
                } | null;
            }> | null;
        };
    };
};
export declare type WhoAmIQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type WhoAmIQuery = {
    __typename?: 'Query';
    whoami: {
        __typename?: 'Account';
        did: string;
    };
};
export declare const EchoDocument: import("graphql/language/ast").DocumentNode;
export declare const GenerateDidOtcDocument: import("graphql/language/ast").DocumentNode;
export declare const LoginViaDidDocument: import("graphql/language/ast").DocumentNode;
export declare const WhoAmIDocument: import("graphql/language/ast").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Echo(variables: EchoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EchoQuery>;
    GenerateDidOtc(variables: GenerateDidOtcMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GenerateDidOtcMutation>;
    LoginViaDid(variables: LoginViaDidMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginViaDidMutation>;
    WhoAmI(variables?: WhoAmIQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<WhoAmIQuery>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
