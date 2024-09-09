"use client";
import { Chats, Messages, Sidebar } from "@/organisms";
import React, { useState } from "react";

interface ITabProps {
  tabName: string;
  setTabName: (name: string) => void;
}

const UserDashboardTemplate: React.FC<ITabProps> = () => {
  const [tabName, setTabName] = useState<string>("Chats");

  return (
    <div className="flex flex-row">
      <Sidebar setTabName={setTabName} tabName={tabName} />
      <Chats tabName={tabName} />
      <Messages />
    </div>
  );
};

export default UserDashboardTemplate;
