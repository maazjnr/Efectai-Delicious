import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Vegie = () => {

    let myApiKey = "dc08124ff78a4ea9855372247525457d";
    const [veggie, setVegie] = useState([]);

    useEffect(() => {
        getVegie();
    }, []);


    const getVegie = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${myApiKey}&number=9&tags=vegetarian`);
        const data = await api.json();
        setVegie(data.recipes)
    };

    return(
        <div className='veggie'>
            <Splide options={{
            perPage: 3, 
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "40px"
            }}>
            {veggie.map((recipe) => {
                return(
                    <SplideSlide>
                    <div className='veggie-container'>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt="" />
                    </div>
                    </SplideSlide>
                )
            })}
            </Splide>
        </div>
    )
}

export default Vegie