import React from 'react';
import { withAuthenticationRequired, WithAuthenticationRequiredOptions } from '@auth0/auth0-react';

interface ProtectedComponentProps {
  component: React.ComponentType<any>;
  [key: string]: any; // This allows any number of additional props
}

const ProtectedComponent: React.FC<ProtectedComponentProps> = ({ component, ...propsForComponent }) => {
    const Cp = withAuthenticationRequired(component, {} as WithAuthenticationRequiredOptions);
    return <Cp {...propsForComponent} />;
};

export default ProtectedComponent;
