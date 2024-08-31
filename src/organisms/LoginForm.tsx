import { FormField, SocialLoginButton } from "@/molecules";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo/brand_logo.png";
import { Button } from "@/atoms";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="p-6 sm:p-16">
      <div className="space-y-4">
        <Image
          src={logo}
          loading="lazy"
          width={100}
          height={100}
          alt="brand-logo"
        />
        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
          Welcome to Alap.
        </h2>
        <h2 className="mb-8 text-xl text-cyan-900">
          Sign in here with your credentials.
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
      <form className="flex flex-col gap-3">
        <FormField
          label="Email Address"
          type="email"
          name="email"
          id="email"
          placeholder="example@example.com"
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <Button className="w-full mt-6 group h-12 px-6 bg-[#387DB2] hover:bg-opacity-90 text-white text-xl font-semibold rounded-full transition duration-300">
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
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
