import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ChatHeader from "./chat-header";
import { Input } from "components/ui/input";
import { ScrollArea } from "components/ui/scroll-area";
import { Button } from "components/ui/button";
import { Message as MessageModel } from "models/message";
import Message from "components/ui/custom/message";


type ChatScrollProps = {
    topicName: string;
    messages: MessageModel[];
    onSendMessage: (message: string) => void;
};

const ChatScroll = ({
    topicName,
    messages,
    onSendMessage,
}: ChatScrollProps) => {
    const [messageText, setMessageText] = useState("");
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = () => {
        onSendMessage(messageText);
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && messageText.trim()) {
            handleSendMessage();
            setMessageText("");
        }
    };


    useEffect(() => {
        // Scroll to the bottom whenever messages change
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [messages]);

    return (
        <div className="flex flex-col h-screen">
            <ChatHeader title={topicName} />
            <div className="flex flex-col h-full pt-20 pb-8 mx-auto w-full md:max-w-3xl lg:max-w-2xl xl:max-w-3xl">
                <ScrollArea className="flex-1 pr-4">
                    <div className="space-y-4">
                        {messages?.map(
                            (message, index) => (
                                <div id={`${message.author}_${index}`} ref={index + 1 === messages.length ? chatContainerRef : null}>
                                    <Message key={index} content={message.content} author={message.author} isBot={index % 2 === 0} />
                                </div>
                            )
                        )}
                    </div>
                </ScrollArea>

                <div className="bg-white py-4 space-x-2 flex items-center">
                    <Input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Type your message here..."
                        onKeyDown={handleKeyPress}
                    />
                    <Button type="submit" onClick={handleSendMessage}>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default ChatScroll;
