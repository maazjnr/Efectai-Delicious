import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Searched from "./Searched";

const Pages = () => {
    const location = useLocation();

    return(
        <div>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/search/:searched" element={<Searched />} />
            </Routes>
        </div>
    )
}

export default Pages