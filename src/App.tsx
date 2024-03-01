import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/tailwind.css";
import Home from "./pages/home";
import Chat from "./pages/chat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

export default App;
