import { LoginForm } from '@/components/features/home';
import { Button, HeadingTitle } from '@/components/ui';
import { Apple, FacebookColored, Google } from '@/constants';
import Image from 'next/image';

const Login = () => {
  return (
    <div className="container mx-auto max-w-[960px] py-5">
      <div className="flex justify-center max-w-[960px] max-h-[242px] p-4">
        <Image
          src="/images/home/auth/login.png"
          alt="Banner Image"
          width={960}
          height={242}
          className="rounded-xl object-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <HeadingTitle
          title="Welcome back"
          titleColor="text-[#1C160C]"
          titleSize="md"
          className="pt-5 pb-2 w-full"
        />
        <LoginForm />

        <div className="flex justify-center items-center gap-x-3 py-4">
          <Button variant="secondary" className="h-10">
            <div className="flex justify-center items-center gap-2">
              <Google className="size-4" />
              <span>Google</span>
            </div>
          </Button>
          <Button variant="secondary" className="h-10">
            <div className="flex justify-center items-center gap-2">
              <FacebookColored className="size-4" />
              <span>Facebook</span>
            </div>
          </Button>
          <Button variant="secondary" className="h-10">
            <div className="flex justify-center items-center gap-2">
              <Apple className="size-4" />
              <span>Apple</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
