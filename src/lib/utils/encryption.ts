import { config } from '@/config/env';
import CryptoJS from 'crypto-js';

export const encrypt = (data: object, saltLength: number = 16): string => {
  if (!config!.encryptionSecret) return 'Secrect is undefined here';

  const salt = CryptoJS.lib.WordArray.random(saltLength);

  const key = CryptoJS.PBKDF2(config.encryptionSecret, salt, {
    keySize: 256 / 32,
    iterations: 1000
  });

  const iv = CryptoJS.lib.WordArray.random(16);

  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  const combined = `${salt.toString()}:${iv.toString()}:${encrypted.toString()}`;

  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(combined)).slice(
    0,
    30
  );
};
