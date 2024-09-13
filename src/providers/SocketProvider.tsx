import SocketContext from "@/contexts/Socket";
import { ReactNode } from "react";

interface ISocketProvider {
  children?: ReactNode;
}

const SocketProvider: React.FC<ISocketProvider> = ({ children }) => {
  return (
    <SocketContext.Provider value={null}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
