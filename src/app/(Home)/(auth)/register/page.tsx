import { RegisterForm, SocialAuthentication } from '@/components/features/home';
import { HeadingTitle } from '@/components/ui';
import Image from 'next/image';

const Register = () => {
  return (
    <div className="container mx-auto max-w-[960px] py-5">
      <div className="flex justify-center items-center max-h-[550px] p-4">
        <Image
          src="/images/home/auth/register.png"
          alt="Banner Image"
          width={550}
          height={550}
          className="object-cover bg-center bg-no-repeat px-4"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <HeadingTitle
          title="Sign up for Alap"
          titleColor="text-[#1C160C]"
          titleSize="md"
          className="pt-5 pb-2 w-full"
        />
        <RegisterForm />

        <SocialAuthentication />
      </div>
    </div>
  );
};

export default Register;
