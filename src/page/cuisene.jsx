import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";


function Cuisine() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let myApiKey = "dc08124ff78a4ea9855372247525457d";
  const [cuisine, setCuisine] = useState([])
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`
    https://api.spoonacular.com/recipes/complexSearch?apiKey=${myApiKey}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results)
  };

  useEffect(() => {
    getCuisine(params.type)
  },[params.type])

    return <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5}}

    >
      {cuisine.map((item) => {
        return(
          <Card key={item.id} data-aos="zoom-out">
            <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt='' />
            <h4>{item.title}</h4>
            </Link>
          </Card>

        )
      })}
    </Grid>
}

  const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  padding: 30px;
  `

  const Card = styled(motion.div)`


  img{
    width: 100%;
    border-radius: 2rem;
  }

  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    color: orange;
  }

  @media screen and (max-width: 360px){
    img{
      width: 95%;
      border-radius: 2rem;
    }
  }
  `

  export default Cuisine