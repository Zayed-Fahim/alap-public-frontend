import { IResponseMessage } from '@/components/ui';
import { IRegisterProps } from '@/types';
import { createContext, Dispatch, SetStateAction } from 'react';

type IAuthContextProps = {
  onSubmit: (data: IRegisterProps) => Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  isOtpSend: boolean;
  setIsOtpSend: Dispatch<SetStateAction<boolean>>;
  response: IResponseMessage;
  setResponse: Dispatch<SetStateAction<IResponseMessage>>;
  userInfo: IRegisterProps;
  setUserInfo: Dispatch<SetStateAction<IRegisterProps>>;
};

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);
