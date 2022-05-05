export declare class ED25519Signer {
    static verifyMessage(input: {
        signature: string;
        publicKey: string;
        message: string;
    }): Promise<boolean>;
    static signMessage(input: {
        message: string;
        privateKey: string;
    }): Promise<string>;
    static Uint8ArrayToHex(u8a: Uint8Array): string;
    static HexToUint8Array(hex: string): Uint8Array;
}
