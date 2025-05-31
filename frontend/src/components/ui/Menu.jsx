import { IoMenu } from "react-icons/io5";

import { RxCross2 } from "react-icons/rx";
import {useState} from "react";
import {DropDown} from "@/components/ui/dropDown.jsx";
import {Button} from "@/components/ui/Button.jsx";

export const Menu = ({user}) => {
   user = false
    const [isMenuClicked,setMenuClicked] = useState(false);
    const  handleClick = ()=>{
        if (isMenuClicked){
            setMenuClicked(false);
        }
        else {
            setMenuClicked(true)
        }
    }
    return (
        <div className={"relative flex flex-col gap-0"}>
            <button className={"flex justify-center items-center"} onClick={handleClick}>
                {isMenuClicked ? (
                    <RxCross2 className="text-white w-8 h-[40px]"/>
                ) : (
                    <IoMenu className="text-white w-8 h-[40px]"/>
                )}
            </button>

            <div className={`}transition-transform ${isMenuClicked ? "translate-x-0" : "translate-x-[100rem]"} ${user? "block":"hidden"} `}>
                <ul className={user ? "block" : "hidden"}>
                    <DropDown/>
                </ul>

            </div>
            <div className={`${user ? "hidden" : "block"} top-[50px] absolute ${isMenuClicked ? "translate-x-0" : "translate-x-[100rem]"} flex flex-col ${isMenuClicked ? "block" : "hidden"} `}>
                <LoginSignUp/>
            </div>
        </div>
    );
}

const LoginSignUp = ()=> {
    return (
        <>
            <ul className={"flex flex-col"}>
                <Button>Log In</Button>
                <Button>Sign Up</Button>
            </ul>
        </>
    );
}