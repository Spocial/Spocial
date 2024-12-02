import "./App.css"
import Link from 'next/link'

function App() {
    return (
        <ul>
            <li>
                <Link href="/Home">Home</Link>
            </li>

            <li>
                <Link href="/Post">Post</Link>
            </li>

            <li>
                <Link href="/Recipe Book">Recipe Book</Link>
            </li>
        </ul>
    );
}
export default App;