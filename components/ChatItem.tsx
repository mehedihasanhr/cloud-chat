import Image from "next/image";
import * as React from "react";
import { DropdownMenu } from "./ui/dropdown-menu";

type ChatItemType = {
  title: string,
  lastMessage: string,
  time: string,
  avatar: string
};

const ChatItem: React.FC<ChatItemType> = ({
  title,
  lastMessage,
  time,
  avatar
}) => {
  return (
    <div className="flex items-center space-x-2 px-5 hover:bg-slate-200 py-2 transition-all duration-300 cursor-pointer">
      <div className="relative">
        <Image
          src={avatar}
          alt=""
          width={64}
          height={64}
          className="rounded-full w-10 h-10 border"
        />

        <div className="w-3 h-3 border-2 border-white rounded-full bg-green-500 absolute bottom-0 right-0" />
      </div>

      <div className="flex-1">
        <p className="font-semibold text-sm line-clamp-1 leading-4 w-[80%]">
          {title}
        </p>
        <p className="py-0 my-0 text-zinc-500 text-xs line-clamp-1">
          {lastMessage}
        </p>
      </div>

      <div className="flex self-stretch py-2">
        <span className="block text-[10px]">{time}</span>
      </div>
    </div>
  );
};

export default ChatItem;
