"use client";
import { ChatContext } from "@/contexts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useMemo } from "react";

const Welcome = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { isClickedNewMessage } = useContext(ChatContext);

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/auth/login");
    }
  }, [session, status, router]);

  const userName = useMemo(() => {
    if (!session) return "";

    return session.user.userName
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");
  }, [session]);

  return (
    !isClickedNewMessage && (
      <div className="flex gap-3 flex-col">
        <h1 className="text-4xl font-semibold flex items-center">
          Welcome Back! {userName}
          <span className="ml-2 animate-wave text-3xl">✨</span>
        </h1>
        <p className="text-xl font-semibold">
          Click on any chat to start messaging!
        </p>
      </div>
    )
  );
};

export default Welcome;
