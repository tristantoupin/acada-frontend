import React from "react";
import {
    SidebarItem,
    SidebarItemProps,
} from "components/chat/components/sidebar-item";
import { IconPlus } from "@tabler/icons-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "components/ui/dialog";
import { useTopics } from "hooks/useTopics";
import useAccessToken from "hooks/useAccessToken";
import { Topic } from "models/topic";
import { useUpdateUser } from "hooks/useUser";
import { User } from "models/user";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

interface NavProps {
    user: User;
    isCollapsed: boolean;
    sidebarItems: Array<SidebarItemProps>;
}

export function Sidebar({ user, isCollapsed, sidebarItems }: NavProps) {
    const { mutate: updateUser } = useUpdateUser();

    const accessToken = useAccessToken();
    const { data: topics } = useTopics(accessToken);
    const createChatItem: SidebarItemProps = {
        isCollapsed,
        title: "Add Subject",
        icon: IconPlus,
        variant: "default",
    };

    return (
        <div
            data-collapsed={isCollapsed}
            className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
        >
            <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                <Dialog>
                    <DialogTrigger>
                        <SidebarItem {...createChatItem} />
                    </DialogTrigger>
                    <DialogContent className="max-h-3/4 backdrop-blur-sm">
                        <DialogHeader>
                            <DialogTitle>
                                What subject are you interested in learning?
                            </DialogTitle>
                            <DialogDescription>
                                Select the tutor you would like to add to your
                                list. Each tutor is fully customized for these
                                subject.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="sm:justify-center">
                            <div className="grid grid-cols-3 gap-4">
                                {topics?.map((topic: Topic) => {
                                    return (
                                        <DialogClose asChild>
                                            <Button
                                                key={topic.id}
                                                variant={"secondary"}
                                                disabled={user.topic_ids.includes(
                                                    topic.id
                                                )}
                                                onClick={() =>
                                                    updateUser({
                                                        accessToken,
                                                        id: user.id,
                                                        topic_ids: [
                                                            ...user.topic_ids,
                                                            topic.id,
                                                        ],
                                                    })
                                                }
                                            >
                                                {topic.name}
                                            </Button>
                                        </DialogClose>
                                    );
                                })}
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                {sidebarItems.map((item) => (
                    <SidebarItem {...item} />
                ))}
            </nav>
        </div>
    );
}
