import React from "react";
import ChatScroll from "./chat-scroll";
import { useTopic } from "hooks/useTopics";
import useAccessToken from "hooks/useAccessToken";
import { Message } from "models/message";
import { useCreateMessage, useSearchMessage } from "hooks/useMessages";

type ChatContainerProps = {
    topic_id: string;
};

const ChatContainer = ({topic_id}: ChatContainerProps) => {
    const { accessToken } = useAccessToken();

    const {data: topic} = useTopic({id: topic_id, accessToken})
    const { mutate: createMessage } = useCreateMessage();
    const { data: messages } = useSearchMessage({accessToken, searchQuery: {session: "65ebddb6d8259312ff8d0320"}})
    
    return (
        <ChatScroll topicName={topic?.name} messages={messages} onSendMessage={(newMessage) => createMessage({accessToken, newMessage: {author: "6678621891c6e15f2b1cb5c1", session: topic_id,content: newMessage}})}/>
    );
};

export default ChatContainer;
