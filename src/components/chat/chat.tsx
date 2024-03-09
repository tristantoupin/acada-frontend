import React, { useEffect, useState } from "react";
import { Sidebar } from "components/chat/sidebar";
import ChatContainer from "components/chat/chat-container";
import { IconHash, IconPlus } from "@tabler/icons-react";
import { TooltipProvider } from "components/ui/tooltip";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "components/ui/resizable";
import { cn } from "utils/cn";
import AcadaLogo from "assets/logos/AcadaLogo.svg";
import { useSearchTopic } from "hooks/useTopics";
import useAccessToken from "hooks/useAccessToken";
import { Topic } from "models/topic";
import { SidebarItemProps } from "components/chat/components/sidebar-item";
import { useUpdateUser } from "hooks/useUser";
import { User } from "@/models/user";

interface ChatProps {
    user: User;
    defaultLayout?: number[];
    defaultCollapsed?: boolean;
}

const Chat: React.FC<ChatProps> = ({
    user,
    defaultLayout = [265, 440, 655],
    defaultCollapsed = false,
}) => {
    // State management for collapsible sidebar and sidebar items
    const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);
    const createChatItem: SidebarItemProps = {
        isCollapsed,
        title: "Add Subject",
        icon: IconPlus,
        variant: "default",
        onClickCallback: () => alert("Adding a topic")
    };
    const [sidebarItems, setSidebarItems] = useState<SidebarItemProps[]>([
        createChatItem,
    ]);

    // Custom hooks for accessing tokens and topic data
    const accessToken = useAccessToken();
    const { data: topics } = useSearchTopic({
        accessToken,
        searchQuery: { id: { $in: user.topic_ids } },
    });
    const { mutate: updateUser } = useUpdateUser();

    // Effect hook for updating sidebar items based on topics
    useEffect(() => {
        if (topics) {
            const newSidebarItems = topics.map((topic: Topic) => ({
                isCollapsed,
                title: topic.name,
                label: `${topic.sessions.length} chats`,
                icon: IconHash,
                variant: "ghost",
                rightClickOptions: [
                    {
                        label: "Remove Topic",
                        action: () =>
                            updateUser({
                                accessToken,
                                id: user.id,
                                topic_ids: user.topic_ids.filter(
                                    (item) => item !== topic.id
                                ),
                            }),
                    },
                ],
            }));
            setSidebarItems([createChatItem, ...newSidebarItems]);
        }
    }, [topics, isCollapsed]);

    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                        sizes
                    )}`;
                }}
                className="h-full max-h-screen items-stretch"
            >
                <ResizablePanel
                    defaultSize={defaultLayout[0]}
                    collapsedSize={4}
                    collapsible
                    minSize={15}
                    maxSize={20}
                    onCollapse={() => setIsCollapsed(true)}
                    onExpand={() => setIsCollapsed(false)}
                    className={cn(
                        isCollapsed &&
                            "min-w-[50px] transition-all duration-300 ease-in-out"
                    )}
                >
                    <div
                        className={cn(
                            "flex h-[52px] items-center justify-center",
                            isCollapsed ? "h-[52px]" : "px-2"
                        )}
                    >
                        <div className="flex flex-1 items-center space-x-4">
                            <img
                                alt="Acada Logo"
                                className="h-12 w-12"
                                src={AcadaLogo}
                            />
                            <span className="shrink font-bold text-xl">
                                Acada
                            </span>
                        </div>
                    </div>
                    <Sidebar
                        isCollapsed={isCollapsed}
                        sidebarItems={sidebarItems}
                    />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                    <ChatContainer />
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    );
};

export default Chat;
