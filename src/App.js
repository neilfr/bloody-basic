import React from 'react'
import {HashRouter, Route, Routes} from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

const App = () => {
    return(
        <div>
            <h1>
                Basic
            </h1>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<PageOne/>}/>
                    <Route path="/1" element={<PageOne/>}/>
                    <Route path="/2" element={<PageTwo/>}/>
                </Routes>
            </HashRouter>

        </div>
    )
}

export default App