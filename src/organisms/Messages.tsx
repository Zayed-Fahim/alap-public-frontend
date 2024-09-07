"use client";
import { Welcome } from "@/molecules";
import { ChatWindow } from "@/organisms";
import { useState } from "react";

const Messages = () => {
  const [receiver, setReceiver] = useState<boolean>(false);

  return (
    <div className="w-[70%] bg-[#80C4E9] flex justify-center items-center text-center">
      {receiver ? <ChatWindow /> : <Welcome />}
    </div>
  );
};

export default Messages;
