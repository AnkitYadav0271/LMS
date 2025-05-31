import {LiaSchoolSolid} from "react-icons/lia";
import {DropDown} from "@/components/ui/dropDown.jsx";
import {Button} from "@/components/ui/Button.jsx";
import {CgDarkMode} from 'react-icons/cg';
import {FaSun} from 'react-icons/fa';
import {useState, useRef} from "react";
import {Menu} from "@/components/ui/Menu.jsx";

export const Navbar = () => {
    let user = true
    const [isHover, setHover] = useState(false);
    const hoverTimeout = useRef(null);
    const [isDarkTheme, setDarkTheme] = useState(false);

    const handleMouseEnter = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setHover(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => setHover(false), 300);
    };

    return (
        <div
            className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed flex items-center top-0 left-0 right-0 duration-10 z-10 justify-between px-4">
            <div className="min-w-[80%] m-[auto] flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <LiaSchoolSolid className="text-white text-5xl"/>
                    <h1 className="max-[630px]:hidden text-2xl text-white font-extrabold">
                        Happy E learning
                    </h1>
                </div>

                <div className="relative flex items-center max-sm:mr-4 mr-8">
                    <div className='flex items-center justify-center gap-4'>
                        <div>
                            {user ? (
                                <img
                                    src="/happy.jpg"
                                    alt="profile photo"
                                    className="rounded-full bg-[#425A3D] w-[50px] h-[50px] max-[630px]:hidden"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                            ) : (
                                <div className="flex gap-2 max-[630px]:hidden">
                                    <Button>Login</Button>
                                    <Button className="bg-[#fff] text-[#000]">SignUp</Button>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center cursor-pointer">
                            {isDarkTheme ?
                                <FaSun className="text-white text-2xl"/> :
                                <CgDarkMode className="text-white text-2xl"/>
                            }
                        </div>
                        <div className="min-[630px]:hidden">
                            <Menu user={user}/>
                        </div>
                    </div>

                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`absolute mt-[68px] z-20 ${isHover ? "block" : "hidden"}`}
                    >
                        <DropDown/>
                    </div>

                </div>

            </div>
        </div>
    );
};