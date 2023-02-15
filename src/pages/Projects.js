import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeWarriorsHome from "../resources/codewarriors_home.jpeg";
import SnapCycleHome from "../resources/snapcycle_home.png";
import PortfolioSkills from "../resources/portfolio_skills.png";
import {useNavigate} from "react-router";
const Projects = () => {
    let navigate = useNavigate()
    const goToPortfolio = () => {
        navigate("/portfolio")
    }
    return (
        <>
            <div className="bg-gray-800 w-screen font-bold text-white">
                <Navbar/>

                <div className="h-auto bg-gray-900 pb-16">
                    <div className="h-auto bg-gray-900">
                        <div className="flex flex-col justify-center items-center">
                            <div className="mx-16 mt-32 flex flex-row justify-center items-center">
                                <div className="w-1/3 flex flex-col justify-center text-4xl items-center rounded-xl">
                                    <div className="pb-4">Portfolio</div>
                                    <a onClick={goToPortfolio} className="hover:opacity-50">
                                        <img src={PortfolioSkills} className="rounded-2xl border-4 border-gray-900"/>
                                    </a>
                                </div>
                                <div className="w-2/3 ml-16 text-xl">
                                    My personal portfolio outlining my projects and skills<br/><br/>Developed using React JS and Tailwind CSS
                                </div>
                            </div>
                            <div className="mx-16 mt-32 flex flex-row justify-center items-center">
                                <div className="w-1/3 flex flex-col justify-center text-4xl items-center rounded-xl">
                                    <div className="pb-4">SnapCycle</div>
                                    <a href="https://devpost.com/software/snapcycle-hyx3qv" target="_blank" className="hover:opacity-50">
                                        <img src={SnapCycleHome} className="rounded-2xl border-4 border-gray-900"/>
                                    </a>
                                </div>
                                <div className="w-2/3 ml-16 text-xl">
                                    Won Best Environmental Hack at MacHacks 3<br/><br/>
                                    SnapCycle is a web app that scans items and provides information about the environmental impact using AI<br/><br/>
                                    Developed using React, PyTorch, Python, and Flask
                                </div>
                            </div>
                            <div className="mx-16 mt-32 flex flex-row justify-center items-center">
                                <div className="w-1/3 flex flex-col justify-center text-4xl items-center rounded-xl">
                                    <div className="pb-4">CodeWarriors</div>
                                    <a href="https://devpost.com/software/code-warriors" target="_blank" className="hover:opacity-50">
                                        <img src={CodeWarriorsHome} className="rounded-2xl border-4 border-gray-900"/>
                                    </a>
                                </div>
                                <div className="w-2/3 ml-16 text-xl">
                                    Won 1st place for the best hack at DeltaHacks IX<br/><br/>
                                    CodeWarriors is a gamified web app that teaches programming skills<br/><br/>
                                    Developed using React and Tailwind.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 border-t-4 border-amber-300 h-auto flex flex-row justify-center items-center text-9xl text-white">
                    <Footer/>
                </div>
            </div>
        </>

    );
};

export default Projects;