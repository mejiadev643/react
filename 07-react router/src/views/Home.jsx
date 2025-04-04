import {Link} from '../utils/Link'
export default function Home() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">Go to About</Link>
        <p>Welcome to the home page!</p>
      </div>
    )
  }