'use client';
import { OtpForm } from '@/components/features/home';
import { Button, HeadingTitle } from '@/components/ui';
import { Back } from '@/constants';
import { AuthContext } from '@/contexts';
import { maskEmail } from '@/lib/utils';
import { useContext } from 'react';

export const Verification: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="h-auto lg:h-[63vh] flex flex-col justify-start items-center">
      <div className="py-4">
        <Button
          className="h-7 rounded-md hover:bg-secondary px-3"
          onClick={() => authContext!.setIsOtpSend(false)}
        >
          <div className="flex items-center text-sm font-semibold justify-center gap-x-2">
            <Back className="h-3 w-3" />
            Back
          </div>
        </Button>

        <div className="flex py-3 flex-col max-w-[396px]">
          <HeadingTitle
            subtitle={`Enter the 6-digit verification code sent to your email ${maskEmail(authContext!.userInfo.email)}, valid for 10 minutes. If you haven't received it, try to retrieve the code again.`}
            title="Verify your identity"
            subtitleColor="text-secondary-text"
            titleColor="text-primary-text"
            subtitleSize="md"
            titleSize="lg"
            align="left"
            className="w-full"
          />
          <OtpForm />
        </div>
      </div>
    </div>
  );
};
