'use client';
import { RegisterForm, SocialAuthentication } from '@/components/features/home';
import { HeadingTitle, ImageSkeleton } from '@/components/ui';
import { useState } from 'react';

const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <div className="flex justify-center items-center max-h-[550px] p-4">
        <ImageSkeleton
          src="/images/home/auth/register.png"
          alt="Banner Image"
          width={550}
          height={550}
          className="object-cover bg-center bg-no-repeat px-4"
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          imageClassName="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <HeadingTitle
          title="Sign up for Alap"
          titleColor="text-primary-text"
          titleSize="md"
          className="pt-5 pb-2 w-full"
        />
        <RegisterForm />

        <SocialAuthentication />
      </div>
    </>
  );
};

export default Register;
