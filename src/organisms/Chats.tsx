"use client";
import { Button, Input } from "@/atoms";
import { ArchivedList, ChatList, RequestList } from "@/molecules";
import React, { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";

export interface IReceiver {
  userName: string;
  avatar: string;
  lastSendMessage: string;
  messageStatus: string;
  lastMessage: string;
  isActive: boolean;
}

interface ITabProps {
  tabName: string;
}

const Chats: React.FC<ITabProps> = ({ tabName }) => {
  const [receiver, setReceiver] = useState<IReceiver>({
    userName: "Sadik_Hasan",
    avatar: "/logo/user_logo.png",
    lastSendMessage: "10:35PM",
    messageStatus: "Seen",
    lastMessage: "How are you Sadik?",
    isActive: true,
  });

  return (
    <div className="w-[26%] text-black bg-white border-r-[1px] border-gray-300 flex flex-col gap">
      <div className="flex flex-col gap-5 px-3 pt-12 pb-4 top-0 sticky">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {tabName === "Requests" ? "Message Requests" : tabName}
          </h1>
          {tabName === "Chats" && (
            <Button
              className="w-9 h-9 hover:bg-black hover:bg-opacity-10 rounded-full flex justify-center items-center"
              title="Compose message"
            >
              <LiaEditSolid className="w-6 h-6" />
            </Button>
          )}
        </div>
        <Input
          placeholder="Search"
          id="search"
          name="search"
          type="text"
          className="w-full h-10 px-3 text-sm text-black placeholder-black bg-[#444444] bg-opacity-10 rounded-sm transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        />
      </div>

      {tabName === "Chats" && <ChatList receiver={receiver} />}
      {tabName === "Requests" && <RequestList receiver={receiver} />}
      {tabName === "Archived" && <ArchivedList receiver={receiver} />}
    </div>
  );
};

export default Chats;
