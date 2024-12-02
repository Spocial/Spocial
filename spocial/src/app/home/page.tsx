import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <span className="inria-serif-bold">
                <Link href="/">Spocial</Link>
            </span>
            <br />
            <ul style={{ listStyle: 'none' }}>
                <li>
                    {/* Endpoint to route to Post component */}
                    <span className="inria-serif-regular">
                        <Link href="/Post">Post</Link>
                    </span>
                </li>
                <li>
                    {/* Endpoint to route to RecipeBook component */}
                    <span className="inria-serif-regular">
                        <Link href="/RecipeBook">RecipeBook</Link>
                    </span>
                </li>
            </ul>
        </div>
    )
}