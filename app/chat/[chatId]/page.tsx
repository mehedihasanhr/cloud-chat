import ChatBox from "@/components/ChatBox";
import dynamic from "next/dynamic";
import ScrollInView from "@/components/ScrollInView";
import { ScrollArea } from "@/components/ui/scroll-area";
import { faker } from "@faker-js/faker";

const Message = dynamic(() => import('@/components/Message'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});


const messages = () => {
  const data = [];

  for (let i = 0; i < 30; i++) {
    data.push({
      id: faker.string.uuid(),
      senderId: faker.string.uuid(),
      receiverId: faker.string.uuid(),
      text: faker.lorem.sentence(),
      created_at: faker.date.anytime(),
      sender: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        avatar: faker.image.avatarGitHub(),
      },
      receiver: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        avatar: faker.image.avatarGitHub(),
      },
      type: ['SEND', "RECEIVED"][Math.floor(Math.random() * 2)]
    })
  }

  return data;
}

export default function Chat() {

  return (
    <div className="flex flex-col h-screen">
      {/* navbar */}
      <div className="border-b h-14"></div>

      {/* body */}
      <ScrollArea className="flex-1 px-10">
        {messages().map(message => (
          <Message key={message.id} message={message} />
        ))}
        <ScrollInView />
      </ScrollArea>

      {/* chatbox */}
      <ChatBox />
    </div>
  );
}


