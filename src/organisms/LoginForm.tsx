"use client";

import { Button, ConfirmationMessage, Logo } from "@/atoms";
import { FormField, SocialLoginButton } from "@/molecules";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

interface ILogin {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.error) {
      setError("Incorrect Email or Password!");
      return;
    }
    router.push("/users/@me");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="p-6 sm:p-16">
      <div className="space-y-4">
        <Logo
          src="/logo/brand_logo.png"
          loading="lazy"
          width={100}
          height={100}
          alt="Alap brand logo"
        />
        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
          Welcome to Alap.
        </h2>
        <h2 className="mb-8 text-xl text-cyan-900">
          Sign in with your credentials.
        </h2>
      </div>

      <div className="mt-16 grid space-y-4">
        <SocialLoginButton
          logoSrc="https://tailus.io/sources/blocks/social/preview/images/google.svg"
          text="Continue with Google"
        />
      </div>

      <div className="flex justify-center items-center w-full py-5">
        <hr className="w-1/2" />
        <p className="text-xl px-4">OR</p>
        <hr className="w-1/2" />
      </div>

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
        <>
          <FormField
            label="Email Address"
            type="email"
            name="email"
            id="email"
            required={true}
            placeholder="example@example.com"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="w-full h-12 px-6 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-full transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          />
        </>
        <div className="relative">
          <FormField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required={true}
            placeholder="Your Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              setError("");
            }}
            className="w-full h-12 px-6 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-full transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          />
          <Button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-5 top-1/2 flex justify-center items-center"
          >
            {showPassword ? (
              <VscEyeClosed className="w-6 h-6 text-gray-500" />
            ) : (
              <VscEye className="w-6 h-6 text-gray-500" />
            )}
          </Button>
        </div>
        {error && <ConfirmationMessage type="error" message={error} />}
        <Button
          type="submit"
          className="w-full mt-6 group h-12 px-6 bg-[#387DB2] hover:bg-opacity-90 text-white text-xl font-semibold rounded-full transition duration-300"
        >
          Sign in
        </Button>
      </form>

      <div className="mt-4 text-center">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-700">
          New to Alap?{" "}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
