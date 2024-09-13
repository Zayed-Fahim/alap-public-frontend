"use client";
import { Button, Logo } from "@/atoms";
import { ChatContext } from "@/contexts";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const ChatList = () => {
  const { data: session } = useSession();
  const { conversationId } = useParams();
  const router = useRouter();
  const { chatList, setChatList, handleChatList } = useContext(ChatContext);

  useEffect(() => {
    if (session?.user?.id) {
      handleChatList(session.user.id).then((data: any) => {
        if (data) {
          setChatList(data);
        }
      });
    }
  }, [session?.user?.id, handleChatList, setChatList]);

  return (
    <div className="flex flex-col w-full items-center">
      {chatList?.length > 0 ? (
        chatList.map((conversation: any, index: number) => {
          const isActive = conversation?.conversationId === conversationId;
          const currentUserId = session?.user?.id;
          const isCurrentUserSender =
            conversation.message.senderId === currentUserId;

          let senderName;
          if (isCurrentUserSender) {
            senderName = "You";
          } else {
            const senderObject =
              conversation.message.senderId === conversation.sender._id
                ? conversation.sender
                : conversation.receiver;

            senderName =
              senderObject.userName.split("_")[0].charAt(0).toUpperCase() +
              senderObject.userName.split("_")[0].slice(1).toLowerCase();
          }

          const messageContent =
            conversation.message.content.length > 25
              ? conversation.message.content.slice(0, 25) + "..."
              : conversation.message.content;

          return (
            <div
              onClick={() =>
                router.push(`/messages/${conversation?.conversationId}`)
              }
              key={index}
              className={`w-full flex justify-between items-center py-2.5 px-3 cursor-pointer ${
                isActive ? "bg-black bg-opacity-5" : ""
              }`}
            >
              <div className="flex items-center w-auto gap-3.5">
                <Logo
                  src={conversation.receiver.avatar || "/logo/user_logo.png"}
                  alt="receiver logo"
                  width={60}
                  height={60}
                  className="w-14 h-14"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl font-semibold text-black">
                    {conversation.receiver._id === session?.user?.id
                      ? conversation.sender.userName
                          .split("_")
                          .map(
                            (part: string) =>
                              part.charAt(0).toUpperCase() +
                              part.slice(1).toLowerCase()
                          )
                          .join(" ")
                      : conversation.receiver.userName
                          .split("_")
                          .map(
                            (part: string) =>
                              part.charAt(0).toUpperCase() +
                              part.slice(1).toLowerCase()
                          )
                          .join(" ")}
                  </h1>
                  <div className="text-sm font-semibold text-[#444444] text-opacity-80">
                    {`${senderName}: ${messageContent}`}{" "}
                    <span>
                      .{" "}
                      {new Date(conversation.message.time).toLocaleTimeString(
                        [],
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
              {/* <div>
                {conversation.message.status ? (
                  <Logo
                    src={conversation.receiver.avatar || "/logo/user_logo.png"}
                    alt="receiver-logo"
                    title={conversation.message.status && "Seen"}
                    width={16}
                    height={16}
                    className="h-4 w-4 rounded-full cursor-default"
                  />
                ) : (
                  <Button title="Delivered" className="cursor-default">
                    <FaCircleCheck className="fill-gray-400 h-4 w-4" />
                  </Button>
                )}
              </div> */}
            </div>
          );
        })
      ) : (
        <p>No Chat Found!</p>
      )}
    </div>
  );
};

export default ChatList;
