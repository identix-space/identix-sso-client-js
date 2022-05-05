"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ED25519Signer = void 0;
const ed = require("@noble/ed25519");
const crypto = require("crypto");
class ED25519Signer {
    static async verifyMessage(input) {
        const hash = crypto.createHash('sha256').update(input.message).digest('hex');
        return await ed.verify(this.HexToUint8Array(input.signature), hash, this.HexToUint8Array(input.publicKey));
    }
    static async signMessage(input) {
        console.log({ input });
        const msgHash = crypto.createHash('sha256').update(input.message).digest('hex');
        const res = await ed.sign(msgHash, this.HexToUint8Array(input.privateKey));
        return this.Uint8ArrayToHex(res);
    }
    static Uint8ArrayToHex(u8a) {
        return Array.from(u8a).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    static HexToUint8Array(hex) {
        return new Uint8Array(hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    }
}
exports.ED25519Signer = ED25519Signer;
