import React, { ReactNode } from "react";

interface BodyProps {
    children: ReactNode;
}

const BodyComponent: React.FC<BodyProps> = ({ children }) => {
    return <div className="w-full bg-light text-dark max-width-screen-xl">{children}</div>;
};

export default BodyComponent;
