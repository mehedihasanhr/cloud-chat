'use client'
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ScrollArea } from '@/components/ui/scroll-area';
import { faker } from '@faker-js/faker';
import ChatBox from '@/components/ChatBox';
import InfiniteScroll from 'react-infinite-scroll-component';
import MessageLoader from '@/components/MessageLoader';
import EditorProvider from '@/context/EditorProvider';

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  created_at: Date;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  receiver: {
    id: string;
    name: string;
    avatar: string;
  };
  type: 'SEND' | 'RECEIVED' | string;
}

const Message = dynamic(() => import('@/components/Message'), {
  ssr: false,
  loading: () => <MessageLoader />,
});


const generateMessages = (): Message[] => {
  const data: Message[] = [];

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
      type: ['SEND', 'RECEIVED'][Math.floor(Math.random() * 2)],
    });
  }

  return data;
};


const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch initial messages
    let m = generateMessages();
    setMessages(m);
  }, []);


  return (
    <div className="flex flex-col h-screen">
      {/* navbar */}
      <div className="border-b h-14"></div>

      {/* body */}
      {/* <ScrollArea className="flex-1 px-10" onScroll={handleScroll} ref={listRef}> */}
      <div className="flex-1 relative flex overflow-hidden">
        <div className='flex-1 overflow-auto flex flex-col-reverse pt-10' id='scrollableDiv'>
          <InfiniteScroll
            dataLength={messages.length}
            loader={<Loader />}
            inverse={true}
            next={() => console.log('next')}
            hasMore={true}
            scrollableTarget="scrollableDiv"
          >
            {messages?.map((message: Message) => (
              <div className='px-10' key={message.id} >
                <Message message={message} />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
      {/* </ScrollArea> */}

      {/* chatbox */}
      <ChatBox />
    </div>
  );
};

export default Chat;


const Loader = () => {
  return (
    <div className='w-full overflow-hidden flex items-center justify-center absolute top-0 left-0 py-3'>
      <div className='flex items-center text-white px-5 rounded-lg bg-slate-700 text-xs py-2'>
        <svg className="animate-spin -ml-1 mr-3 h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading...
      </div>
    </div>
  )
}
