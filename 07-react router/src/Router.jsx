import { useState, useEffect } from 'react'

export const Router = ({ routes = [], defaultComponent: DefaultComponent= ()=> <h4>Not Found!!</h4> }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', onLocationChange)
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  const CurrentComponent = routes.find(route => route.path === currentPath)?.component || DefaultComponent

  return <CurrentComponent />
}