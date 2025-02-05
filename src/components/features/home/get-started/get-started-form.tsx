import { Button, Input } from '@/components/ui';

export const GetStartedForm: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center">
      <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
          <Input placeholder="Enter your email" />
          <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#F4EFE6] pr-2">
            <Button label="View all guides" variant="primary" />
          </div>
        </div>
      </label>
    </div>
  );
};
