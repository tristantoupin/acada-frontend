import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/tailwind.css";
import Home from "pages/home";
import ChatPage from "pages/chat-page";
import Test from "pages/test";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthenticationGuard } from "./components/authentication/authentication-guard";

const queryClient = new QueryClient();

const App: React.FC = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div className="text-red-500 text-6xl">Loading in app...!!</div>;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                {/* <Route
                    path="/chat"
                    element={<AuthenticationGuard component={ChatPage} />}
                /> */}
                <Route
                    path="/chat"
                    element={<ChatPage />}
                />
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
