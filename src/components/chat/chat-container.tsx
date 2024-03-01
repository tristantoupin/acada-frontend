import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "components/ui/resizable";
import Chat from "./chat";
import ChatHistory from "./chat-history";

const ChatContainer = () => {
    return (
        <div className="h-full w-full bg-light rounded-3xl overflow-hidden text-dark">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <Chat />
                </ResizablePanel>
                <ResizableHandle
                    withHandle
                    className="text-dark bg-slate-400"
                />
                <ResizablePanel defaultSize={20}>
                    <ChatHistory />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default ChatContainer;
