
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <span className="inria-serif-regular">
        <Link href="/">Spocial</Link>
      </span>
      <br />
      <ul style={{ listStyle: 'none' }}>
        <li>
          {/* Endpoint to route to Post component */}
          <span className="inria-serif-regular">
            <Link href="/post">Post</Link>
          </span>
        </li>
        <li>
          {/* Endpoint to route to RecipeBook component */}
          <span className="inria-serif-regular">
            <Link href="/recipebook">RecipeBook</Link>
          </span>
        </li>
          <li>
              {/* Endpoint to route to Post component */}
              <span className="inria-serif-regular">
            <Link href="/signin">Sign In</Link>
          </span>
          </li>
      </ul>
    </div>
  )
}