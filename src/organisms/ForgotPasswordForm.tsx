import { Button } from "@/atoms";
import { FormField } from "@/molecules";

const ForgotPasswordForm = () => {
  return (
    <form className="space-y-4">
      <FormField
        label="Email address"
        type="email"
        name="email"
        id="email"
        placeholder="example@example.com"
        className="w-full h-12 px-6 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-full transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      />
      <Button
        className="w-full mt-6 group h-12 px-6 bg-[#387DB2] hover:bg-opacity-90 text-white font-semibold rounded-full transition duration-300"
        type="submit"
      >
        Reset password
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
