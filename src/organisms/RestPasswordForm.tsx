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
        className="w-full h-12 px-6 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-full transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      />
      <FormField
        label="Confirm New Password"
        type="password"
        name="confirmNewPassword"
        id="confirmNewPassword"
        placeholder="Confirm new password"
        className="w-full h-12 px-6 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-full transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
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
