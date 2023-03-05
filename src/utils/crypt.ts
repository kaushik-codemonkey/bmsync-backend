import bcrypt from 'bcrypt';
export interface storableData {
    encryptedPass: string;
    email: string;
    jsonFile: File;
}
interface ICrypt {
    encrypt: (passphrase: string) => Promise<string>;
    decrypt: (hashedPassphrase: string, originalPassphrase: string) => Promise<boolean>;
}

class Crypt implements ICrypt {
    async encrypt(passphrase: string) {
        console.log("Encrypted", passphrase);
        const bcryptWithSalt = await bcrypt.hash(passphrase, 5)
        return bcryptWithSalt
    }
    async decrypt(hashedPassphrase: string, originalPassphrase: string) {
        console.log("Decrypted", hashedPassphrase);
        if (!originalPassphrase) {
            return false
        }
        const bcryptWithSalt = await bcrypt.compare(originalPassphrase, hashedPassphrase)
        return bcryptWithSalt
    }

    async storeData(data: storableData) {
        console.log(data);
    }
}

export default new Crypt();