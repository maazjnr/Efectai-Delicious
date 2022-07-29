import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';

const Popular = () => {

    let myApiKey = "dc08124ff78a4ea9855372247525457d";
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const url = `https://api.spoonacular.com/recipes/random?apiKey=${myApiKey}&number=20&tags=vegetarian`;

        const check = localStorage.getItem("popular");
        if(check) {
            setPopular(JSON.parse(check))
        } else{
            const api = await fetch(url);
            const data = await api.json();
            setPopular(data.recipes)
            localStorage.setItem("popular", JSON.stringify(data.recipes));
        }
    };

    return(
        <div className='popular'>
            <h1>OUR POPULAR PICKS</h1> 
            <Splide options={{
            perPage: 3, 
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "100px"
            }}>
            {popular.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                    <div className='popular-container'>
                        <Link to='/'>
                        <img src={recipe.image} alt="popularimage" />
                        <p>{recipe.title}</p>
                        </Link>
                    </div>
                    </SplideSlide>
                )
            })}
            </Splide>
        </div>
    )
}

export default Popular