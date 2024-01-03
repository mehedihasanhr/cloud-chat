'use client';

import * as React from "react";
import { Button } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  Link1Icon
} from "@radix-ui/react-icons";

import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./editor.css";



const ChatInput = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const [ isFullEditorOpen, setIsFullEditorOpen ] = React.useState(false);


  return (
    <div className="w-full relative">
      {/* toolbox */}
      <div>
        <ToggleGroup type="multiple" className="justify-start rounded-lg p-1">
          <ToggleGroupItem
            className="px-2 py-0 h-6"
            value="bold"
            aria-label="Toggle bold"
          >
            <FontBoldIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            className="px-2 py-0 h-6"
            value="italic"
            aria-label="Toggle italic"
          >
            <FontItalicIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            className="px-2 py-0 h-6"
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            className="px-2 py-0 h-6"
            value="link"
            aria-label="Toggle link"
          >
            <Link1Icon className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {/* text box */}
      <div className="border items-end gap-4 max-h-[100px] overflow-y-auto thin-scrollbar rounded-lg">

        <div className="flex-1 py-2.5 px-3 pr-20 text-sm">
            <div className={`chat-send-box ${isFullEditorOpen ? 'extend-mood-on': 'extend-mood-off'}`}>
              <Editor
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Write message here..."
              />
            </div>
        </div>
        <Button
          variant="ghost"
          onClick={() => setIsFullEditorOpen(!isFullEditorOpen)}
          className="absolute bottom-0 right-0 py-5 text-gray-500 hover:bg-transparent hover:text-black"
        >
          <i className="fi fi-rr-pen-field text-2xl mx-2 my-0 leading-1" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
