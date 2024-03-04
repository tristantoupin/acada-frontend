import React from "react";
import Cookies from "js-cookie";
import { Chat } from "components/chat/chat";

const ChatPage = () => {
    const cookieValue =
        Cookies.get("react-resizable-panels:collapsed") ?? "true";
    const defaultCollapsed = cookieValue === "true";

    const layout = Cookies.get("react-resizable-panels:layout");
    const defaultLayout = layout ? JSON.parse(layout) : undefined;

    return (
        <Chat
            defaultLayout={defaultLayout}
            defaultCollapsed={defaultCollapsed}
        />
    );
};

export default ChatPage;
