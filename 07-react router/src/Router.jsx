import { useState, useEffect, Children } from 'react'
import { match } from 'path-to-regexp'

export const Router = ({ children, routes = [], defaultComponent: DefaultComponent = () => <h4>Not Found!!</h4> }) => {
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
    const routesFromChildren = Children.map(children, ({ props, type }) => {
        const { name } = type
        const isRoute = name === 'Route'
        return isRoute ? props : null
    });
    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
    let routeParams = {}
    const Page = routesToUse.find(({ path }) => {
        if (path === currentPath) return true

        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false

        routeParams = matched.params
        return true
    })?.Component

    return Page ? (
        <Page routeParams={routeParams} />
    ) : (
        <DefaultComponent />
    )
}