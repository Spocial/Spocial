import React from "react";
import Link from 'next/link'
const RecipeBook = () => {

    return (
        <div>
            <span className="inria-serif-regular">
                <h1>Spocial</h1>
                <h2>Recipe Book</h2>
            </span>

            <ul style={{ listStyle: 'none' }}>
                <li>
                    {/* Endpoint to route to Post component */}
                    <span className="inria-serif-regular">
                        <Link href="/">Home</Link>
                    </span>
                </li>
            </ul>
        </div>
    );
};
export default RecipeBook;