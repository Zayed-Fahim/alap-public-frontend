import { Button, Input, Label, Text } from '@/components/ui';

export const ForgotPasswordForm: React.FC = () => {
  return (
    <form className="w-full max-w-[550px]">
      <div className="flex  flex-wrap items-end gap-4 py-3">
        <Label className="flex flex-col w-full">
          <Text text="Email" className="pb-1 font-medium" />
          <Input
            id="email"
            type="email"
            placeholder="example@domain.com"
            className="w-full h-12"
          />
        </Label>
      </div>
      <div className="w-full h-12 my-3">
        <Button variant="primary" className="w-full h-full">
          Submit
        </Button>
      </div>
    </form>
  );
};
