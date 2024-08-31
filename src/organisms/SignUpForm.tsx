import { FormField } from "@/molecules";
import Image from "next/image";
import React from "react";
import { Button } from "@/atoms";
import logo from "../../public/logo/brand_logo.png";
import Link from "next/link";

const SignUpForm = () => {
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
          Join Alap today!
        </h2>
        <h2 className="mb-8 text-xl text-cyan-900">Sign up to get started.</h2>
      </div>
      <form className="mt-10 flex flex-col gap-3">
        <FormField
          label="Full Name"
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
        />
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
        <FormField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Your Password"
        />
        <Button className="w-full mt-6 group h-12 px-6 bg-[#387DB2] hover:bg-opacity-90 text-white text-xl font-semibold rounded-full transition duration-300">
          Sign Up
        </Button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-700">
          Already have and account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
