import React from "react";
import BodyComponent from "components/body";
import Header from "components/home/Header";
import { IntroCTA } from "components/home/IntroCTA";
import LightGradientGrainyBackground from "assets/backgrounds/LightGradientGrainyBackground.svg";

const Home = () => {
    return (
        <BodyComponent>
            <div
                style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100vw",
                    height: "150vh",
                    backgroundImage: `url(${LightGradientGrainyBackground})`,
                }}
            >
                <Header />
                <IntroCTA />
            </div>

            <div className="h-screen bg-light" />
            <div className="h-screen bg-dark rounded-2xl" />
            <div className="h-screen bg-dark" />
            <div className="h-screen bg-dark" />
        </BodyComponent>
    );
};

export default Home;
