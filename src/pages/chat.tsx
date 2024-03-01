import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "components/ui/resizable";
import Sidebar from "components/chat/sidebar";
import ChatContainer from "components/chat/chat-container";

const Chat = () => {
    return (
        <div className="h-screen w-screen bg-dark p-4 text-light flex">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={20}>
                    <Sidebar />
                </ResizablePanel>
                <ResizableHandle withHandle className="text-dark bg-transparent"/>
                <ResizablePanel>
                    <ChatContainer />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default Chat;
