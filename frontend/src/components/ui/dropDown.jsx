import {Button} from "@/components/ui/Button.jsx";

export const DropDown = () => {


    return (


            <div className="fixed top-[64px] mx-w-sm  bg-[#fff] z-40">
                <ul className="flex flex-col gap-2 mt-0">
                    <li className="list-none hover:font-bold cursor-pointer py-2">
                        My Profile
                    </li>
                    <li className="list-none hover:font-bold  cursor-pointer py-2">
                        My Learning
                    </li>
                    <li className="list-none  hover:font-bold  cursor-pointer py-2">
                        Edit Profile
                    </li>
                    <li className="list-none hover:font-bold  cursor-pointer py-2">
                        Logout
                    </li>
                    <Button className="text-[#fff] bg-blue-600 ml-[0px]">Dashboard</Button>
                </ul>
            </div>


    );
}