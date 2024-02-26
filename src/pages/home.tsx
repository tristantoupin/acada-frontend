import React from "react";
import BodyComponent from "components/body";
import Header from "components/home/Header";
import { IntroCTA } from "components/home/IntroCTA";
import { BackgroundGradientAnimation } from "components/ui/background-gradient-animation";

const Home = () => {
    return (
        <BodyComponent>
            <Header />

            <IntroCTA />

            <div className="h-screen bg-light" />
            <div className="h-screen bg-dark rounded-2xl" />
            <div className="h-screen bg-dark" />
            <div className="h-screen bg-dark" />
        </BodyComponent>
    );
};

export default Home;
