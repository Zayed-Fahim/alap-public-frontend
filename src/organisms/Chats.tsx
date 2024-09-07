import { Button, InputField } from "@/atoms";
import React from "react";
import { LiaEditSolid } from "react-icons/lia";

const Chats = () => {
  return (
    <div className="w-[26%] text-black bg-white border-r-[1px] border-gray-300">
      <div className="flex flex-col gap-5 px-3 pt-12 pb-4 top-0 sticky">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chats</h1>
          <Button
            className="w-9 h-9 hover:bg-black hover:bg-opacity-10 rounded-full flex justify-center items-center"
            title="Compose message"
          >
            <LiaEditSolid className="w-6 h-6" />
          </Button>
        </div>
        <InputField
          placeholder="Search"
          id="search"
          name="search"
          type="text"
          className="w-full h-10 px-3 text-sm text-black placeholder-black bg-[#444444] bg-opacity-10 rounded-sm transition duration-300 focus:border-blue-400 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        />
      </div>
    </div>
  );
};

export default Chats;
