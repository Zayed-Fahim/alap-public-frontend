import { HeadingTitle } from '@/components/ui';
import { GetStartedForm } from '@/components/features/home';

export const GetStarted: React.FC = () => {
  return (
    <div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20">
      <HeadingTitle
        title="Get started with Alap"
        subtitle="Alap is a powerful tool for real-time communication. Here are a few
          ways to get started."
        subtitleColor="text-primary-text"
        titleColor="text-primary-text"
        subtitleSize="md"
        titleSize="lg"
      />

      <GetStartedForm />
    </div>
  );
};
