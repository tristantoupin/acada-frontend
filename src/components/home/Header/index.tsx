import { Disclosure } from "@headlessui/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { classNames } from "utils/formatting";
import AcadaLogo from "assets/logos/AcadaLogo.svg";
import { Button } from "components/ui/button";

const navigation = [
    { name: "Why Acada", href: "#", current: true },
    { name: "Pricing", href: "#", current: false },
    { name: "Log in", href: "#", current: false },
];

const Header = () => {
    return (
        <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-4 text-slate-400 hover:text-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <IconX
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <IconMenu2
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 space-x-2 items-center">
                                    <img
                                        className="h-10 w-auto"
                                        src={AcadaLogo}
                                        alt="Acada"
                                    />
                                    <span className="font-bold text-lg">
                                        Acada
                                    </span>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 items-center">
                                        {navigation.map((item) => (
                                            <Button
                                                key={item.name}
                                                variant="link"
                                                onClick={() => {alert(item.name)}}
                                            >
                                                {item.name}
                                            </Button>
                                        ))}
                                        <Button 
                                        onClick={() => {alert("what!")}}
                                        variant="magic">
                                            Sign up
                                        </Button>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Button key={item.name} variant="link">
                                    {item.name}
                                </Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;
