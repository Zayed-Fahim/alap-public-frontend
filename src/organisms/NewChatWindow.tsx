"use client";
import { Button, Input, Logo } from "@/atoms";
import { ChatContext } from "@/contexts";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import io from "socket.io-client";

const socket = io("http://localhost:3002");

const NewChatWindow = () => {
  const { data: session } = useSession();
  const { receiver } = useContext(ChatContext);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const userNameParts = receiver?.userName
    ?.split("_")
    .map(
      (part: string) =>
        part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    );

  const userName = userNameParts?.join(" ");

  useEffect(() => {
    socket.on("receive_message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);
  const payload = {
    senderId: session?.user?.id,
    receiverId: receiver?._id,
    content: newMessage,
  };
  const sendMessage = () => {
    if (newMessage) {
      socket.emit("send_message", payload);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="w-full h-full bg-[#80C4E9] flex flex-col justify-between">
      <div className="h-[10%] border-b-[0.5px] border-white border-opacity-25 flex flex-col justify-end py-2 px-3">
        <div className="w-full flex justify-between items-end">
          <div className="flex items-center justify-center w-auto gap-2">
            <Logo
              src={receiver?.avatar || "/logo/user_logo.png"}
              alt={receiver?.userName || "user_logo"}
              width={40}
              height={40}
              className="w-8 h-8"
            />
            <div className="flex items-start flex-col">
              <h1 className=" text-xl font-semibold text-black">{userName}</h1>
              {receiver?.activeStatus && (
                <p className="text-sm text-[#444444] text-opacity-80">
                  {receiver?.activeStatus}
                </p>
              )}
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
            src={receiver?.avatar || "/logo/user_logo.png"}
            alt={receiver?.userName || "user_logo"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full"
          />

          <p className="text-xl font-bold text-black">{userName}</p>
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
              <IoSend className="w-6 h-6 fill-white" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewChatWindow;
