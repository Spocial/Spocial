"use client"

import Link from 'next/link'
import { usePostContext } from "./PostContext";

export default function Home() {
  const { posts } = usePostContext();
  return (
    <div>
      <span className="inria-serif-regular">
        <h1><Link href="/">Spocial</Link></h1>
        <div className="divider"></div>
      </span>
      <span className="inria-serif-regular">
        <div className="Feedtop">
          Feed
        </div>
      </span>
      {/* Render the posts */}
      <div style={{
        position: 'fixed',
        top: '120px',        // Adjust the top margin (distance from the top of the page)
        left: '240px',      // Indent the container 250px from the left
        width: '70%',       // Set the width of the posts container
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',        // Add some space between posts
        padding: '0 10px',
      }}>
        {posts.length === 0 ? (
          <span className="inria-serif-regular">Sorry, kitchen's empty D:</span>
        ) : (
          posts.map((post, index) => (
            <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
              <span className="inria-serif-regular">Post by {post.user} <br /></span>
              <span className="inria-serif-regular">Ingredients:</span>
              <ul>
                {post.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
              <span className="inria-serif-regular">Steps:</span>
              <ul>
                {post.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
      {/* Render the posts ^^^ */}
      <ul style={{ listStyle: 'none' }}>
        <li>
          {/* Endpoint to route to Post component */}
          <span className="inria-serif-regular">
            <Link href="/"><h4>Home</h4></Link>
          </span>
        </li>
        <li>
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
      <div className="vl"></div>
    </div >
  )
}