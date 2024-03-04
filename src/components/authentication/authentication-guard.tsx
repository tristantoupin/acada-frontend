import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

interface AuthenticationGuardProps {
    component: React.ComponentType<any>;
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
    component,
}: AuthenticationGuardProps) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <div>Loading...</div>,
    });

    return <Component />;
};
