import React from "react";
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
    const [messageText, setMessageText] = React.useState(""); // State to hold the input field text

    const handleSendMessage = () => {
        if (!messageText.trim()) return;
        onSendMessage(messageText);
        setMessageText("");
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };


    return (
        <div className="flex flex-col h-screen">
            <ChatHeader title={topicName} />
            <div className="flex flex-col h-full pt-20 pb-8 mx-auto w-full md:max-w-3xl lg:max-w-2xl xl:max-w-3xl">
                <ScrollArea className="flex-1 pr-4">
                    <div className="space-y-4">
                        {messages?.map(
                            (message, c) => (
                                <Message key={c} content={message.content} author={message.author} isBot={c % 2 === 0} />
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
