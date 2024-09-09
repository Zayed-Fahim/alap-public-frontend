import React from "react";

interface IMessageProps {
  message: any;
  type: "error" | "success";
}

const ConfirmationMessage: React.FC<IMessageProps> = ({ message, type }) => {
  const textColor = type === "error" ? "text-red-600" : "text-green-600";
  return <p className={`text-xs ${textColor}`}>{message}</p>;
};

export default ConfirmationMessage;
