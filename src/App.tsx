import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/tailwind.css";
import Home from "./pages/home";
import Chat from "./pages/chat";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/chat" element={<Chat />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App;
