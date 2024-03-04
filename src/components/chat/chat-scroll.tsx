import React from "react";
import ChatHeader from "./chat-header";
import { ScrollArea } from "../ui/scroll-area";

const ChatScroll = () => {
    return (
        <ScrollArea className="h-screen">            
            <ChatHeader title="Math - Practice - Continuity" />
        </ScrollArea>
    );
};

export default ChatScroll;
