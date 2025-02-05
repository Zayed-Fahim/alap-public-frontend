import { Button, HeadingTitle } from '@/components/ui';

export const Hero: React.FC = () => {
  return (
    <div className="p-4 w-full">
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/hero.png")',
          backgroundSize: 'cover'
        }}
      >
        <HeadingTitle
          title="Welcome to Alap"
          subtitle="Real-time communication for modern teams"
          className="pt-52"
        />

        <Button label="Get started" variant="primary" />
      </div>
    </div>
  );
};
