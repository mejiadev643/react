import { Link } from "../utils/Link";

export default function Search({routeParams}) {
    return (
        <div>
            <h1>Search</h1>
            <p>This is the search page.</p>
            <p>You searched for.</p>
            <h1>{ routeParams.search}</h1>
            <Link to='/'>Go to Home</Link>
        </div>
    )
}