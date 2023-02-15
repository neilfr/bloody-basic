import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioSkills from "../resources/portfolio_skills.png"
import SnapCycleHome from "../resources/snapcycle_home.png"
import CodeWarriorsHome from "../resources/codewarriors_home.jpeg"
const Home = () => {
    return (
        <>
            <div className="bg-gray-800 w-screen font-bold text-white">
                <Navbar/>
                <div className="pt-16 h-screen flex flex-col items-center justify-center text-9xl pl-8">
                    <div className="bg-gray-800 text-yellow-400">
                        Aidan
                    </div>
                    <div className="pb-8 pl-1 pr-2 bg-yellow-400 text-gray-800">
                        Froggatt
                    </div>
                </div>


                <div className="h-auto bg-gray-900">
                    <div className="p-4 flex flex-row flex-wrap justify-around items-center">
                        <div className="mt-32 flex flex-col justify-center text-4xl items-center bg-gray-800 p-4 rounded-xl">
                            <div className="pb-4">Portfolio</div>
                            <a href="/portfolio/projects"><img src={PortfolioSkills} className="flex h-64 w-128 border-4 border-gray-900"/></a>
                        </div>
                        <div className="mt-32 flex flex-col justify-center text-4xl items-center bg-gray-800 p-4 rounded-xl">
                            <div className="pb-4">SnapCycle</div>
                            <a href="/portfolio/projects"><img src={SnapCycleHome} className="flex h-64 w-128 border-4 border-gray-900"/></a>
                        </div>
                        <div className="mt-32 flex flex-col justify-center text-4xl items-center bg-gray-800 p-4 rounded-xl">
                            <div className="pb-4">CodeWarriors</div>
                            <a href="/portfolio/projects"><img src={CodeWarriorsHome} className="flex h-64 w-128 border-4 border-gray-900"/></a>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-900 h-screen flex flex-col text-5xl text-white pl-8 pt-8">
                    <div className="flex flex-row flex-wrap justify-around items-center">
                        <div className="p-16">React</div>
                        <div className="p-16">JavaScript</div>
                        <div className="p-16">CSS</div>
                        <div className="p-16">Tailwind</div>
                        <div className="p-16">Java</div>
                        <div className="p-16">C</div>
                        <div className="p-16">Python</div>
                        <div className="p-16">SQL</div>
                        <div className="p-16">Figma</div>
                        <div className="p-16">Git</div>
                        <div className="p-16">Linux</div>
                        <div className="p-16">Bash</div>
                        <div className="p-16">Agile</div>

                    </div>

                </div>


                <div className="bg-gray-900 border-t-4 border-amber-300 h-auto flex flex-row justify-center items-center text-9xl text-white">
                    <Footer/>
                </div>
            </div>
        </>

    );
};

export default Home;