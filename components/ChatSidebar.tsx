import ChatItem from "./ChatItem";
import { faker } from "@faker-js/faker";

const ChatSidebar = () => {
  return (
    <div className="flex-1 flex flex-col">
      {[...Array(10)].map(item => (
        <ChatItem
          key={item}
          title={faker.person.fullName()}
          avatar={faker.image.avatarGitHub()}
          time="1 min"
          lastMessage={faker.lorem.sentence()}
        />
      ))}
    </div>
  );
};

export default ChatSidebar;
