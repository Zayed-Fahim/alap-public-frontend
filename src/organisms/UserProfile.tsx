import { Button, Logo } from "@/atoms";
import { useSession } from "next-auth/react";
import React from "react";

const UserProfile = () => {
  const { data: session } = useSession();
  const userNameParts = session?.user?.userName
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());

  const userName = userNameParts?.join(" ");

  return (
    <Button className="w-full flex justify-center items-center py-2">
      <Logo
        src="/logo/user_logo.png"
        alt="User logo"
        title={userName}
        width={80}
        height={80}
        loading="lazy"
        className="w-[45px] rounded-full border border-black border-opacity-15"
      />
    </Button>
  );
};

export default UserProfile;
