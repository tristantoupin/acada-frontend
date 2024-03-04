import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "components/ui/button";
import { useUsers } from "hooks/useUser";
import { User } from "models/user";
import useAccessToken from "hooks/useAccessToken";

const Test = () => {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const accessToken = useAccessToken();
    const { data: users } = useUsers(accessToken);

    return (
        <div className="bg-dark text-light">
            {isAuthenticated ? (
                <div>
                    <div>
                        {user?.email}
                        {user?.phone_number}
                    </div>
                    <div className="flex space-x-4">
                        {users?.map((u: User) => (
                            <div className="p-2 bg-orange-200">{u?.email}</div>
                        ))}
                    </div>
                    <Button
                        variant={"outline"}
                        size={"lg"}
                        onClick={() => logout()}
                    >
                        logout
                    </Button>
                </div>
            ) : (
                <Button
                    variant={"outline"}
                    size={"lg"}
                    onClick={() => loginWithRedirect({})}
                >
                    login
                </Button>
            )}
        </div>
    );
};

export default Test;
