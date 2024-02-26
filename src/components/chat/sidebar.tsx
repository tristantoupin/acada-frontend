import { useState } from "react";
import AcadaLogo from "assets/logos/AcadaLogoOrangeDark.svg";
import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";
import { Button } from "../ui/button";

const navigation = [
    { name: "Math" },
    { name: "Arabic" },
    { name: "Geography" },
    { name: "Science" },
    { name: "History" },
    { name: "French" },
];

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="p-2">
            <div className="flex items-center overflow-hidden">
                <div className="flex flex-1 items-center space-x-4">
                    <img
                        alt="Acada Logo"
                        className="h-12 w-12"
                        src={AcadaLogo}
                    />
                    <span className="shrink font-bold text-xl">Acada</span>
                </div>
                <div className="bg-dark">
                    <Button size={"icon"}>
                        <IconLayoutSidebarLeftCollapse className="h-8 w-8" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
