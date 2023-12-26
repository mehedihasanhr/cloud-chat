import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ChatInput = () => {
  return (
    <div className="w-full">
      {/* text box */}
      <div className="flex items-center gap-4 border rounded-md">
        <Input
          placeholder="Write a message..."
          className="py-5 pl-5 focus-visible:ring-0 border-0 shadow-none"
        />
        <Button variant="ghost" className="py-5">
          <i className="fi fi-rr-pen-field text-2xl mx-2 my-0" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
