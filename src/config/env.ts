import * as dotenv from 'dotenv';
dotenv.config();

interface IConfig {
  analyze: boolean;
  baseUrl: string;
  apiAuthBaseUrl: string;
  apiCommunicationBaseUrl: string;
  otpResendTime: number;
  encryptionSecret: string;
  decryptionSecret: string;
}

export const config: IConfig = {
  analyze: !!process.env.ANALYZE as boolean,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
  apiAuthBaseUrl: process.env.NEXT_PUBLIC_API_AUTH_BASE_URL as string,
  apiCommunicationBaseUrl: process.env
    .NEXT_PUBLIC_API_COMMUNICATION_BASE_URL as string,
  otpResendTime: parseInt(
    process.env.NEXT_PUBLIC_OTP_RESEND_TIME as string,
    10
  ),
  encryptionSecret: process.env.NEXT_PUBLIC_ENCRYPTION_SECRET as string,
  decryptionSecret: process.env.NEXT_PUBLIC_DECRYPTION_SECRET as string
};
