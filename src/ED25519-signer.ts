import * as ed from '@noble/ed25519';
import * as crypto from 'crypto';

export class ED25519Signer {
    static async verifyMessage(input: { signature: string; publicKey: string; message: string }): Promise<boolean> {
        const hash = crypto.createHash('sha256').update(input.message).digest('hex');
        return await ed.verify(this.HexToUint8Array(input.signature), hash, this.HexToUint8Array(input.publicKey));
    }

    static async signMessage(input: {
        message: string,
        privateKey: string
    }): Promise<string> {
        console.log({input});
        const msgHash = crypto.createHash('sha256').update(input.message).digest('hex');
        const res = await ed.sign(msgHash, this.HexToUint8Array(input.privateKey));
        return this.Uint8ArrayToHex(res);
    }

    public static Uint8ArrayToHex(u8a: Uint8Array): string {
        return Array.from(u8a).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    public static HexToUint8Array(hex: string): Uint8Array {
        return new Uint8Array(hex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));
    }
}
