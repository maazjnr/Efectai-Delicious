import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Searched = () => {

    let myApiKey = "dc08124ff78a4ea9855372247525457d";
    const [seachedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearhedRecipes = async (name) => {
        const url = (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${myApiKey}&query=${name}`)
        const data = await fetch(url);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        console.log(recipes)
    }

    useEffect(() => {
        getSearhedRecipes(params.search)
    }, [params.search])

    return(
        <div>
            {seachedRecipes.map((items) => {
                return(
                    <div>
                        <p>{items.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Searched