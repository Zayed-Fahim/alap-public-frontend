import { config } from '@/config/env';
import CryptoJS from 'crypto-js';

export const decrypt = (encryptedString: string): object => {
  const combined = CryptoJS.enc.Base64.parse(encryptedString).toString(
    CryptoJS.enc.Utf8
  );

  const [salt, iv, encrypted] = combined.split(':');

  const saltWordArray = CryptoJS.enc.Hex.parse(salt);
  const ivWordArray = CryptoJS.enc.Hex.parse(iv);

  const key = CryptoJS.PBKDF2(config.decryptionSecret, saltWordArray, {
    keySize: 256 / 32,
    iterations: 1000
  });

  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: ivWordArray,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

  return JSON.parse(decryptedText);
};
