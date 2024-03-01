import { MacbookScroll } from "components/ui/macbook-scroll";
import Preview from "assets/HomePreview.png";
import { Button } from "components/ui/button";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const IntroCTA = () => {
    return (
        <div className=" w-full">
            <MacbookScroll
                src={Preview}
                showGradient={false}
                title={"World's best AI tutor."}
                subtitle={"Built for learning."}
                content={<Content />}
            />
        </div>
    );
};

const Content = () => {
    return (
        <div className="space-y-4 w-full">
            <div className="space-x-4 flex justify-center">
                <Link to="/chat">
                    <Button variant="magic" size="lg">
                        Sign up with Email
                    </Button>
                </Link>
                <Link to="/chat">
                    <Button
                        variant="magic"
                        size="lg"
                        className="bg-blue-500 hover:bg-blue-500/90 items-center space-x-2"
                    >
                        <IconBrandGoogle className="h-full" />
                        <span>Sign up with Google</span>
                    </Button>
                </Link>
            </div>
            <div className="w-full text-center">
                Acada is an AI-base tutor that helps you learn your subjects
                effectively, practice for exams and guide you through your
                homework without giving you the answers. It’s like if an actual
                tutor meets GPT. It’s a tutor available 24h/7 tailored to your
                needs.
            </div>
        </div>
    );
};
