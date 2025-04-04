import './App.css'

function NotFound(){ return <h1>404 - Not Found</h1>}


import { Router } from './Router'
import { routes } from './router/routes'

function App() {


  return (
    <>
      <div className="App">
        <h1>SPA Router</h1>
        <Router routes={routes} defaultComponent={NotFound} />
        {/* <p>Click the links to navigate:</p>
        <ul>
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.path}</Link>
            </li>
          ))}
        </ul> */}
        <p>Try refreshing the page to see that the state is preserved.</p>
      </div>
    </>
  )
}

export default App