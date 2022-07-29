import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

const Vegie = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);

    let myApiKey = "dc08124ff78a4ea9855372247525457d";

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVegie();
    }, []);

    const getVegie = async () => {

        const url = `https://api.spoonacular.com/recipes/random?apiKey=${myApiKey}&number=22&tags=vegetarian`;

        const check = localStorage.getItem("veggie");
        if(check) {
            setVeggie(JSON.parse(check))
        } else{
            const api = await fetch(url);
            const data = await api.json();
            setVeggie(data.recipes)
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
        }
    };

    return(
        <div className='veggie' data-aos="zoom-in">
            <h1>OUR VEGETARIAN</h1> 
            <Splide options={{
            perPage: 3, 
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "120px"
            }}>
            {veggie.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                    <div className='veggie-container'>
                        <Link to='/'>
                        <img src={recipe.image} alt="veggieimage" />
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

export default Vegie;