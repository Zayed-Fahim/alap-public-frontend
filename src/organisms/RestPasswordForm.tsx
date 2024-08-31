import { Button } from "@/atoms";
import { FormField } from "@/molecules";

const RestPasswordForm = () => {
  return (
    <form className="space-y-4">
      <FormField
        label="New Password"
        type="password"
        name="password"
        id="password"
        placeholder="Enter new password"
      />
      <FormField
        label="Confirm New Password"
        type="password"
        name="confirmNewPassword"
        id="confirmNewPassword"
        placeholder="Confirm new password"
      />

      <Button
        className="w-full mt-6 group h-12 px-6 bg-[#387DB2] hover:bg-opacity-90 text-white font-semibold rounded-full transition duration-300"
        type="submit"
      >
        Reset Password
      </Button>
    </form>
  );
};

export default RestPasswordForm;
