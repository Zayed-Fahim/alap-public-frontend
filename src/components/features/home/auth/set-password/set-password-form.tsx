import { Button, Input, Label, Text } from '@/components/ui';

export const SetPasswordForm: React.FC = () => {
  return (
    <form className="w-full max-w-[550px]">
      <div className="flex items-end gap-4 py-3">
        <Label className="flex flex-col w-full">
          <Text text="New Password" className="pb-1 font-medium" />
          <Input
            id="new-password"
            name="new-password"
            type="password"
            placeholder="Enter your new password"
            className="w-full h-12"
          />
        </Label>
      </div>
      <div className="flex items-end gap-4 py-3">
        <Label className="flex flex-col w-full">
          <Text text="Confirm New Password" className="pb-1 font-medium" />
          <Input
            id="confirm-new-password"
            type="password"
            name="confirm-new-password"
            placeholder="Enter confirm new password"
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
