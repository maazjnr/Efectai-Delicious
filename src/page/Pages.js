import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Cuisine from "./cuisene";
import Footer from "./Footer";

const Pages = () => {
    
    const location = useLocation();

    return(
        <div>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/recipe/:name" element={<Recipe />} />
            </Routes>
        </div>
    )
}

export default Pages
