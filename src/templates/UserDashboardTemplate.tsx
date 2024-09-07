import { Chats, Messages, Sidebar } from "@/organisms";

const UserDashboardTemplate = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Chats />
      <Messages />
    </div>
  );
};

export default UserDashboardTemplate;
