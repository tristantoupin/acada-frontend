import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "components/ui/context-menu";
import React from "react";
import { cn } from "utils/cn";
import { buttonVariants } from "components/ui/button";

export interface SidebarItemProps {
    isCollapsed: boolean;
    title: string;
    label?: string;
    icon: React.ComponentType<any>;
    variant: "default" | "ghost";
    onClickCallback?: () => void;
    rightClickOptions?: {
        label: string;
        action: () => void;
    }[];
}

export function SidebarItem({
    isCollapsed,
    title,
    label,
    icon: Icon,
    variant,
    onClickCallback,
    rightClickOptions,
}: SidebarItemProps) {
    return (
        <Tooltip delayDuration={0}>
            <TooltipTrigger
                asChild
                onContextMenu={(event) => event.stopPropagation()}
            >
                <div className="w-full">
                    <ContextMenu>
                        <ContextMenuTrigger asChild>
                            {isCollapsed ? (
                                <div
                                    onClick={onClickCallback}
                                    className={cn(
                                        buttonVariants({
                                            variant: variant,
                                            size: "icon",
                                        }),
                                        "h-9 w-9",
                                        variant === "default" &&
                                            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="sr-only">{title}</span>
                                </div>
                            ) : (
                                <div
                                    onClick={onClickCallback}
                                    className={cn(
                                        buttonVariants({
                                            variant: variant,
                                            size: "sm",
                                        }),
                                        variant === "default" &&
                                            "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                                        "justify-start w-full"
                                    )}
                                >
                                    <Icon className="mr-2 h-4 w-4" />
                                    {title}
                                    {label && (
                                        <span
                                            className={cn(
                                                "ml-auto",
                                                variant === "default" &&
                                                    "text-background dark:text-white"
                                            )}
                                        >
                                            {label}
                                        </span>
                                    )}
                                </div>
                            )}
                        </ContextMenuTrigger>
                        {rightClickOptions && (
                            <ContextMenuContent>
                                {rightClickOptions?.map((option, index) => (
                                    <ContextMenuItem
                                        key={index}
                                        onSelect={option.action}
                                    >
                                        {option.label}
                                    </ContextMenuItem>
                                ))}
                            </ContextMenuContent>
                        )}
                    </ContextMenu>
                </div>
            </TooltipTrigger>
            {isCollapsed && (
                <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                >
                    {title}
                    {label && (
                        <span className="ml-auto text-muted-foreground">
                            {label}
                        </span>
                    )}
                </TooltipContent>
            )}
        </Tooltip>
    );
}
