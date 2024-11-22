import "./App.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Post from "./components/Post.jsx";
import RecipeBook from "./components/RecipeBook.jsx";
function App() {
    return (
        <>
            <Router>
                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />
                    {/* This route is for about component with exact path "/about", in component props we passes the imported component*/}
                    <Route
                        path="/Post"
                        element={<Post />}
                    />
                    <Route
                        path="/RecipeBook"
                        element={<RecipeBook />}
                    />

                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </>
    );
}
export default App;