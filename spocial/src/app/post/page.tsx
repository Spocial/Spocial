"use client"
import React, { useState } from "react";
import Link from 'next/link'
import { usePostContext } from '../PostContext';

const Post = () => {
    const { addPost } = usePostContext();
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [steps, setSteps] = useState<string[]>([]);
    // newIngredient is the ingredient we are adding
    // setNewTask is a setter function
    const [newIngredient, setNewIngredient] = useState<string>("");
    const [newStep, setNewStep] = useState<string>("");
    const [editIndex, setEditIndex] = useState(null); // Track index of item to edit


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
    const maxRows = Math.max(ingredients.length, steps.length);

    const handleAddPost = () => {
        if (ingredients.length > 0 && steps.length > 0) {
            // Create the post object
            const newPost = {
                ingredients,
                steps,
                user: "Anonymous", // Adjust user handling as necessary
            };

            // Add the post to the context
            addPost(newPost);

            // Optionally, reset the form after posting
            setIngredients([]);
            setSteps([]);
        } else {
            alert("Please add both ingredients and steps before submitting.");
        }
    };
    return (
        <div>
            <div>
                <span className="inria-serif-regular">
                    <h1>Spocial</h1>
                    <div className="divider"></div>
                </span>
            </div>
            <div>
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
                    <li>
                        <span className="inria-serif-regular">
                            <div className="h7">
                                <Link href="/signin">Sign In</Link>
                            </div>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="vl"></div>
            <div>
                <span className="inria-serif-regular">
                    <h2>Ingredient List</h2>
                </span>
            </div>
            <div>
                <span className="inria-serif-regular">
                    <h3>Instructions</h3>
                </span>
            </div>


            <div style={{ margin: '0px auto', maxWidth: '1000px', padding: '20px', marginLeft: '350px' }}>
                {/* Ingredients Section */}
                {/* <div style={{ flex:1, maxWidth: '48%'}}> */}
                {/* <span className="inria-serif-regular">
                    <h2>Ingredient List</h2>
                </span> */}
                <input
                    type="text"
                    placeholder="Enter an ingredient..."
                    value={newIngredient}
                    onChange={handleInputChange}
                    style={{
                        width: '200px',
                        padding: '10px',
                        // marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginLeft: '0px',
                        marginTop: '180px',
                        // position: 'fixed',
                    }}
                />
                <button
                    onClick={addIngredient}
                    style={{
                        // display: 'block',
                        padding: '10px 10px',
                        backgroundColor: '#D3D3D3',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginBottom: '20px',
                        fontFamily: 'Inria Serif',
                        // position: 'fixed',
                    }}
                >
                    Add Ingredient
                </button>
                <input
                    type="text"
                    placeholder="Enter a step..."
                    value={newStep}
                    onChange={handleStepInputChange}
                    style={{
                        width: '200px',
                        padding: '10px',
                        // marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginLeft: '250px',
                        flexWrap: 'wrap',
                        // marginTop:'180px',
                        // position: 'fixed',
                    }}
                />
                <button
                    onClick={addStep}
                    style={{
                        // display: 'block',
                        padding: '10px 20px',
                        backgroundColor: '#D3D3D3',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginBottom: '20px',
                        fontFamily: 'Inria Serif',
                        marginRight: '20px',
                        // position: 'fixed',
                    }}
                >
                    Add Step
                </button>



            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginTop: "20px" }}>
                {/* Left Task List */}
                <div style={{ width: "45%", marginLeft: "430px", borderRadius: "0px" }}>
                    {Array.from({ length: maxRows }).map((_, index) => (
                        <div key={index} style={{ fontSize: "1.2rem", marginBottom: "5px", padding: "10px", minHeight: "30px", fontFamily: "Inria Serif", maxWidth: "200px", display: "flex", borderRadius: "5px", justifyContent: "space-between" }}>
                            {ingredients[index] || ""}
                            {ingredients[index] && (
                                <button onClick={() => deleteIngredient(index)} style={{ maxHeight: "40px", width: "75px", marginLeft: "10px", backgroundColor: "lightcoral", borderRadius: "5px" }}>
                                    Delete
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Task List */}
                <div style={{ width: "55%" }}>
                    {Array.from({ length: maxRows }).map((_, index1) => (
                        <div key={index1} style={{ fontSize: "1.2rem", marginBottom: "5px", padding: "10px", minHeight: "30px", fontFamily: "Inria Serif", display: "flex", maxWidth: "400px", justifyContent: "space-between" }}>
                            {steps[index1] || ""}
                            {steps[index1] && (
                                <button onClick={() => deleteStep(index1)} style={{ maxHeight: "40px", width: "85px", marginLeft: "10px", backgroundColor: "lightcoral", borderRadius: "5px", padding: "5px" }}>
                                    Delete
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: "20px", textAlign: "center" }}>

                    {/* Add Post */}
                    <button
                        onClick={handleAddPost}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        Add Post
                    </button>
                </div>

            </div>


        </div>




    );
};
export default Post;