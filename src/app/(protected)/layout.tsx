"use client";
import { Chats, Sidebar } from "@/organisms";
import { ChatProvider, CommonProvider } from "@/providers";
import "../globals.css";
import { SessionProvider } from "next-auth/react";

const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main className="flex w-full h-screen">
          <CommonProvider>
            <>
              <SessionProvider>
                <Sidebar />
                <ChatProvider>
                  <Chats />
                  {children}
                </ChatProvider>
              </SessionProvider>
            </>
          </CommonProvider>
        </main>
      </body>
    </html>
  );
};
export default UserDashboardLayout;
