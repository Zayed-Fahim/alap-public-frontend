"use client";
import { ChatWindow } from "@/organisms";
import { ChatProvider, SocketProvider } from "@/providers";
import { SessionProvider } from "next-auth/react";

const User = () => {
  return (
    <div className="flex-1 h-screen bg-[#80C4E9] flex justify-center items-center text-center">
      <SessionProvider>
        <SocketProvider>
          <ChatProvider>
            <ChatWindow />
          </ChatProvider>
        </SocketProvider>
      </SessionProvider>
    </div>
  );
};

export default User;
