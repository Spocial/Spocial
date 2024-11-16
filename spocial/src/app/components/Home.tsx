import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <span className="inria-serif-regular">
                <h1>Spocial</h1>
            </span>
            <br />
            <ul style={{ listStyle: 'none' }}>
                <li>
                    {/* Endpoint to route to Post component */}
                    <span className="inria-serif-regular">
                        <Link to="/Post">Post a Recipe</Link>
                    </span>
                </li>
                <li>
                    {/* Endpoint to route to RecipeBook component */}
                    <span className="inria-serif-regular">
                        <Link to="/RecipeBook">Recipe Book</Link>
                    </span>
                </li>
            </ul>
        </div>
    );
};
export default Home;