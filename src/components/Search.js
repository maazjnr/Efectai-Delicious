import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandle = (e) => {
        e.preventDefault();
        navigate("/searched" + input)
    }

    return(
        <div className="search-container">

        <form onSubmit={submitHandle}>
            <div>
                <input onChange={(e) => setInput(e.target.value)}
                 text="" placeholder="Search Recipes" value={input}
                 />
            </div>
        </form>
        
        </div>
    )
}

export default Search