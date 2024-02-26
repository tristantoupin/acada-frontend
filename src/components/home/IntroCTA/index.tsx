import { MacbookScroll } from "components/ui/macbook-scroll";
import Preview from "assets/HomePreview.png";
import MagicBorderButton from "components/buttons/MagicBorderButton";

export const IntroCTA = () => {
    return (
        <div className="absolute z-10 inset-y-50 inset-x-0 flex items-center justify-center">
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
            <div className="space-x-4">
                <MagicBorderButton text="Sign up with Email" onClick={() => {}} />
                <MagicBorderButton text="Sign up with Google" onClick={() => {}} />
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
