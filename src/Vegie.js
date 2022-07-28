import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';

const Vegie = () => {

    let myApiKey = "dc08124ff78a4ea9855372247525457d";


    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVegie();
    }, []);

    const url = (`https://api.spoonacular.com/recipes
    /random?apiKey=${myApiKey}&number=9&tags=vegetarian`)

    const getVegie = async () => {
        const check = localStorage.getItem('veggie');
        if(check) {
            setVeggie(JSON.parse(check))
        } else{
            const api = await fetch(url);
            const data = await api.json();
            setVeggie(data.recipes)
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
        }
    };

    return(
        <div className='veggie'>
            <h1>OUR VEGETARIAN</h1> 
            <Splide options={{
            perPage: 3, 
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "90px"
            }}>
            {veggie.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                    <div className='veggie-container'>
                        <img src={recipe.image} alt="" />
                        <p>{recipe.title}</p>
                    </div>
                    </SplideSlide>
                )
            })}
            </Splide>
        </div>
    )
}

export default Vegie