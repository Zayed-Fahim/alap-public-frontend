import { Button } from "@/atoms";
import React from "react";

const AccountActivation = ({ email, handleActiveAccount }: any) => {
  return (
    <Button
      onClick={() => handleActiveAccount(email)}
      className="w-full mt-6 group h-12 px-6 bg-[#387DB2] hover:bg-opacity-90 text-white text-xl font-semibold rounded-full transition duration-300"
    >
      Activate Account
    </Button>
  );
};

export default AccountActivation;
