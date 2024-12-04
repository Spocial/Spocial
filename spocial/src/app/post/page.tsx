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

    return (
        <div>
{/* <<<<<<< HEAD
=======
            <span className="inria-serif-regular">
                <h1><Link href="/">Spocial</Link></h1>
                <div className="divider"></div>
            </span>

            <span className="inria-serif-regular">
                <h2>Ingredient List</h2>
            </span>

            <span className="inria-serif-regular">
                <h3>Instructions</h3>
            </span> */}

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


             <div style={{ margin: '0px auto', maxWidth: '1000px', padding: '20px' , marginLeft:'350px'}}>
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
                    marginLeft:'0px',
                    marginTop:'180px',
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
                    marginLeft:'250px',
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
        <div style={{ width: "45%",  marginLeft: "430px",borderRadius: "0px"}}>
          {Array.from({ length: maxRows }).map((_, index) => (
            <div key={index} style={{ fontSize:"1.2rem",marginBottom: "5px", padding: "10px", minHeight: "30px" ,fontFamily: "Inria Serif",  maxWidth:"200px", display: "flex", borderRadius: "5px", justifyContent: "space-between"}}>
              {ingredients[index] || ""}
              {ingredients[index] && (
                <button onClick={() => deleteIngredient(index)} style={{ maxHeight: "40px", width: "75px",marginLeft: "10px", backgroundColor: "lightcoral", borderRadius:"5px" }}>
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Right Task List */}
        <div style={{ width: "55%" }}>
          {Array.from({ length: maxRows }).map((_, index1) => (
            <div key={index1} style={{fontSize:"1.2rem", marginBottom: "5px",padding: "10px",minHeight: "30px" ,fontFamily: "Inria Serif", display: "flex",maxWidth:"400px",justifyContent: "space-between"}}>
              {steps[index1] || ""}
              {steps[index1] && (
                <button onClick={() => deleteStep(index1)} style={{maxHeight:"40px", width: "85px",marginLeft: "10px", backgroundColor: "lightcoral",  borderRadius:"5px" , padding:"5px"}}>
                  Delete
                </button>
              )}
            </div>
          ))}
          
        </div>

        </div>
            

        </div>

        
        

    );
};
export default Post;
// "use client"



// import React, { useState } from "react";
// import Link from 'next/link'
// const Post = () => {
    // const [ingredients, setIngredients] = useState<string[]>([]);
    // const [steps, setSteps] = useState<string[]>([]);
    // // newIngredient is the ingredient we are adding
    // // setNewTask is a setter function
    // const [newIngredient, setNewIngredient] = useState<string>("");
    // const [newStep, setNewStep] = useState<string>("");
    // const [editIndex, setEditIndex] = useState(null); // Track index of item to edit


    // // textbox when we add in something
    // function handleInputChange(ingredient: React.ChangeEvent<HTMLInputElement>) {
    //     // if we dont use this function and we type within the box we wont see a change
    //     setNewIngredient(ingredient.target.value); // Access event parameter, then its target, then its value
    // }
    // function handleStepInputChange(step: React.ChangeEvent<HTMLInputElement>) {
    //     // if we dont use this function and we type within the box we wont see a change
    //     setNewStep(step.target.value); // Access event parameter, then its target, then its value
    // }
    // function addIngredient() {
    //     if (newIngredient.trim() != "") { // Prevents user from adding empty textboxes
    //         setIngredients(ing => [...ing, newIngredient]); // Adds a new ingredient
    //         setNewIngredient(""); // Resets the textbox
    //     }
    // }

    // // const handleAction = () => {
    // //     if (newIngredient.trim() === '') return; // Avoid adding empty items

    // //     if (editIndex !== null) {
    // //         // Edit existing item
    // //         const updatedList = newIngredient.map((item, index) =>
    // //             index === editIndex ? { ...item, value: newIngredient } : item
    // //         );
    // //         setNewIngredient(updatedList);
    // //         setEditIndex(null); // Reset edit mode
    // //     } else {
    // //         // Add new item
    // //         const newItem = {
    // //             id: Math.random(), // Consider using a more reliable ID generator
    // //             value: newIngredient,
    // //         };
    // //         setNewIngredient([...ingredients, newItem]);
    // //     }

    // //     setNewIngredient(''); // Clear input field
    // // };

    // function addStep() {
    //     if (newStep.trim() != "") { // Prevents user from adding empty textboxes
    //         setSteps(ing => [...ing, newStep]); // Adds a new ingredient
    //         setNewStep(""); // Resets the textbox
    //     }
    // }

    // // function deletes ingredient at the given index
    // function deleteIngredient(index: number) {
    //     const updatedIngredients = ingredients.filter((_, i) => i !== index); // "_" is a convention to say ignore
    //     setIngredients(updatedIngredients);
    // }
    // function deleteStep(index: number) {
    //     const updatedSteps = steps.filter((_, i) => i !== index); // "_" is a convention to say ignore
    //     setSteps(updatedSteps);
    // }
    // const startEdit = (index: number) => {
    //     setNewIngredient(ingredients[index].valueOf);
    //     setEditIndex(index); // Set the index of the item to be edited
    // };
   

    // const [val, setVal] = useState([{ingredients: ""}])
    // const click = () => {
    //     alert(val)
    // }
    // const change = event => {
    //    setVal(event.target.value)
    // }
//     return (
//         <div>

//             {/* <div className="header">
//                 <h1>Spocial</h1>
//             </div> */}
//             <div>
//                 <span className="inria-serif-regular">
//                     <h1>Spocial</h1>
//                     <div className="divider"></div>
//                 </span>
//             </div>
//             <div>
//             <ul style={{ listStyle: 'none' }}>
//                         <li>
//                             {/* Endpoint to route to Post component */}
//                             <span className="inria-serif-regular">
//                                 <Link href="/"><h4>Home</h4></Link>
//                             </span>
//                         </li>
//                         <li>
//                             {/* Endpoint to route to Post component */}
//                             <span className="inria-serif-regular">
//                                 <Link href="/post"><h5>Post</h5></Link>
//                             </span>
//                         </li>
//                         <li>
//                             <span className="inria-serif-regular">
//                                 <Link href="/recipebook"><h6>Recipe Book</h6></Link>
//                             </span>
//                         </li>
//                     </ul>
//             </div>
            // <div style={{ margin: '50px auto', maxWidth: '800px', padding: '20px' }}>
            // {/* Ingredients Section */}
            // {/* <div style={{ flex:1, maxWidth: '48%'}}> */}
            //     <span className="inria-serif-regular">
            //         <h2>Ingredient List</h2>
            //     </span>
            //     <input
            //     type="text"
            //     placeholder="Enter an ingredient..."
            //     value={newIngredient}
            //     onChange={handleInputChange}
            //     style={{
            //         width: '20%',
            //         padding: '10px',
            //         marginBottom: '10px',
            //         borderRadius: '5px',
            //         border: '1px solid #ccc',
            //         marginLeft:'370px',
            //         marginTop:'180px',
            //         // position: 'fixed',
            //     }}
            //     />
            //     <button
            //     onClick={addIngredient}
            //     style={{
            //         // display: 'block',
            //         padding: '10px 20px',
            //         backgroundColor: '#D3D3D3',
            //         color: '#000000',
            //         border: 'none',
            //         borderRadius: '5px',
            //         cursor: 'pointer',
            //         marginBottom: '20px',
            //         fontFamily: 'Inria Serif',
            //         // position: 'fixed',
            //     }}
            //     >
            //     Add Ingredient
            //     </button>
                

            //     <ul style={{ padding: '0', listStyle: 'none' }}>
            //     {ingredients.map((ingredient, index) => (
            //         <li
            //         key={index}
            //         style={{
            //             marginBottom: '10px',
            //             padding: '10px',
            //             backgroundColor: '#f9f9f9',
            //             border: '1px solid #ddd',
            //             borderRadius: '5px',
            //             display: 'flex',
            //             justifyContent: 'space-between',
            //             alignItems: 'center',
            //             width:'20%',
            //             marginLeft:'420px',
            //         }}
            //         >
            //         <span>{ingredient}</span>
            //         <button
            //             onClick={() => deleteIngredient(index)}
            //             style={{
            //             backgroundColor: '#dc3545',
            //             color: '#fff',
            //             border: 'none',
            //             borderRadius: '5px',
            //             padding: '5px 10px',
            //             cursor: 'pointer',
                        
            //             }}
            //         >
            //             Delete
            //         </button>
            //         </li>
            //     ))}
            //     </ul>

            // </div>

            
//             <div className="vl"></div>
            

//         </div>
        

//     );
// };
// // const Divider = () => {
// //     return (
// //         <hr
// //             style={{ borderTop: "1px solid black" }}
// //         ></hr>
// //     );
// // };
// export default Post;

// {/* <div>
//                 <input
//                     className="ingredient-input"
//                     type="text"
//                     placeholder="Enter an ingredient..."
//                     value={newIngredient}
//                     onChange={handleInputChange} />
//                 <button
//                     className="add-button"
//                     onClick={addIngredient}>
//                     <span className="inria-serif-regular">
//                         Add
//                     </span>
//                 </button>
//                 <input
//                     className="step-input"
//                     type="text"
//                     placeholder="Enter a step..."
//                     value={newStep}
//                     onChange={handleStepInputChange} />
//                 <button
//                     className="step-add-button"
//                     onClick={addStep}>
//                     <span className="inria-serif-regular">
//                         Add
//                     </span>
//                 </button>
//             </div>
           
//             {/* <br /> */}
        
//         //     <ul>
//         //         <ol>
//         //             {ingredients.map((ingredient, index) =>
//         //                 <li key={index}>
//         //                     {/* text of each list element */}
//         //                     <span className="textIngredient">{ingredient}</span>
//         //                     <button
//         //                         className="delete-button"
//         //                         onClick={() => deleteIngredient(index)}>
//         //                         <span className="inria-serif-regular">
//         //                             Delete
//         //                         </span>
//         //                     </button>

//         //                 </li>
//         //             )}
//         //         </ol>
//         //     </ul>
//         //      */}
            
// {/* <div
// style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}
// >
// {ingredients.length > 0 ? (
//     ingredients.map((item, index) => (
//         <div
//             key={index} // Use the unique id as the key
//             style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginBottom: '10px',
//             }}
//         >
//             <span style={{ fontSize: '1.2rem', flexGrow: '1' }}>
//                 {newIngredient}
//             </span>
//             <span>
//                 <button
//                     style={{
//                         padding: '10px',
//                         backgroundColor: '#f44336',
//                         color: 'white',
//                         border: 'none',
//                         borderRadius: '8px',
//                         marginRight: '10px',
//                         cursor: 'pointer',
//                     }}
//                     onClick={() => deleteIngredient(index)}
//                 >
//                     Delete
//                 </button>
//                 {/* <button
//                     style={{
//                         padding: '10px',
//                         backgroundColor: '#2196f3',
//                         color: 'white',
//                         border: 'none',
//                         borderRadius: '8px',
//                         cursor: 'pointer',
//                     }}
//                     onClick={() => startEdit(index)}
//                 >
//                     Edit
//                 </button> */}
// //             </span>
// //         </div>
// //     ))
// // ) : (
// //     <div
// //         style={{ textAlign: 'center', fontSize: '1.2rem', color: '#777' }}
// //     >
// //         No items in the list
// //     </div>
// // )}
// // </div> */}

// {/* <ul>
//                 {steps.map((step, index) =>
//                     <ul key={index}>
//                         {/* text of each list element */}
//             //             <span className="text">{step}</span>
//             //             <button
//             //                 className="step-delete-button"
//             //                 onClick={() => deleteStep(index)}>
//             //                 <span className="inria-serif-regular">
//             //                     Delete
//             //                 </span>
//             //             </button>

//             //         </ul>
//             //     )}
//             // </ul> */}


//             // <div style={{ flex: '1', maxWidth: '48%' }}>
//             // <span className="inria-serif-regular">
//             //         <h3>Instructions</h3>
//             //     </span>
//             // <input
//             //     type="text"
//             //     placeholder="Enter a step..."
//             //     value={newStep}
//             //     onChange={handleStepInputChange}
//             //     style={{
//             //         width: '20%',
//             //         padding: '10px',
//             //         marginBottom: '10px',
//             //         borderRadius: '5px',
//             //         border: '1px solid #ccc',
//             //         marginLeft:'1050px',
//             //         marginTop:'180px',
//             //         // position: 'fixed',
//             //     }}
//             //     />
//             //     <button
//             //     onClick={addStep}
//             //     style={{
//             //         // display: 'block',
//             //         padding: '10px 20px',
//             //         backgroundColor: '#D3D3D3',
//             //         color: '#000000',
//             //         border: 'none',
//             //         borderRadius: '5px',
//             //         cursor: 'pointer',
//             //         marginBottom: '20px',
//             //         fontFamily: 'Inria Serif',
//             //         // position: 'fixed',
//             //         marginLeft: '450px',
//             //         marginTop: '180px',
//             //     }}
//             //     >
//             //     Add Step
//             //     </button>
//             //     <ul style={{ padding: '0', listStyle: 'none' }}>
//             //     {steps.map((step, index) => (
//             //         <li
//             //         key={index}
//             //         style={{
//             //             marginBottom: '10px',
//             //             padding: '10px',
//             //             backgroundColor: '#f9f9f9',
//             //             border: '1px solid #ddd',
//             //             borderRadius: '5px',
//             //             display: 'flex',
//             //             justifyContent: 'space-between',
//             //             alignItems: 'center',
//             //             width:'20%',
//             //             marginLeft:'1020px',
//             //         }}
//             //         >
//             //         <span>{step}</span>
//             //         <button
//             //             onClick={() => deleteStep(index)}
//             //             style={{
//             //             backgroundColor: '#dc3545',
//             //             color: '#fff',
//             //             border: 'none',
//             //             borderRadius: '5px',
//             //             padding: '5px 10px',
//             //             cursor: 'pointer',
//             //             }}
//             //         >
//             //             Delete
//             //         </button>
//             //         </li>
//             //     ))}
//             //     </ul>
//             // </div>
            