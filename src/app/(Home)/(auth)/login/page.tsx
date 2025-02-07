import { LoginForm, SocialAuthentication } from '@/components/features/home';
import { HeadingTitle } from '@/components/ui';
import Image from 'next/image';

const Login = () => {
  return (
    <>
      <div className="flex justify-center max-h-[450px] p-4">
        <Image
          src="/images/home/auth/login.png"
          alt="Banner Image"
          width={550}
          height={450}
          className="rounded-xl object-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <HeadingTitle
          title="Welcome back"
          titleColor="text-primary-text"
          titleSize="md"
          className="pt-5 pb-2 w-full"
        />
        <LoginForm />

        <SocialAuthentication />
      </div>
    </>
  );
};

export default Login;
