import { Button, Logo } from "@/atoms";
import React from "react";
import { IReceiver } from "../organisms/Chats";
import { FaCircleCheck } from "react-icons/fa6";

const ArchivedList = ({ receiver }: { receiver: IReceiver }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center py-2.5 px-3 bg-black bg-opacity-5 cursor-pointer">
        <div className="flex items-center w-auto gap-3.5">
          <Logo
            src={receiver?.avatar}
            alt="receiver logo"
            width={60}
            height={60}
            className="w-14 h-14"
          />
          <div className="flex flex-col gap-1">
            <h1 className=" text-xl font-semibold text-black">
              {receiver?.userName}
            </h1>
            <div className="text-sm font-semibold text-[#444444] text-opacity-80">
              You: {receiver?.lastMessage} .{" "}
              <span>{receiver?.lastSendMessage}</span>
            </div>
          </div>
        </div>
        <div>
          {receiver?.messageStatus === "Seen" ? (
            <Logo
              src={receiver?.avatar}
              alt="receiver-logo"
              width={16}
              height={16}
              className="h-4 w-4 rounded-full cursor-default"
            />
          ) : (
            <Button title={receiver?.messageStatus} className="cursor-default">
              <FaCircleCheck className="fill-gray-400 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchivedList;
