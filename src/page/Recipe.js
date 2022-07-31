import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const Recipe = () => {

    let myApi = "dc08124ff78a4ea9855372247525457d";

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instruction')
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
        <div className="recipes">
                            <h2 className="">{details.title}</h2>
            <div className="recipe-container">
                <img className="recipe-image" src={details.image} alt="" />

            <div className="recipe-details">
            <button className={activeTab === 'instruction' ? 'active' : ""}
            onClick={() => setActiveTab("instruction")} >
                Instruction
            </button>

            <button className={activeTab === 'ingredient' ? 'active' : ""}
            onClick={() => setActiveTab('ingredient')} >
                Ingredient
            </button>

            {activeTab === "instruction" && (
                            <div>
                            <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                            <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                        </div>
                )}

                {activeTab === "ingredient" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>

                )}
            </div>
            </div>

        </div>
    )
}

const DetailsWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    padding: 5rem;
    display: flex;
`;


export default Recipe;