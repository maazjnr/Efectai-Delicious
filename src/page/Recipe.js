import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const Recipe = () => {

    let myApi = "dc08124ff78a4ea9855372247525457d";

    const [details, setDetails] = useState({});
    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${myApi}`
        )
        const detailData = await data.json();
        setDetails(detailData)

    }

    useEffect(() => {
        fetchDetails();
    },[params.name]);

    return(
        <DetailsWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>

        </DetailsWrapper>
    )
}

const DetailsWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    padding: 5rem;
    display: flex;
`;


export default Recipe;