import { Link } from "../utils/Link"

export function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page.</p>
            <img src="https://dummyjson.com/image/150" alt="Placeholder" />
            <p>Here is some information about us.</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
}