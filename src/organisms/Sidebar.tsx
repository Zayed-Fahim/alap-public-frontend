import React from "react";
import { UserProfile } from "@/organisms";
import { Button, Logo } from "@/atoms";
import { TbMessageCircleFilled } from "react-icons/tb";
import { AiFillMessage } from "react-icons/ai";
import { RiArchiveFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-[4%] h-screen bg-[#444444] bg-opacity-5 flex flex-col justify-between items-center">
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <Logo
            src="/logo/brand_logo.png"
            alt="alap brand logo"
            loading="lazy"
            width={40}
            height={40}
            title="Alap"
            className="py-3"
          />
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <Button
            className="py-2.5 px-4 hover:bg-black hover:bg-opacity-10 rounded-md"
            title="Chats"
          >
            <TbMessageCircleFilled className="w-6 h-6" />
          </Button>
          <Button
            className="py-2.5 px-4 hover:bg-black hover:bg-opacity-10 rounded-md"
            title="Requests"
          >
            <AiFillMessage className="w-6 h-6" />
          </Button>
          <Button
            className="py-2.5 px-4 hover:bg-black hover:bg-opacity-10 rounded-md"
            title="Archived"
          >
            <RiArchiveFill className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <UserProfile />
    </div>
  );
};

export default Sidebar;
