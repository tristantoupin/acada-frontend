import React from "react";
import { SidebarItem, SidebarItemProps } from "components/chat/components/sidebar-item";


interface NavProps {
    isCollapsed: boolean;
    sidebarItems: Array<SidebarItemProps>;
}

export function Sidebar({ isCollapsed, sidebarItems }: NavProps) {
    return (
        <div
            data-collapsed={isCollapsed}
            className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
        >
            <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                
                {sidebarItems.map((item) => (
                    <SidebarItem {...item} />
                ))}
            </nav>
        </div>
    );
}
