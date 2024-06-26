import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const useAccessToken = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [accessToken, setAccessToken] = useState<string>("");

    useEffect(() => {
        const getToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                setAccessToken(token);
            } catch (e) {
                console.error(e);
                setAccessToken("");
            }
        };

        if (isAuthenticated) {
            getToken();
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    return { accessToken };
};

export default useAccessToken;
