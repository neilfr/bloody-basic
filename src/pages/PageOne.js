import React from 'react'
import {useNavigate} from "react-router";

const PageOne = () => {
    let navigate=useNavigate()
    const gotoPage2 = () => {
        navigate("/2")
    }
    return (
        <div>
            <h2>PageOne</h2>
            <button onClick={gotoPage2}>GoTo PageTwo</button>
            <a onClick={gotoPage2}>page two</a>
        </div>
    )
}

export default PageOne