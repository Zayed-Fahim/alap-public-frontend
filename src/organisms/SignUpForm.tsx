"use client";

import { Button, Logo, ConfirmationMessage } from "@/atoms";
import { FormField } from "@/molecules";
import { nameRegex, passwordRegex } from "@/utils/validation";
import axios from "axios";
import debounce from "lodash.debounce";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name: any;
  email: any;
  password: any;
  confirmPassword: any;
}

const SignUpForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isSubmitted) {
      setFormState({ name: "", email: "", password: "", confirmPassword: "" });
      const timer = setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, router]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!nameRegex.test(formState.name)) {
      newErrors.name = (
        <>
          <span>&times; Username must start with a letter.</span>
          <br />
          <span>&times; Only contain letters, numbers, and underscores.</span>
        </>
      );
      isValid = false;
    }

    if (!passwordRegex.test(formState.password)) {
      newErrors.password = (
        <>
          <span>&times; Password must be 6-12 characters long.</span>
          <br />
          <span>&times; Contain at least one uppercase letter.</span>
          <br />
          <span>&times; Contain at least one number.</span>
          <br />
          <span>&times; Contain at least one special character.</span>
        </>
      );
      isValid = false;
    }

    if (formState.password !== formState.confirmPassword) {
      newErrors.confirmPassword = (
        <>
          <span>&times; Passwords do not match.</span>
        </>
      );
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCheckMail = debounce(async () => {
    try {
      await axios.post("http://localhost:3001/auth/check-user-mail", {
        email: formState.email,
      });
      setErrors((prev) => ({ ...prev, email: "" }));
    } catch (error: any) {
      setErrors((prev) => ({
        ...prev,
        email: <>&times; {error?.response?.data?.message[0]}</>,
      }));
    }
  }, 500);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/create-user",
        {
          email: formState.email,
          userName: formState.name,
          password: formState.password,
          cPassword: formState.confirmPassword,
        }
      );
      if (response?.data?.success) {
        setSuccessMessage(response?.data?.data);
        setIsSubmitted(true);
      }
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message[0]);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="p-6 sm:p-16">
      <div className="space-y-4">
        <Logo
          src="/logo/brand_logo.png"
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
      <form onSubmit={handleFormSubmit} className="mt-10 flex flex-col gap-3">
        <>
          <FormField
            label="User Name"
            type="text"
            name="name"
            id="name"
            required={true}
            placeholder="John_Doe"
            onChange={handleInputChange}
            className="w-full h-12 px-6 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-full transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          />
          {errors.name && (
            <ConfirmationMessage type="error" message={errors.name} />
          )}
        </>
        <>
          <FormField
            label="Email Address"
            type="email"
            name="email"
            id="email"
            required={true}
            placeholder="example@example.com"
            onChange={handleInputChange}
            onBlur={handleCheckMail}
            className="w-full h-12 px-6 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-full transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          />
          {errors.email && (
            <ConfirmationMessage type="error" message={errors.email} />
          )}
        </>

        <div className="relative">
          <FormField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required={true}
            placeholder="Your Password"
            onChange={handleInputChange}
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
          {errors.password && (
            <ConfirmationMessage type="error" message={errors?.password} />
          )}
        </div>

        <div className="relative">
          <FormField
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            required={true}
            placeholder="Confirm Your Password"
            onChange={handleInputChange}
            className="relative w-full h-12 px-6 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-full transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          />
          <Button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-5 top-1/2 flex justify-center items-center"
          >
            {showConfirmPassword ? (
              <VscEyeClosed className="w-6 h-6 text-gray-500" />
            ) : (
              <VscEye className="w-6 h-6 text-gray-500" />
            )}
          </Button>
          {errors.confirmPassword && (
            <ConfirmationMessage
              type="error"
              message={errors?.confirmPassword}
            />
          )}
        </div>

        <>
          {errorMessage && (
            <ConfirmationMessage type="error" message={errorMessage} />
          )}
          {successMessage && (
            <ConfirmationMessage type="success" message={successMessage} />
          )}
          <Button
            type="submit"
            className="w-full mt-6 group h-12 px-6 bg-[#387DB2] hover:bg-opacity-90 text-white text-xl font-semibold rounded-full transition duration-300"
          >
            Sign Up
          </Button>
        </>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-700">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
