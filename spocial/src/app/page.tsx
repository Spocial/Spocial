"use client"

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <span className="inria-serif-regular">
        <h1><Link href="/">Spocial</Link></h1>
        <div className="divider"></div>
      </span>
      <br />
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
      <div className="vl"></div>
    </div>
  )
}