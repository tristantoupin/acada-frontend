import React from "react";
import ChatHeader from "./chat-header";
import { ScrollArea } from "../ui/scroll-area";
import { Topic } from "models/topic";


type ChatScrollProps = {
    topic: Topic;
};

const ChatScroll = ({topic}: ChatScrollProps) => {
    return (
        <ScrollArea className="h-screen">            
            <ChatHeader title={topic.name} />
        </ScrollArea>
    );
};

export default ChatScroll;
