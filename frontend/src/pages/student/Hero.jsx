import {useRef} from "react";


export const  HeroSection = () => {


    return (
        <div className={"top-[64px] bg-blue-900 relative flex flex-col items-center justify-center gap-12 text-white"}>
            <div className={" relative mt-13 gap-5  "}>
                <h1 className={"font-bold text-3xl leading-relaxed tracking-widest m-1 p-1"}>Find the best Courses for You</h1>
                <p className={"font-medium text-md flex justify-center leading-relaxed tracking-wide m-1 p-1"}>Discover , learn and upskill with
                    our wide range of courses</p>
            </div>
            <div className="search-container relative w-lg flex  bg-white text-gray-800 p-2 rounded-3xl shadow">
                <input
                    type="text"
                    className="rounded-lg w-100% text-sm text-gray-900 bg-white border:none  focus:outline-none focus:ring-none focus:ring-none block w-full px-4 py-2"
                    placeholder="Search course"
                />
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 shadow"
                >
                    Search
                </button>
            </div>

            <div className={" w-40 h-10 mb-13 rounded-3xl bg-white text-blue-800 font-medium flex items-center justify-center"}>
                <button className={"text-blue flex justify-center items-center h-4"}>Explore course</button>
            </div>

        </div>
    );
}