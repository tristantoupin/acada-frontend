import React from "react";

const ChatHeader = ({title}: {title: string}) => {
    return (
        <div className="w-full bg-transparent py-4 px-6 border-b border-b-slate-400 shadow-xl">
            <span className="text-lg text-ellipsis overflow-hidden text-nowrap w-full">
                {title}
            </span>
        </div>
    );
};

export default ChatHeader;
