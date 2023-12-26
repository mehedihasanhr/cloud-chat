"use client";
import * as React from "react";
import ChatItem from "./ChatItem";
import { faker } from "@faker-js/faker";

const data = () => {
  let _data = [];
  for (let i = 0; i < 10; i++) {
    _data.push({
      id: faker.string.uuid(),
      title: faker.person.fullName(),
      avatar: faker.image.avatarGitHub(),
      lastMessage: faker.lorem.sentence(),
      time: "1 min"
    });
  }

  return _data;
};

const ChatSidebar = () => {
  const chats = data();

  return (
    <div className="flex-1 flex flex-col">
      {chats?.map((item, index: number) => (
        <ChatItem
          key={index}
          id={item.id}
          title={item.title}
          avatar={item.avatar}
          time="1 min"
          lastMessage={item.lastMessage}
        />
      ))}
    </div>
  );
};

export default ChatSidebar;
