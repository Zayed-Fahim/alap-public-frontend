import { ForgotPasswordForm } from '@/components/features/home';
import { HeadingTitle, Text } from '@/components/ui';

const ForgotPassword: React.FC = () => {
  return (
    <div className="container mx-auto max-w-[960px] h-[63vh] py-5">
      <div className="flex flex-col py-5 flex-1">
        <HeadingTitle
          subtitle="Enter the email address you used to sign up and we'll send you a
          link to reset your password."
          title="Forgot your password?"
          subtitleColor="text-primary-text"
          titleColor="text-primary-text"
          subtitleSize="md"
          titleSize="lg"
          align="left"
          className="w-full"
        />
        <ForgotPasswordForm />
        <Text
          text="Note: You must have access to the email address provided to
          reset your password."
          className="text-secondary-text text-sm font-normal leading-normal pb-3 pt-1 px-4"
        ></Text>
      </div>
    </div>
  );
};

export default ForgotPassword;
