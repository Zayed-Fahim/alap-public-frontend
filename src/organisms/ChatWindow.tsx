"use client";
import React from "react";
import { Button, InputField, Logo } from "@/atoms";
import { ChangeEvent, useState } from "react";
import { IoSend } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const ChatWindow = () => {
  const [messageText, setMessageText] = useState<string>("");

  const handleSendMessage = () => {
    // Send the message to the server using the `sendMessage` function
    // Example: sendMessage(messageText);
    setMessageText("");
  };
  return (
    <div className="w-full h-full bg-[#80C4E9] flex flex-col justify-between">
      <div className="h-[9%] border-b-[0.5px] border-white border-opacity-25 flex flex-col justify-end py-2 px-3">
        <div className="w-full flex justify-between items-end">
          <div className="flex items-center w-auto gap-2">
            <Logo
              src="/logo/user_logo.png"
              alt="receiver logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h1 className=" text-xl font-semibold text-black">Sadik Hasan</h1>
              <p className="text-sm font-semibold text-[#444444] text-opacity-80">
                Active now
              </p>
            </div>
          </div>
          <div className="flex gap-5 justify-end">
            <Button type="button" className="" title="Message Search">
              <IoIosSearch className="w-6 h-6" />
            </Button>
            <Button
              type="button"
              className="w-9 h-9 flex justify-center items-center hover:bg-black hover:bg-opacity-10 rounded-full"
              title="Chat Options"
            >
              <BsThreeDots className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[calc(100%-16%)] flex flex-col gap-3 justify-center items-center text-black">
        here user chat history showing in next development
      </div>
      <div className="h-[7%] py-3 px-3">
        <div className="flex gap-5 items-center">
          <InputField
            id="message"
            name="message"
            type="test"
            placeholder="Type a message..."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMessageText(e.target.value)
            }
            className="w-full h-10 px-3 placeholder-gray-500 text-black bg-white rounded-3xl transition duration-300 focus:outline-none"
          />
          {messageText && (
            <Button
              type="button"
              title="Send"
              onClick={() => handleSendMessage}
              className="flex justify-center items-center transition duration-300"
            >
              <IoSend className="w-6 h-6" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
