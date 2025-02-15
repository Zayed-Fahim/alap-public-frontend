export interface IRegisterProps {
  fullName: string;
  password: string;
  cPassword: string;
  email: string;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface IAuthUser {
  _id: string;
  fullName: string;
  userName: string;
  email: string;
  isEmailVerified: boolean;
}
