import { Button, Logo } from "@/atoms";
import React from "react";

const UserProfile = () => {
  // Demo session
  const session = {
    user: {
      username: "Zayed_Fahim",
      email: "zayed.zaynax02@gmail.com",
    },
    isAuthenticated: true,
    token: "1234567890",
    expires: new Date(Date.now() + 3600000),
  };

  return (
    <Button className="w-full flex justify-center items-center py-2">
      <Logo
        src="/logo/user_logo.png"
        alt="User logo"
        title={session.user.username}
        width={80}
        height={80}
        loading="lazy"
        className="w-[45px] rounded-full border border-black border-opacity-15"
      />
    </Button>
  );
};

export default UserProfile;
