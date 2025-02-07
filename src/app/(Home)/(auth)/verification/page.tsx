'use client';
import { OtpForm } from '@/components/features/home';
import { Button, HeadingTitle, Text } from '@/components/ui';

const Verification: React.FC = () => {
  return (
    <div className="h-auto lg:h-[63vh] flex justify-center">
      <div className="flex flex-col py-4 flex-1 max-w-[418px]">
        <HeadingTitle
          subtitle="Enter the 6-digit code we sent to your email address."
          title="Verify your identity"
          subtitleColor="text-primary-text"
          titleColor="text-primary-text"
          subtitleSize="md"
          titleSize="lg"
          align="left"
          className="w-full"
        />
        <OtpForm />
        <div className="flex py-3 justify-between items-center">
          <Text
            text="Resend code"
            className="text-secondary-text text-sm font-normal leading-normal pb-3 pt-1 underline cursor-pointer"
          />

          <Button variant="primary" className="h-10">
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
