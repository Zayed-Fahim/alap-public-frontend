"use client";
import { Button, GlobalLoader } from "@/atoms";
import { AccountActivation } from "@/organisms";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AccountActivationTemplate = ({ email, error, isValid }: any) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resendMessage, setResendMessage] = useState("");
  const [activationMessage, setActivationMessage] = useState("");

  const handleResendMail = async (email: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/resend-account-activation-link",
        { email }
      );
      setResendMessage(response?.data?.data);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.log({ error });
    }
  };
  const handleActiveAccount = async (email: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/activate-user-account",
        { email }
      );
      setActivationMessage(response?.data?.data);
      setIsLoading(false);
      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
    } catch (error: any) {
      setIsLoading;
      console.log({ error });
    }
  };
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white rounded-xl shadow-lg">
        {isValid ? (
          <div className="p-6 sm:p-7">
            <div className="text-center">
              <h1 className="text-xl font-bold text-cyan-900">
                {activationMessage
                  ? activationMessage
                  : "Activate your account."}
              </h1>
            </div>
            <div className="mt-5">
              {!activationMessage && (
                <AccountActivation
                  email={email}
                  handleActiveAccount={handleActiveAccount}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 justify-center items-center p-6">
            <p className="text-center text-xl font-semibold text-red-500">
              {resendMessage ? (
                <p className="text-center text-sm font-semibold text-gray-500">
                  {resendMessage}
                </p>
              ) : (
                error
              )}
            </p>
            {error && error[0] !== "Unauthorized Access!" && (
              <div className="w-full flex flex-col">
                {!resendMessage && (
                  <Button
                    onClick={() => handleResendMail(email)}
                    className="mt-6 group h-12 px-6 bg-[#387DB2] hover:bg-opacity-90 text-white font-semibold rounded-full transition duration-300"
                  >
                    {!isLoading ? "Resend Mail" : <GlobalLoader />}
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default AccountActivationTemplate;
