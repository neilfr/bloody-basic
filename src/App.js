import React from 'react'
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const App = () => {
    return(
        <div>
            <h1>
                Hello World
            </h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageOne/>}/>
                    <Route path="/1" element={<PageOne/>}/>
                    <Route path="/2" element={<PageTwo/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App