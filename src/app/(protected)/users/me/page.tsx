"use client";
import UserDashboardTemplate from "@/templates/UserDashboardTemplate";
import { SessionProvider } from "next-auth/react";

const UserDashboard = () => {
  return (
    <SessionProvider>
      <UserDashboardTemplate />
    </SessionProvider>
  );
};

export default UserDashboard;
