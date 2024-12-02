"use client"

import React, { useState } from "react";
import Link from 'next/link'
const Post = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    // newIngredient is the ingredient we are adding
    // setNewTask is a setter function
    const [newIngredient, setNewIngredient] = useState<string>("");

    // textbox when we add in something
    function handleInputChange(ingredient: React.ChangeEvent<HTMLInputElement>) {
        // if we dont use this function and we type within the box we wont see a change
        setNewIngredient(ingredient.target.value); // Access event parameter, then its target, then its value
    }

    function addIngredient() {
        if (newIngredient.trim() != "") { // Prevents user from adding empty textboxes
            setIngredients(ing => [...ing, newIngredient]); // Adds a new ingredient
            setNewIngredient(""); // Resets the textbox
        }
    }

    // function deletes ingredient at the given index
    function deleteIngredient(index: number) {
        const updatedIngredients = ingredients.filter((_, i) => i !== index); // "_" is a convention to say ignore
        setIngredients(updatedIngredients);
    }

    // const [val, setVal] = useState([{ingredients: ""}])
    // const click = () => {
    //     alert(val)
    // }
    // const change = event => {
    //    setVal(event.target.value)
    // }
    return (
        <div>
            <span className="inria-serif-regular">
                <h1>Spocial</h1>
                <h2>Post a Recipe</h2>
            </span>
            <div>
                <input
                    type="text"
                    placeholder="Enter an ingredient..."
                    value={newIngredient}
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addIngredient}>
                    Add
                </button>
                {/* <input onChange = {change}
                value = {val}/>
                <button onClick = {click}>add</button> */}

                <ul style={{ listStyle: 'none' }}>
                    <li>
                        {/* Endpoint to route to Post component */}
                        <span className="inria-serif-regular">
                            <Link href="/">Home</Link>
                        </span>
                    </li>
                </ul>
            </div>
            <ol>
                {ingredients.map((ingredient, index) =>
                    <ul key={index}>
                        {/* text of each list element */}
                        <span className="text">{ingredient}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteIngredient(index)}>
                            Delete
                        </button>

                    </ul>
                )}
            </ol>
        </div>
    );
};
export default Post;