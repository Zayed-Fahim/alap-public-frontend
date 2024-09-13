"use client";
import { Button, Input } from "@/atoms";
import { ChatContext, CommonContext } from "@/contexts";
import { ArchivedList, ChatList, RequestList } from "@/molecules";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { setCookie } from "cookies-next";

export interface IChatUser {
  _id: string;
  userName: string;
  avatar: string;
}

const Chats = () => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { data: session } = useSession();
  const [chatUsers, setChatUsers] = useState<IChatUser[]>([]);
  const { tabName } = useContext(CommonContext);
  const { handleChatUsers, isClickedNewMessage, setIsClickedNewMessage } =
    useContext(ChatContext);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsClickedNewMessage(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef, setIsClickedNewMessage]);

  const allChatUsers = async () => {
    const response = await handleChatUsers(session?.user?.id);
    setChatUsers(response);
  };

  const handleNewMessageClick = () => {
    setIsClickedNewMessage((prev: boolean) => !prev);
    allChatUsers();
  };

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
              onClick={handleNewMessageClick}
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

      {tabName === "Chats" && <ChatList />}
      {tabName === "Requests" && <RequestList />}
      {tabName === "Archived" && <ArchivedList />}

      {isClickedNewMessage && (
        <div
          ref={popoverRef}
          className="relative top-[-25%] left-[102%] w-2/3 max-h-[25%] overflow-y-scroll no-scrollbar bg-white drop-shadow-xl rounded-lg p-4 z-50 border"
        >
          <div className="flex flex-col gap-3">
            {chatUsers?.map((user: IChatUser) => {
              const userNameParts = user?.userName
                .split("_")
                .map(
                  (part) =>
                    part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
                );

              const userName = userNameParts?.join(" ");

              return (
                <div
                  onClick={async () => {
                    setCookie("rId", user?._id);
                    setIsClickedNewMessage(false);
                    router.push(`/messages/new`);
                  }}
                  key={user?._id}
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
                >
                  <Image
                    width={60}
                    height={60}
                    src={user?.avatar || "/logo/user_logo.png"}
                    alt={user?.userName || "user_logo"}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{userName}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
