'use client';
import { IResponseMessage } from '@/components/ui';
import { config } from '@/config/env';
import { fetcher } from '@/lib/utils';
import { IRegisterProps } from '@/types';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '@/contexts';

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IRegisterProps>({
    fullName: '',
    email: '',
    password: '',
    cPassword: ''
  });
  const [isOtpSend, setIsOtpSend] = useState<boolean>(false);
  const [response, setResponse] = useState<IResponseMessage>({
    type: 'default',
    message: ''
  });

  const onSubmit = async (data: IRegisterProps) => {
    try {
      setLoading(true);
      const res: { data: string[] } = await fetcher(
        'POST',
        `${config.apiCommunicationBaseUrl}/otp/send`,
        { email: data.email, fullName: data.fullName }
      );

      toast.success(res?.data[0]);
      setTimeout(() => {
        setIsOtpSend(true);
      }, 1500);
      setUserInfo({ ...data });
    } catch (error) {
      if (error instanceof AxiosError)
        toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const authInfo = {
    onSubmit,
    loading,
    setLoading,
    isOtpSend,
    setIsOtpSend,
    response,
    setResponse,
    userInfo,
    setUserInfo
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
