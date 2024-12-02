"use client"

import React, { useState } from "react";
import Link from 'next/link'
const Post = () => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [steps, setSteps] = useState<string[]>([]);
    // newIngredient is the ingredient we are adding
    // setNewTask is a setter function
    const [newIngredient, setNewIngredient] = useState<string>("");
    const [newStep, setNewStep] = useState<string>("");


    // textbox when we add in something
    function handleInputChange(ingredient: React.ChangeEvent<HTMLInputElement>) {
        // if we dont use this function and we type within the box we wont see a change
        setNewIngredient(ingredient.target.value); // Access event parameter, then its target, then its value
    }
    function handleStepInputChange(step: React.ChangeEvent<HTMLInputElement>) {
        // if we dont use this function and we type within the box we wont see a change
        setNewStep(step.target.value); // Access event parameter, then its target, then its value
    }
    function addIngredient() {
        if (newIngredient.trim() != "") { // Prevents user from adding empty textboxes
            setIngredients(ing => [...ing, newIngredient]); // Adds a new ingredient
            setNewIngredient(""); // Resets the textbox
        }
    }
    function addStep() {
        if (newStep.trim() != "") { // Prevents user from adding empty textboxes
            setSteps(ing => [...ing, newStep]); // Adds a new ingredient
            setNewStep(""); // Resets the textbox
        }
    }

    // function deletes ingredient at the given index
    function deleteIngredient(index: number) {
        const updatedIngredients = ingredients.filter((_, i) => i !== index); // "_" is a convention to say ignore
        setIngredients(updatedIngredients);
    }
    function deleteStep(index: number) {
        const updatedSteps = steps.filter((_, i) => i !== index); // "_" is a convention to say ignore
        setSteps(updatedSteps);
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

            {/* <div className="header">
                <h1>Spocial</h1>
            </div> */}
            <span className="inria-serif-regular">
                <h1>Spocial</h1>
                <div className="divider"></div>
            </span>
            <span className="inria-serif-regular">
                <h2>Ingredient List</h2>
            </span>
            <span className="inria-serif-regular">
                <h3>Instructions</h3>
            </span>
            <div>
                <input
                    className="ingredient-input"
                    type="text"
                    placeholder="Enter an ingredient..."
                    value={newIngredient}
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addIngredient}>
                    <span className="inria-serif-regular">
                        Add
                    </span>
                </button>
                <input
                    className="step-input"
                    type="text"
                    placeholder="Enter a step..."
                    value={newStep}
                    onChange={handleStepInputChange} />
                <button
                    className="step-add-button"
                    onClick={addStep}>
                    <span className="inria-serif-regular">
                        Add
                    </span>
                </button>

                {/* <input onChange = {change}
                value = {val}/>
                <button onClick = {click}>add</button> */}

                <ul style={{ listStyle: 'none' }}>
                    <li>
                        {/* Endpoint to route to Post component */}
                        <span className="inria-serif-regular">
                            <Link href="/"><h4>Home</h4></Link>
                        </span>
                    </li>
                    <li>
                        {/* Endpoint to route to Post component */}
                        <span className="inria-serif-regular">
                            <Link href="/post"><h5>Post</h5></Link>
                        </span>
                    </li>
                    <li>
                        <span className="inria-serif-regular">
                            <Link href="/recipebook"><h6>Recipe Book</h6></Link>
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
                            <span className="inria-serif-regular">
                                Delete
                            </span>
                        </button>

                    </ul>
                )}
            </ol>
            <ol>
                {steps.map((step, index) =>
                    <ul key={index}>
                        {/* text of each list element */}
                        <span className="text">{step}</span>
                        <button
                            className="step-delete-button"
                            onClick={() => deleteStep(index)}>
                            <span className="inria-serif-regular">
                                Delete
                            </span>
                        </button>

                    </ul>
                )}
            </ol>
            <div className="vl"></div>

        </div>

    );
};
// const Divider = () => {
//     return (
//         <hr
//             style={{ borderTop: "1px solid black" }}
//         ></hr>
//     );
// };
export default Post;