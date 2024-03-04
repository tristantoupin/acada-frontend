import { Sidebar } from "components/chat/sidebar";
import ChatContainer from "components/chat/chat-container";
import { IconHash } from "@tabler/icons-react";
import { TooltipProvider } from "components/ui/tooltip";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "components/ui/resizable";
import { cn } from "utils/cn";
import AcadaLogo from "assets/logos/AcadaLogo.svg";
import { useState } from "react";
interface MailProps {
    defaultLayout: number[] | undefined;
    defaultCollapsed?: boolean;
}

export function Chat({
    defaultLayout = [265, 440, 655],
    defaultCollapsed = false,
}: MailProps) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);
    const navCollapsedSize = 4;

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
                        links={[
                            {
                                title: "Inbox",
                                label: "128",
                                icon: IconHash,
                                variant: "default",
                            },
                        ]}
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
