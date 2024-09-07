import React from "react";

interface MessageProps {
  message: any;
  type: "error" | "success";
}

const Message: React.FC<MessageProps> = ({ message, type }) => {
  const textColor = type === "error" ? "text-red-600" : "text-green-600";
  return <p className={`text-xs ${textColor}`}>{message}</p>;
};

export default Message;
