import { Link, Sidebar } from "components/chat/sidebar";
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
import { useEffect, useState } from "react";
import { useTopics } from "hooks/useTopics";
import useAccessToken from "hooks/useAccessToken";
import { CoreTopic } from "@/models/topic";

interface ChatProps {
    defaultLayout: number[] | undefined;
    defaultCollapsed?: boolean;
}

const createChatLink: Link = {
    title: "Add Subject",
    label: undefined,
    icon: IconPlus,
    variant: "default"
};


const baseSubjectLink = (title: string, count: number) => ({
    title,
    label: count.toString(),
    icon: IconHash,
    variant: "ghost"
});

export function Chat({
    defaultLayout = [265, 440, 655],
    defaultCollapsed = false,
}: ChatProps) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);
    const [sidebarLinks, setSidebarLinks] = useState([createChatLink]);
    const navCollapsedSize = 4;
    const accessToken = useAccessToken();
    console.log("sidebarLinks:", sidebarLinks)

    const { data: topics } = useTopics(accessToken);
    console.log("topics:", topics);

    useEffect(() => {
        if (topics) {
            const newSidebarLinks = topics.map((topic: CoreTopic) => baseSubjectLink(topic.name, topic.sessions.length));
            console.log("uyseEffect:", [createChatLink, ...newSidebarLinks])
            setSidebarLinks([createChatLink, ...newSidebarLinks]);
        }
    }, [topics]);

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
                    collapsedSize={navCollapsedSize}
                    collapsible={true}
                    minSize={15}
                    maxSize={20}
                    onCollapse={() => {
                        setIsCollapsed(true);
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                            true
                        )}`;
                    }}
                    onExpand={() => {
                        setIsCollapsed(false);
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                            false
                        )}`;
                    }}
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
                        links={sidebarLinks}
                    />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                    <ChatContainer />
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    );
}
