import { Button } from "@/components/ui/button";
import ChatInput from "./ChatInput";

const ChatBox = () => {
  return (
    <div className="h-24">
      <div className="flex items-center gap-3 h-full px-10">
        <Button variant="ghost" size="icon">
          <i className="fi fi-rr-grin text-2xl leading-1 -mb-2" />
        </Button>
        <Button variant="ghost" size="icon">
          <i className="fi fi-rr-images text-2xl leading-1 -mb-2" />
        </Button>

        <ChatInput />

        <Button className="py-5">
          <i className="fi fi-rr-paper-plane leading-none mr-2" />
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatBox;
