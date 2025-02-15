import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const fetcher = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  url: string,
  data?: unknown,
  headers?: Record<string, string>
): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };

    const response: AxiosResponse<T> = await axios(config);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error('An unexpected error occurred');
  }
};
