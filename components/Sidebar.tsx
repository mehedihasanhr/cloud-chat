"use client";
import React from "react";
import Search from "./Search";
import ChatSidebar from "./ChatSidebar";
import { ScrollArea } from "./ui/scroll-area";

const Logo = () => {
  return (
    <div className="h-14 px-5 border-b text-xl flex items-center font-bold">
      <span className="text-green-500">Cloud</span> Chat
    </div>
  );
};

export default function Sidebar() {
  const [search, setSearch] = React.useState("");
  return (
    <React.Fragment>
      <Logo />

      {/* items */}
      <div className="flex-1 flex flex-col gap-3 overflow-hidden">
        <div className="h-14 flex items-center">
          <Search
            value={search}
            onChange={v => setSearch(v)}
            placeholder="Search Here.."
          />
        </div>

        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-5 pb-2">
            {/* Groups */}
            <div>
              <h5 className="px-3 mb-3 font-semibold text-zinc-400">Groups</h5>
              <ChatSidebar />
            </div>

            {/* Chats */}
            <div>
              <h5 className="px-3 mb-3 font-semibold text-zinc-400">Chats</h5>
              <ChatSidebar />
            </div>
          </div>
        </ScrollArea>
      </div>
    </React.Fragment>
  );
}
