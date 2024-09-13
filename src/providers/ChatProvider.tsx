import ChatContext from "@/contexts/Chat";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ReactNode, useEffect, useState } from "react";

interface IChatProvider {
  children?: ReactNode;
}

const ChatProvider: React.FC<IChatProvider> = ({ children }) => {
  const [receiver, setReceiver] = useState({});
  const [isClickedNewMessage, setIsClickedNewMessage] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const fetchReceiver = async () => {
      const rId = getCookie("rId");

      if (!rId) return;

      try {
        const response = await axios.get(
          `http://localhost:3002/communication/user-details/${rId}`
        );
        setReceiver(response?.data?.data);
      } catch (error) {
        console.error("Error fetching receiver details:", error);
      }
    };

    fetchReceiver();
  }, []);

  const handleChatUsers = async (id: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/communication/users",
        { id }
      );
      return response?.data?.data || [];
    } catch (error) {
      console.error("Error fetching chat users:", error);
      return [];
    }
  };

  const handleChatList = async (id: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/conversation/all",
        { id }
      );
      const chatData = response.data.data;
      setChatList(chatData);
      return chatData;
    } catch (error) {
      console.error("Error fetching chat list:", error);
    }
  };

  const handleConversation = async (id: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/conversation/${id}`
      );
      const conversationData = response.data.data;
      setConversation(conversationData);
      return conversationData;
    } catch (error) {
      console.error("Error fetching conversation:", error);
    }
  };

  const chatInfo = {
    chatList,
    receiver,
    setChatList,
    setReceiver,
    conversation,
    handleChatList,
    handleChatUsers,
    handleConversation,
    isClickedNewMessage,
    setIsClickedNewMessage,
  };

  return (
    <ChatContext.Provider value={chatInfo}>{children}</ChatContext.Provider>
  );
};

export default ChatProvider;
