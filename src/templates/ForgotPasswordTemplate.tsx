import { ForgotPasswordForm } from "@/organisms";
import Link from "next/link";
import React from "react";

const ForgotPasswordTemplate = () => {
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white rounded-xl shadow-lg">
        <div className="p-6 sm:p-7">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-cyan-900">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                className="text-blue-600 decoration-2 hover:underline"
                href="/auth/login"
              >
                Login
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordTemplate;
