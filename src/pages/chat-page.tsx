import React from "react";
import Cookies from "js-cookie";
import Chat from "components/chat/chat";
import { useUser } from "hooks/useUser";
import useAccessToken from "hooks/useAccessToken";

const ChatPage = () => {
    const cookieValue =
        Cookies.get("react-resizable-panels:collapsed") ?? "true";
    const defaultCollapsed = cookieValue === "true";

    const layout = Cookies.get("react-resizable-panels:layout");
    const defaultLayout = layout ? JSON.parse(layout) : undefined;

    const { accessToken } = useAccessToken();
    const { data: user } = useUser({
        id: "6678621891c6e15f2b1cb5c1",
        accessToken,
    });

    return (
        <>
            {user ? (
                <Chat
                    user={user}
                    defaultLayout={defaultLayout}
                    defaultCollapsed={defaultCollapsed}
                />
            ) : (
                <></>
            )}
        </>
    );
};

export default ChatPage;
