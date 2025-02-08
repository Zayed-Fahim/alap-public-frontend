import { Button, Input } from '@/components/ui';

export const GetStartedForm: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full min-w-40 max-w-[550px]">
        <div className="flex w-full rounded-xl h-full">
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="rounded-r-none border-r-0 w-full h-14"
          />
          <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-secondary pr-3">
            <Button variant="primary" className="h-10">
              View all guides
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
