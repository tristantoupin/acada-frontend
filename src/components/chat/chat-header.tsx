import React from "react";

const ChatHeader = ({title}: {title: string}) => {
    return (
        <div className="h-16 fixed z-10 w-full bg-white py-4 px-6 shadow-xl">
            <div className="text-lg text-ellipsis overflow-hidden text-nowrap w-full">
                {title}
            </div>
        </div>
    );
};

export default ChatHeader;
