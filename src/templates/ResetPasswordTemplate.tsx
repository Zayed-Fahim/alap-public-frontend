import { ResetPasswordForm } from "@/organisms";

const ResetPasswordTemplate = () => {
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white rounded-xl shadow-lg">
        <div className="p-6 sm:p-7">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-cyan-900">
              Reset your password
            </h1>
          </div>
          <div className="mt-5">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPasswordTemplate;
