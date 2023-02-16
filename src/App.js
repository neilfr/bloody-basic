import React from 'react'
import {HashRouter, Route, Routes} from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
    return(
        <div className="flex">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/1" element={<PageOne/>}/>
                    <Route path="/2" element={<PageTwo/>}/>
                    <Route path='/projects' exact element={<Projects/>} />
                    <Route path='/contact' exact element={<Contact/>} />
                    <Route path='/home' exact element={<Home/>} />
                </Routes>
            </HashRouter>

        </div>
    )
}

export default App