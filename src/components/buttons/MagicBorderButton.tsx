import React from "react";

type MagicButtonProps = {
    text: string;
    onClick: () => void;
    leadingIcon?: JSX.Element;
    trailingIcon?: JSX.Element;
};

const MagicBorderButton: React.FC<MagicButtonProps> = ({
    text,
    onClick,
    leadingIcon,
    trailingIcon,
}) => {
    return (
        <button
            onClick={onClick}
            className="relative inline-flex h-8 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-orange-100"
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0ecf67_0%,#0878f5_50%,#0ecf67_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-orange-500 hover:bg-orange-600 px-3 py-1 text-sm font-medium text-light backdrop-blur-3xl">
                {leadingIcon && <span>{leadingIcon}</span>}
                {text}
                {trailingIcon && <span>{trailingIcon}</span>}
            </span>
        </button>
    );
};

export default MagicBorderButton;
