import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "components/ui/resizable";
import ChatScroll from "./chat-scroll";
import ChatHistory from "./chat-history";

const ChatContainer = () => {
    return (
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <ChatScroll />
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
