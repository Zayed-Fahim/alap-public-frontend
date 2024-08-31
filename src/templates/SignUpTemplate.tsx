import { SignUpForm } from "@/organisms";

const SignUpTemplate = () => {
  return (
    <div className="h-screen flex">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpTemplate;
