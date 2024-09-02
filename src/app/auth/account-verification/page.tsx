"use client";
import { AccountActivationTemplate } from "@/templates";
import axios from "axios";
import { useEffect, useState } from "react";

export interface ISearchParams {
  email: string;
  token: string;
  accounttype: string;
}

const AccountVerification = ({ searchParams }: any) => {
  const { email, token, accounttype } = searchParams as ISearchParams;
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Make the API call to verify the user
    verifyUser({ email, token, accounttype });
  }, [email, token, accounttype]); // Depend on query params

  const verifyUser = async ({ email, token, accounttype }: ISearchParams) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/account-activation-link-validation-check",
        {
          email,
          token,
          accounttype,
        }
      );
      if (response?.data?.success) setIsValid(true);
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message);
    }
  };
  return (
    <main>
      <AccountActivationTemplate
        email={email}
        error={errorMessage}
        isValid={isValid}
      />
    </main>
  );
};

export default AccountVerification;
