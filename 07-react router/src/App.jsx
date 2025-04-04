import { lazy, Suspense } from 'react'

import './App.css'

function NotFound() { return <h1>404 - Not Found</h1> }

import { Router } from './Router'
import { routes } from './router/routes'
import { Route } from './router/route'
// import Home from './views/Home'
// import About from './views/About'
//importar home y about lazy
const Home = lazy(() => import('./views/Home'))
const About = lazy(() => import('./views/About'))

function App() {


  return (
    <>
      <div className="App">
        <h1>SPA Router</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Router routes={routes} defaultComponent={NotFound} >
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
          </Router>
        </Suspense>

        <p>Try refreshing the page to see that the state is preserved.</p>
      </div>
    </>
  )
}

export default App