import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "components/ui/resizable";
import ChatScroll from "./chat-scroll";
import ChatHistory from "./chat-history";
import { useTopic } from "hooks/useTopics";
import useAccessToken from "hooks/useAccessToken";

type ChatContainerProps = {
    topic_id: string;
};

const ChatContainer = ({topic_id}: ChatContainerProps) => {
    const accessToken = useAccessToken();

    const {data: topic} = useTopic({id: topic_id, accessToken})
    return (
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    {topic && <ChatScroll topic={topic}/>}
                    
                </ResizablePanel>
                <ResizableHandle
                    withHandle
                    className="text-dark bg-slate-400"
                />
                <ResizablePanel defaultSize={20}>
                    <ChatHistory />
                </ResizablePanel>
            </ResizablePanelGroup>
    );
};

export default ChatContainer;
