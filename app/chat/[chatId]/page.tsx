import ChatBox from "@/components/ChatBox";

export default function Chat() {
  return (
    <div className="h-full flex flex-col">
      {/* navbar */}
      <div className="border-b h-14"></div>

      {/* body */}
      <div className="flex-1 ">Chat body</div>

      {/* chatbox */}
      <ChatBox />
    </div>
  );
}
