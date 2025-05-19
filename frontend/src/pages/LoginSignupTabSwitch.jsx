import {Button, WhiteButton} from "@/components/ui/Button.jsx";
import {useState} from "react";
import {Login} from "@/components/login.jsx";
import {Signup} from "@/components/signup.jsx";


export const LoginSignupTabSwitch = ()=>{
    const [currentTab,setTab] = useState("login");
    console.log(currentTab);
    return(
        <>
        <div className={`flex items-center min-h-screen justify-center `}>
        <div className={`max-w-md border  border-black`}>
            <div className={`button-container flex p-2 justify-around`}>
                <WhiteButton className={`w-36 h-10  text-black font-normal cursor-pointer text-xl transition-color ${currentTab === "login" ? "border-blue-600 text-blue-600":""}`}
                             onClick={()=>setTab("login")}>Login
                </WhiteButton>
                <WhiteButton className={`w-36 h-10  text-black font-normal cursor-pointer text-xl transition-color ${currentTab === "signup" ? "border-blue-600 text-blue-600":""}`}
                             onClick={()=>setTab("signup")}>SignUp
                </WhiteButton>

            </div>

            <div> {currentTab === "login" ? <Login /> : <Signup/>}</div>

        </div>
        </div>
        </>
    );
}