import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const contact = () => {
    return (
        <div className="text-white bg-gray-900 w-screen font-bold text-white">
            <Navbar/>

            <div className="h-screen pb-16 flex flex-col justify-center items-center text-6xl">
                <div className="">
                    Thanks For Coming!
                </div>
                <div className="h-auto bg-gray-900">
                    <div className="p-4 flex flex-row justify-center items-center">
                        <div className="flex flex-col justify-center text-4xl items-center bg-gray-800 p-4 rounded-xl">
                            <div className="pb-4">Github</div>
                        </div>
                        <div className="flex flex-col justify-center text-4xl items-center bg-gray-800 p-4 rounded-xl">
                            <div className="pb-4">Email</div>
                        </div>
                        <div className="flex flex-col justify-center text-4xl items-center bg-gray-800 p-4 rounded-xl">
                            <div className="pb-4">LinkedIn</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 border-t-4 border-amber-300 h-auto flex flex-row justify-center items-center text-9xl text-white">
                <Footer/>
            </div>
        </div>
    );
};

export default contact;