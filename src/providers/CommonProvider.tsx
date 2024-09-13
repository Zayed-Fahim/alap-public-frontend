import CommonContext from "@/contexts/Common";
import { ReactNode, useState } from "react";

interface ICommonProvider {
  children?: ReactNode;
}

const CommonProvider: React.FC<ICommonProvider> = ({ children }) => {
  const [tabName, setTabName] = useState<string>("Chats");

  const commonInfo = {
    tabName,
    setTabName,
  };
  return (
    <CommonContext.Provider value={commonInfo}>
      {children}
    </CommonContext.Provider>
  );
};

export default CommonProvider;
