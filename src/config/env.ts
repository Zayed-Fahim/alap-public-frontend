import * as dotenv from 'dotenv';
dotenv.config();

interface IConfig {
  analyze: boolean;
  baseUrl: string;
  apiBaseUrl: string;
}

export const config: IConfig = {
  analyze: !!process.env.ANALYZE as boolean,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL as string
};
