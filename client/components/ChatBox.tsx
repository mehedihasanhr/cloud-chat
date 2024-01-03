'use client';
import { Button } from "@/components/ui/button";
// import ChatInput from "./ChatInput";
import EditorProvider from "@/context/EditorProvider";
import dynamic from "next/dynamic";

const ChatInput = dynamic(() => import ('./ChatInput'), {
  ssr: false,
  loading: () => <div className="w-full border h-10 rounded-lg" />
})



const ChatBoxContainer = () => {
  return (
    <div className="pt-5">
      <div className="min-24">
        <div className="flex items-end pb-5 gap-3 h-full px-10">
          <Button variant="ghost" size="icon" className="h-10 px-4 ">
            <i className="fi fi-rr-grin text-2xl leading-1 -mb-2" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 px-4">
            <i className="fi fi-rr-images text-2xl leading-1 -mb-2" />
          </Button>

          <ChatInput />

          <Button className="py-5">
            <i className="fi fi-rr-paper-plane leading-none mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};



// render chatbox
export default function ChatBox(){
  return(
    <EditorProvider>
        <ChatBoxContainer />
    </EditorProvider>
  )
};
