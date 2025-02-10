interface IConfig {
  analyze: boolean;
  baseUrl: string;
  apiBaseUrl: string;
}

const { NEXT_PUBLIC_API_BASE_URL, NEXT_PUBLIC_BASE_URL, ANALYZE } = process.env;

export const config: IConfig = {
  analyze: !!ANALYZE!,
  baseUrl: NEXT_PUBLIC_BASE_URL!,
  apiBaseUrl: NEXT_PUBLIC_API_BASE_URL!
};
