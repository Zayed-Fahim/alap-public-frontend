import { SetPasswordForm } from '@/components/features/home';
import { HeadingTitle, Text } from '@/components/ui';

const SetPassword: React.FC = () => {
  return (
    <div className="h-full lg:h-[63vh] flex justify-center">
      <div className="flex flex-col py-4">
        <HeadingTitle
          subtitle="Please enter your new password and confirm it."
          title="Set New Password"
          subtitleColor="text-primary-text"
          titleColor="text-primary-text"
          subtitleSize="md"
          titleSize="lg"
          align="left"
          className="w-full"
        />
        <SetPasswordForm />
        <Text
          text="Note: Password must be at least 8 characters long and
          contain a mix of letters, numbers, and special characters."
          className="text-secondary-text text-sm font-normal leading-normal pb-3 pt-1"
        />
      </div>
    </div>
  );
};

export default SetPassword;
