import React from 'react'
import {useNavigate} from "react-router";

const PageTwo = () => {
    let navigate=useNavigate()
    const gotoPage1 = () => {
        navigate("/1")
    }
    return (
        <div>
            <h2>PageTwo</h2>
            <button onClick={gotoPage1}>GoTo PageOne</button>
        </div>
    )
}

export default PageTwo