"use client";
import { Button, Input, Logo } from "@/atoms";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import io from "socket.io-client";

const socket = io("http://localhost:3002");

const ChatWindow = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(() => {
    socket.on("receive_message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (newMessage) {
      socket.emit("send_message", { sender: "User", message: newMessage });
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="w-full h-full bg-[#80C4E9] flex flex-col justify-between">
      <div className="h-[9%] border-b-[0.5px] border-white border-opacity-25 flex flex-col justify-end py-2 px-3">
        <div className="w-full flex justify-between items-end">
          <div className="flex items-start w-auto gap-2">
            <Logo
              src="/logo/user_logo.png"
              alt="receiver logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="flex items-start flex-col">
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
      <div className="h-[calc(100%-16%)] w-full flex flex-col gap-3 text-black overflow-y-auto">
        <div className="flex flex-col items-center gap-3 py-10">
          <Logo
            src="/logo/user_logo.png"
            alt="sender logo"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full"
          />

          <p className="text-xl font-bold text-black">Sadik Hasan</p>
        </div>
        <div className="flex flex-col gap-1 px-3 justify-between items-start">
          {messages.map((message: string, i) => (
            <p className="bg-white px-3 py-2 rounded-xl" key={i}>
              {message}
            </p>
          ))}
        </div>
      </div>
      <div className="h-[7%] py-3 px-3">
        <div className="flex gap-5 items-center">
          <Input
            id="message"
            name="message"
            type="test"
            value={newMessage}
            placeholder="Type a message..."
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full h-10 px-3 placeholder-gray-500 text-black bg-white rounded-3xl transition duration-300 focus:outline-none"
          />
          {newMessage && (
            <Button
              type="button"
              title="Send"
              onClick={sendMessage}
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
